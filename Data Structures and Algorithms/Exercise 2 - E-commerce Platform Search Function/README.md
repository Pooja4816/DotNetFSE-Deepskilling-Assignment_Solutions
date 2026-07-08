\# Exercise 2 - E-commerce Platform Search Function



\## 1. Understand Asymptotic Notation



Big O notation is used to describe the performance of an algorithm as the input size increases. It helps us understand how much time an algorithm may take when the amount of data becomes large.



In an e-commerce platform, search performance is important because there can be a large number of products.



\### Search Cases



\- Best Case: The product is found at the first position.

\- Average Case: The product is found somewhere in the middle.

\- Worst Case: The product is found at the last position or is not present.



\## 2. Setup



A C# Console Application named `EcommerceSearch` was created using Visual Studio.



The project contains the following files:



\- `Product.cs` - Stores the product details.

\- `Search.cs` - Contains Linear Search and Binary Search methods.

\- `Program.cs` - Creates the product array and tests both search algorithms.



\## 3. Implementation



A `Product` class was created with the following properties:



\- ProductId

\- ProductName

\- Category



Products are stored in an array.



Two searching algorithms were implemented:



\- Linear Search

\- Binary Search



\### Linear Search



Linear Search checks each product one by one until the required ProductId is found.



\### Binary Search



Binary Search repeatedly divides the search range into half. The product array must be sorted before using Binary Search.



\## 4. Analysis



\### Time Complexity Comparison



| Search Algorithm | Best Case | Average Case | Worst Case |

|------------------|-----------|--------------|------------|

| Linear Search | O(1) | O(n) | O(n) |

| Binary Search | O(1) | O(log n) | O(log n) |



\### Which Search Algorithm is Better?



For a large e-commerce platform, Binary Search is more efficient than Linear Search because its time complexity is O(log n).



Linear Search checks products one by one, while Binary Search reduces the search area by half after every comparison.



However, Binary Search requires the product data to be sorted before searching.



Therefore, for large and sorted product data, Binary Search is a better choice because it provides faster search performance.

