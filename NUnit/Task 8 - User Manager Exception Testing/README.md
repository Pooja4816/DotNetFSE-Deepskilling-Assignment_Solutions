\# Task 8 - User Manager Exception Testing



\## Overview



This task demonstrates unit testing of methods that throw exceptions using the NUnit framework. The application validates the PAN Card number while creating a user.



\## Project Structure



```text

Task 8 - User Manager Exception Testing

├── UserManagerLib

│   └── UserManager.cs

├── UserManagerLib.Tests

│   └── UserManagerTests.cs

└── Output

```



\## Implementation



\- Created the `UserManagerLib` project.

\- Implemented the `CreateUser()` method to validate the PAN Card number.

\- A valid PAN Card number must contain exactly 10 characters.

\- Handled `NullReferenceException` for null or empty PAN Card numbers.

\- Handled `FormatException` for PAN Card numbers with invalid length.

\- Created a test case for the successful user creation scenario.

\- Created test cases to verify the expected exceptions.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` for assertions.



\## Test Failure Verification



To verify that the unit tests detect incorrect functionality, the successful user creation result was temporarily changed from `true` to `false`.



After running the tests again, the happy path test failed while the exception tests continued to pass. This confirmed that the unit tests successfully detected the incorrect functionality.



The original functionality was then restored, and all tests passed successfully.



\## Concepts Implemented



\- NUnit Unit Testing

\- Exception Testing

\- NullReferenceException

\- FormatException

\- Happy Path Testing

\- Single Assertion Rule

\- Assert.That()

\- Test Failure Verification

