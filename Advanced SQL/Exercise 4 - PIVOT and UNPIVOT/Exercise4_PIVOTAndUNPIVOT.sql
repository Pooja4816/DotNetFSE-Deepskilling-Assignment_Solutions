
-- Use the existing database
USE OnlineRetailStore;
GO

-- Step 1: Aggregate sales quantity by product and month

SELECT
    P.ProductName,
    MONTH(O.OrderDate) AS SalesMonth,
    SUM(OD.Quantity) AS TotalQuantity
FROM Orders O
JOIN OrderDetails OD
    ON O.OrderID = OD.OrderID
JOIN Products P
    ON OD.ProductID = P.ProductID
GROUP BY
    P.ProductName,
    MONTH(O.OrderDate)
ORDER BY
    P.ProductName,
    SalesMonth;
GO

-- Step 2: Use PIVOT to convert months from rows into columns

SELECT
    ProductName,
    ISNULL([1], 0) AS January,
    ISNULL([2], 0) AS February,
    ISNULL([3], 0) AS March
FROM
(
    -- Get product, month, and quantity details
    SELECT
        P.ProductName,
        MONTH(O.OrderDate) AS SalesMonth,
        OD.Quantity
    FROM Orders O
    JOIN OrderDetails OD
        ON O.OrderID = OD.OrderID
    JOIN Products P
        ON OD.ProductID = P.ProductID
) AS SourceTable

PIVOT
(
    SUM(Quantity)
    FOR SalesMonth IN ([1], [2], [3])
) AS PivotTable;
GO

-- Step 3: Use UNPIVOT to convert month columns back into rows

WITH PivotedSales AS
(
    SELECT
        ProductName,
        ISNULL([1], 0) AS January,
        ISNULL([2], 0) AS February,
        ISNULL([3], 0) AS March
    FROM
    (
        SELECT
            P.ProductName,
            MONTH(O.OrderDate) AS SalesMonth,
            OD.Quantity
        FROM Orders O
        JOIN OrderDetails OD
            ON O.OrderID = OD.OrderID
        JOIN Products P
            ON OD.ProductID = P.ProductID
    ) AS SourceTable

    PIVOT
    (
        SUM(Quantity)
        FOR SalesMonth IN ([1], [2], [3])
    ) AS PivotTable
)

-- Convert month columns back into rows
SELECT
    ProductName,
    SalesMonth,
    TotalQuantity
FROM PivotedSales

UNPIVOT
(
    TotalQuantity
    FOR SalesMonth IN (January, February, March)
) AS UnpivotTable;
GO