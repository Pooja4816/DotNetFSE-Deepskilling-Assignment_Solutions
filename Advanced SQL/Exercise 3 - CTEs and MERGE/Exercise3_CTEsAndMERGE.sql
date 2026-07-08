-- Use the existing database
USE OnlineRetailStore;
GO

-- Step 1: Create a recursive CTE to generate dates for January 2025

WITH CalendarCTE AS
(
    -- Start with the first date
    SELECT CAST('2025-01-01' AS DATE) AS CalendarDate

    UNION ALL

    -- Add one day until the end of January
    SELECT DATEADD(DAY, 1, CalendarDate)
    FROM CalendarCTE
    WHERE CalendarDate < '2025-01-31'
)

-- Display all generated dates
SELECT CalendarDate
FROM CalendarCTE;
GO

-- Step 2: Create a staging table to store updated product prices

CREATE TABLE StagingProducts
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
GO

-- Insert updated and new product data into the staging table

INSERT INTO StagingProducts (ProductID, ProductName, Category, Price)
VALUES
(1, 'Laptop', 'Electronics', 80000),
(2, 'Smartphone', 'Electronics', 55000),
(6, 'Sofa', 'Furniture', 45000),
(16, 'Keyboard', 'Electronics', 3000),
(17, 'Study Table', 'Furniture', 12000);
GO

-- Step 3: Update existing products and insert new products using MERGE

MERGE INTO Products AS Target
USING StagingProducts AS Source
ON Target.ProductID = Source.ProductID

-- Update the price if the product already exists
WHEN MATCHED THEN
    UPDATE SET Target.Price = Source.Price

-- Insert the product if it does not exist
WHEN NOT MATCHED BY TARGET THEN
    INSERT (ProductID, ProductName, Category, Price)
    VALUES (Source.ProductID, Source.ProductName, Source.Category, Source.Price);

GO

-- Display products after the MERGE operation

SELECT *
FROM Products
ORDER BY ProductID;
GO