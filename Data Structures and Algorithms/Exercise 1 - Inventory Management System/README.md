\# Exercise 1 - Inventory Management System



\## 1. Understand the Problem



Data structures and algorithms are important for managing large inventories because they help in storing, searching, updating, and deleting product data efficiently.



Different data structures such as arrays, lists, and dictionaries can be used for inventory management. In this project, I used a Dictionary because every product has a unique ProductId. The ProductId is used as the key, which makes accessing and managing products efficient.



\## 2. Setup



A new C# Console Application named `InventoryManagementSystem` was created using Visual Studio.



The project contains the following files:



\- `Product.cs` - Stores product details.

\- `Inventory.cs` - Manages inventory operations.

\- `Program.cs` - Creates products and tests the inventory operations.



\## 3. Implementation



A `Product` class was created with the following properties:



\- ProductId

\- ProductName

\- Quantity

\- Price



A `Dictionary<int, Product>` was used to store the products. The ProductId is used as the key and the Product object is stored as the value.



The following methods were implemented:



\- `AddProduct()` to add a new product.

\- `UpdateProduct()` to update the quantity and price of a product.

\- `DeleteProduct()` to remove a product.

\- `DisplayProducts()` to display all products.



\## 4. Analysis



\### Time Complexity



| Operation | Average Time Complexity |

|-----------|-------------------------|

| Add | O(1) |

| Update | O(1) |

| Delete | O(1) |

| Display | O(n) |



Dictionary provides an average time complexity of O(1) for adding, updating, and deleting products.



Displaying all products takes O(n) time because every product needs to be visited once.



\### Optimization



Using a Dictionary makes the operations more efficient compared to a List because products can be accessed directly using their ProductId.



The application can be further improved by checking for duplicate ProductIds before adding a new product and by adding proper input validation.

