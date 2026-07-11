\# Task 1 - Calculator Unit Testing with NUnit



\## Overview



This task demonstrates how to perform unit testing on a Calculator application using the NUnit testing framework. The addition functionality of the Calculator is tested using multiple parameterized test cases.



\## Project Structure



```text

Task 1 - Calculator

├── CalcLibrary

│   └── Calculator.cs

├── Calculator.Tests

│   └── CalculatorTests.cs

└── Output

```



\## Implementation



\- Created the `CalcLibrary` project containing the Calculator class.

\- Implemented the `Add()` method to perform the addition operation.

\- Created the `Calculator.Tests` project for unit testing.

\- Added `CalcLibrary` as a project reference to the test project.

\- Created the `CalculatorTests` class to test the addition functionality.

\- Used `\[TestFixture]` to define the test class.

\- Used `\[SetUp]` to initialize the Calculator object before each test.

\- Used `\[TearDown]` to perform cleanup after each test.

\- Used `\[TestCase]` to execute the test method with different input values and expected results.

\- Used `Assert.That` to compare the actual result with the expected result.



\## Concepts Implemented



\- Unit Testing

\- NUnit Framework

\- TestFixture

\- SetUp

\- TearDown

\- Parameterized Test Cases

\- TestCase

\- Assert.That

