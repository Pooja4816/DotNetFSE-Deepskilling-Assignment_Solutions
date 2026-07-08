\# Exercise 5 - Task Management System



\## 1. Understand Linked Lists



A linked list is a dynamic data structure where elements are stored in nodes. Each node contains data and a reference to another node.



Unlike arrays, linked list elements are not required to be stored in continuous memory locations.



\### Singly Linked List



In a Singly Linked List, each node contains data and a reference to the next node.



The traversal is possible only in the forward direction.



Example:



Task 101 → Task 102 → Task 103 → null



\### Doubly Linked List



In a Doubly Linked List, each node contains data and two references. One reference points to the next node and another reference points to the previous node.



It allows traversal in both forward and backward directions.



\## 2. Setup



A C# Console Application named `TaskManagementSystem` was created using Visual Studio.



The project contains the following files:



\- `Task.cs` - Stores task details.

\- `TaskNode.cs` - Represents a node of the linked list.

\- `TaskLinkedList.cs` - Contains methods to manage tasks using a singly linked list.

\- `Program.cs` - Creates tasks and tests the linked list operations.



\## 3. Implementation



A `Task` class was created with the following properties:



\- TaskId

\- TaskName

\- Status



A `TaskNode` class was created to represent each node in the singly linked list. Each node stores the task data and a reference to the next node.



The `TaskLinkedList` class uses a head reference to store the first node of the linked list.



The following operations were implemented:



\- Add Task

\- Search Task

\- Traverse and Display Tasks

\- Delete Task



\### Add Task



A new node is created for the task and added at the end of the linked list.



\### Search Task



The linked list is traversed from the head node, and each TaskId is checked until the required task is found.



\### Traverse Tasks



Starting from the head, each node is visited one by one until the end of the linked list is reached.



\### Delete Task



The required task is searched using its TaskId. The links between nodes are updated to remove the required task from the linked list.



\## 4. Analysis



\### Time Complexity



| Operation | Time Complexity |

|-----------|-----------------|

| Add | O(n) |

| Search | O(n) |

| Traverse | O(n) |

| Delete | O(n) |



In the current implementation, adding a task takes O(n) time because the linked list is traversed to find the last node.



Searching takes O(n) time in the worst case because each node may need to be checked.



Traversing takes O(n) time because every node is visited once.



Deleting takes O(n) time in the worst case because the required task may need to be searched before deletion.



\### Advantages of Linked Lists Over Arrays



Linked lists are useful for dynamic data because their size can grow or shrink during program execution.



Unlike arrays, linked lists do not require a fixed size to be decided in advance.



Insertion and deletion can also be performed by updating node references without shifting all the remaining elements.



However, linked lists require additional memory to store references and do not provide direct access to elements using an index.



\### When to Use Linked Lists



Linked lists are suitable when the number of elements can change frequently and insertion or deletion operations are required.



For this Task Management System, a singly linked list provides a simple way to dynamically add, search, traverse, and delete task records.

