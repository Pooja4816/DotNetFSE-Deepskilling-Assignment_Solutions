-- Create the database
CREATE DATABASE OnlineRetailStore;
GO


-- Use the database
USE OnlineRetailStore;
GO


-- Create the Products table
CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10, 2)
);
GO


-- Insert sample product data
INSERT INTO Products (ProductID, ProductName, Category, Price)
VALUES
(1, 'Laptop', 'Electronics', 75000),
(2, 'Smartphone', 'Electronics', 50000),
(3, 'Tablet', 'Electronics', 30000),
(4, 'Smart TV', 'Electronics', 30000),
(5, 'Headphones', 'Electronics', 5000),

(6, 'Sofa', 'Furniture', 40000),
(7, 'Dining Table', 'Furniture', 25000),
(8, 'Office Chair', 'Furniture', 15000),
(9, 'Bookshelf', 'Furniture', 15000),
(10, 'Coffee Table', 'Furniture', 8000),

(11, 'Refrigerator', 'Appliances', 45000),
(12, 'Washing Machine', 'Appliances', 35000),
(13, 'Air Conditioner', 'Appliances', 35000),
(14, 'Microwave', 'Appliances', 12000),
(15, 'Mixer Grinder', 'Appliances', 5000);
GO

-- Display all products
SELECT * FROM Products;
GO

-- Step 1: Use ROW_NUMBER() to assign a unique rank within each category
WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,

        -- Divide products by category and rank them by price in descending order
        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum

    FROM Products
)

-- Display the top 3 most expensive products from each category
SELECT *
FROM RankedProducts
WHERE RowNum <= 3;
GO

-- Step 2: Use RANK() to see how ties are handled within each category
WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,

        -- Rank products within each category by price in descending order
        RANK() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS ProductRank

    FROM Products
)

-- Display the top 3 most expensive products from each category
SELECT *
FROM RankedProducts
WHERE ProductRank <= 3;
GO

-- Step 2: Use DENSE_RANK() to compare how ties are handled within each category
WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,

        -- Rank products within each category without skipping ranks after ties
        DENSE_RANK() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS DenseRank

    FROM Products
)

-- Display the top 3 most expensive products from each category
SELECT *
FROM RankedProducts
WHERE DenseRank <= 3;
GO