\# Task 5 - Collections Testing with NUnit



\## Overview



This task demonstrates unit testing of collections using the NUnit framework. The `CollectionsLib` project manages a collection of Employee objects, and NUnit tests are used to verify different collection-related scenarios.



\## Project Structure



```text

Task 5 - Collections Testing

├── CollectionsLib

│   ├── Employee.cs

│   └── EmployeeManager.cs

├── CollectionsLib.Tests

│   └── EmployeeManagerTests.cs

└── Output

```



\## Implementation



\- Created the `CollectionsLib` project to manage Employee collections.

\- Created the `Employee` class with employee ID and name properties.

\- Overrode the `Equals()` and `GetHashCode()` methods to compare Employee objects based on their IDs.

\- Implemented `GetEmployees()` to return a collection of Employee objects.

\- Implemented `GetEmployeesWhoJoinedInPreviousYears()` to return another employee collection.

\- Created the `CollectionsLib.Tests` NUnit test project.

\- Added `CollectionsLib` as a project reference.

\- Verified that the employee collection contains no null values.

\- Verified that an employee with ID `100` exists in the collection.

\- Verified that the employee collection contains only unique employees.

\- Verified that both employee collections contain equivalent items.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` and NUnit collection constraints.



\## Test Failure Verification



To verify that the unit tests correctly detect changes in the source functionality, the employee ID `100` in the `GetEmployees()` method was temporarily changed to `99`.



The tests were executed again after modifying the source code. As expected, two tests passed and two tests failed. The tests successfully detected that employee ID `100` was missing and that the two employee collections were no longer equivalent.



After observing the failed test results, the employee ID was restored to `100`, and all tests were executed successfully again.



\## Concepts Implemented



\- NUnit Unit Testing

\- Collection Testing

\- Collection Constraints

\- Single Assertion Rule

\- Assert.That()

\- Object Equality

\- Equals() and GetHashCode()

\- Unique Collection Validation

\- Collection Equivalence

\- Test Failure Verification

