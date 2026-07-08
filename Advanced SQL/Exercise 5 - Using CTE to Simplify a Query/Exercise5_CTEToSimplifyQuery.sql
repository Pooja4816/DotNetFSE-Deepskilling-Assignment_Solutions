
-- Use the existing database
USE OnlineRetailStore;
GO

-- Display all orders
SELECT *
FROM Orders;
GO

-- Insert additional orders

INSERT INTO Orders (OrderID, CustomerID, OrderDate)
VALUES
(106, 1, '2026-03-05'),
(107, 1, '2026-03-10'),
(108, 1, '2026-03-15'),
(109, 2, '2026-03-20');
GO

-- Step 1: Count the number of orders placed by each customer

WITH CustomerOrderCounts AS
(
    SELECT
        CustomerID,
        COUNT(OrderID) AS OrderCount
    FROM Orders
    GROUP BY CustomerID
)

-- Step 2: Display customers with more than 3 orders

SELECT
    C.CustomerID,
    C.CustomerName,
    COC.OrderCount
FROM CustomerOrderCounts COC
JOIN Customers C
ON C.CustomerID = COC.CustomerID
WHERE COC.OrderCount > 3;
GO