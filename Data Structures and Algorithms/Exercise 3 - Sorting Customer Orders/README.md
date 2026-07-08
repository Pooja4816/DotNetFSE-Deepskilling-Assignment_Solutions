\# Exercise 3 - Sorting Customer Orders



\## 1. Understand Sorting Algorithms



Sorting algorithms are used to arrange data in a specific order. In this exercise, customer orders are sorted according to their total price.



Some commonly used sorting algorithms are:



\### Bubble Sort



Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. It is simple to understand and implement, but it is not efficient for large amounts of data.



\### Insertion Sort



Insertion Sort takes one element at a time and places it in its correct position in the sorted part of the array. It works well for small or nearly sorted data.



\### Quick Sort



Quick Sort selects a pivot element and divides the array into smaller parts. Elements smaller than the pivot are placed on one side, while larger elements are placed on the other side. The same process is repeated recursively.



\### Merge Sort



Merge Sort divides the array into smaller parts, sorts them, and then merges the sorted parts together. It provides consistent performance for large datasets.



\## 2. Setup



A C# Console Application named `OrderSorting` was created using Visual Studio.



The project contains the following files:



\- `Order.cs` - Stores the details of customer orders.

\- `Sorting.cs` - Contains the Bubble Sort and Quick Sort methods.

\- `Program.cs` - Creates order arrays and tests both sorting algorithms.



\## 3. Implementation



An `Order` class was created with the following properties:



\- OrderId

\- CustomerName

\- TotalPrice



Two sorting algorithms were implemented:



\- Bubble Sort

\- Quick Sort



\### Bubble Sort Implementation



Bubble Sort compares adjacent orders based on their TotalPrice. If the current order has a higher price than the next order, their positions are swapped.



\### Quick Sort Implementation



Quick Sort selects the last element as the pivot. The orders are divided according to their TotalPrice, and the left and right parts are sorted recursively.



Both algorithms sort the customer orders in ascending order of TotalPrice.



\## 4. Analysis



\### Time Complexity Comparison



| Sorting Algorithm | Best Case | Average Case | Worst Case |

|-------------------|-----------|--------------|------------|

| Bubble Sort | O(n) | O(n²) | O(n²) |

| Quick Sort | O(n log n) | O(n log n) | O(n²) |



\### Why is Quick Sort Preferred Over Bubble Sort?



Quick Sort is generally preferred over Bubble Sort because it provides better performance for large amounts of data.



Bubble Sort repeatedly compares adjacent elements and has an average time complexity of O(n²).



Quick Sort divides the problem into smaller parts and has an average time complexity of O(n log n).



Therefore, Quick Sort is generally more suitable for sorting a large number of customer orders.

