\# Exercise 4 - Employee Management System



\## 1. Understand Array Representation



An array is a data structure that stores elements of the same type. Array elements are stored in continuous memory locations and can be accessed using their index.



In this exercise, an array is used to store employee records.



\### Advantages of Arrays



\- Arrays provide fast access to elements using an index.

\- They are simple to use and understand.

\- Arrays are useful when the number of elements is known in advance.

\- Traversing elements in an array is easy.



\## 2. Setup



A C# Console Application named `EmployeeManagementSystem` was created using Visual Studio.



The project contains the following files:



\- `Employee.cs` - Stores employee details.

\- `EmployeeManager.cs` - Contains methods to manage employee records.

\- `Program.cs` - Creates employee records and tests different operations.



\## 3. Implementation



An `Employee` class was created with the following properties:



\- EmployeeId

\- Name

\- Position

\- Salary



An array of Employee objects is used to store employee records.



The following operations were implemented:



\- Add Employee

\- Search Employee

\- Traverse and Display Employees

\- Delete Employee



\### Add Employee



A new employee is added at the next available position in the array. The `employeeCount` variable is used to keep track of the number of employees currently stored.



\### Search Employee



Employees are searched by their EmployeeId using Linear Search. Each employee is checked one by one until the required employee is found.



\### Traverse Employees



A loop is used to visit and display each employee stored in the array.



\### Delete Employee



The employee is first searched using EmployeeId. After finding the employee, the remaining elements are shifted one position to the left to fill the empty position.



\## 4. Analysis



\### Time Complexity



| Operation | Time Complexity |

|-----------|-----------------|

| Add | O(1) |

| Search | O(n) |

| Traverse | O(n) |

| Delete | O(n) |



Adding an employee at the next available position takes O(1) time.



Searching takes O(n) time in the worst case because each employee may need to be checked.



Traversing takes O(n) time because all stored employees are visited once.



Deleting takes O(n) time because the employee may need to be searched and the remaining elements may need to be shifted.



\### Limitations of Arrays



The main limitation of an array is that its size is fixed when it is created. If the array becomes full, a larger array must be created to store more elements.



Insertion and deletion can also be costly because elements may need to be shifted.



\### When to Use Arrays



Arrays are suitable when the number of elements is known in advance and fast access using an index is required.



For this Employee Management System, an array provides a simple way to understand and implement basic operations such as adding, searching, traversing, and deleting employee records.

