\# Exercise 6 - Library Management System



\## 1. Understand Search Algorithms



Searching algorithms are used to find a specific element from a collection of data. In this exercise, Linear Search and Binary Search are used to find books by their title.



\### Linear Search



Linear Search checks each element one by one until the required element is found or the end of the collection is reached.



It does not require the data to be sorted and is simple to implement.



\### Binary Search



Binary Search repeatedly divides the search range into half to find the required element.



It compares the target value with the middle element and continues searching either the left half or the right half.



Binary Search requires the data to be sorted before searching.



\## 2. Setup



A C# Console Application named `LibraryManagementSystem` was created using Visual Studio.



The project contains the following files:



\- `Book.cs` - Stores the details of books.

\- `BookSearch.cs` - Contains Linear Search and Binary Search methods.

\- `Program.cs` - Creates the book array and tests both search algorithms.



\## 3. Implementation



A `Book` class was created with the following properties:



\- BookId

\- Title

\- Author



An array is used to store the book records.



The books are stored in alphabetical order by title so that Binary Search can work correctly.



The following search algorithms were implemented:



\- Linear Search

\- Binary Search



\### Linear Search Implementation



Linear Search starts from the first book and checks each book title one by one until the required title is found.



The title comparison ignores uppercase and lowercase differences.



\### Binary Search Implementation



Binary Search starts by checking the middle element of the sorted book array.



Based on the comparison between the middle book title and the required title, the search continues in either the left half or the right half of the array.



This process continues until the required book is found or the search range becomes empty.



\## 4. Analysis



\### Time Complexity Comparison



| Search Algorithm | Best Case | Average Case | Worst Case |

|------------------|-----------|--------------|------------|

| Linear Search | O(1) | O(n) | O(n) |

| Binary Search | O(1) | O(log n) | O(log n) |



\### When to Use Linear Search



Linear Search is suitable for small datasets or when the data is not sorted.



It is simple to implement and does not require any preprocessing or sorting of the data.



\### When to Use Binary Search



Binary Search is more suitable for large and sorted datasets.



It is faster than Linear Search because it reduces the search range by half after every comparison.



However, the data must be sorted before Binary Search can be used.



\### Conclusion



Linear Search is useful for small or unsorted datasets, while Binary Search provides better search performance for large and sorted datasets.



For a Library Management System with a large collection of books stored in sorted order, Binary Search is generally a better choice because its average and worst-case time complexity is O(log n).

