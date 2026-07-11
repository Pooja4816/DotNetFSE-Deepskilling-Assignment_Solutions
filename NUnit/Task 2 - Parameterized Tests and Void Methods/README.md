\# Task 2 - Parameterized Tests and Void Methods



\## Overview



This task demonstrates unit testing of different calculator operations using the NUnit testing framework. It covers parameterized test cases, testing methods that return values, exception handling, and testing void methods.



\## Project Structure



```text

Task 2 - Parameterized Tests and Void Methods

├── MathLibrary

│   └── Calculator.cs

├── MathLibrary.Tests

│   └── CalculatorTests.cs

└── Output

```



\## Implementation



\- Created the `MathLibrary` project containing calculator operations.

\- Implemented Addition, Subtraction, Multiplication, and Division methods.

\- Implemented the `GetResult` property to access the result of an operation.

\- Implemented the `AllClear()` method to reset the result to zero.

\- Created the `MathLibrary.Tests` NUnit test project.

\- Added `MathLibrary` as a project reference.

\- Used `\[TestCase]` to test subtraction, multiplication, and division with multiple input values.

\- Tested division by zero using exception handling.

\- Used assertions to compare actual and expected results.

\- Created the `TestAddAndClear` test method to verify the `AllClear()` functionality.



\## Concepts Implemented



\- NUnit Unit Testing

\- Parameterized Test Cases

\- TestCase Attribute

\- Testing Return Values

\- Exception Handling

\- Assert.Fail

\- Testing Void Methods

\- Assert.That

