-- Use the existing database
USE OnlineRetailStore;
GO

-- Create the Customers table
CREATE TABLE Customers
(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Region VARCHAR(50)
);
GO

-- Create the Orders table
CREATE TABLE Orders
(
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
GO

-- Create the OrderDetails table
CREATE TABLE OrderDetails
(
    OrderDetailID INT PRIMARY KEY,
    OrderID INT,
    ProductID INT,
    Quantity INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
GO

-- Insert sample customer data
INSERT INTO Customers (CustomerID, CustomerName, Region)
VALUES
(1, 'Pooja', 'North'),
(2, 'Ritika', 'South'),
(3, 'Ritesh', 'East'),
(4, 'Siddhi', 'West'),
(5, 'Keshav', 'North');
GO

-- Insert sample order data
INSERT INTO Orders (OrderID, CustomerID, OrderDate)
VALUES
(101, 1, '2026-01-10'),
(102, 2, '2026-01-15'),
(103, 3, '2026-02-05'),
(104, 4, '2026-02-12'),
(105, 5, '2026-03-01');
GO

-- Insert sample order details
INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity)
VALUES
(1, 101, 1, 2),
(2, 101, 3, 1),
(3, 102, 6, 3),
(4, 102, 8, 2),
(5, 103, 11, 1),
(6, 103, 12, 2),
(7, 104, 2, 1),
(8, 104, 7, 2),
(9, 105, 4, 3),
(10, 105, 14, 1);
GO

-- Display the inserted data
SELECT * FROM Customers;
SELECT * FROM Orders;
SELECT * FROM OrderDetails;
GO

-- Join all tables to view region, category, and quantity details
SELECT
    C.Region,
    P.Category,
    OD.Quantity
FROM Orders O
JOIN OrderDetails OD
    ON O.OrderID = OD.OrderID
JOIN Customers C
    ON O.CustomerID = C.CustomerID
JOIN Products P
    ON OD.ProductID = P.ProductID;
GO

-- Use GROUPING SETS to calculate total quantity
-- by region, category, and region with category

SELECT
    C.Region,
    P.Category,
    SUM(OD.Quantity) AS TotalQuantity
FROM Orders O
JOIN OrderDetails OD
    ON O.OrderID = OD.OrderID
JOIN Customers C
    ON O.CustomerID = C.CustomerID
JOIN Products P
    ON OD.ProductID = P.ProductID
GROUP BY GROUPING SETS
(
    (C.Region),
    (P.Category),
    (C.Region, P.Category)
);
GO

-- Use ROLLUP to calculate hierarchical totals
-- by region and category

SELECT
    C.Region,
    P.Category,
    SUM(OD.Quantity) AS TotalQuantity
FROM Orders O
JOIN OrderDetails OD
    ON O.OrderID = OD.OrderID
JOIN Customers C
    ON O.CustomerID = C.CustomerID
JOIN Products P
    ON OD.ProductID = P.ProductID
GROUP BY ROLLUP
(
    C.Region,
    P.Category
);
GO

-- Use CUBE to calculate totals for all combinations
-- of region and category

SELECT
    C.Region,
    P.Category,
    SUM(OD.Quantity) AS TotalQuantity
FROM Orders O
JOIN OrderDetails OD
    ON O.OrderID = OD.OrderID
JOIN Customers C
    ON O.CustomerID = C.CustomerID
JOIN Products P
    ON OD.ProductID = P.ProductID
GROUP BY CUBE
(
    C.Region,
    P.Category
);
GO