\# Task 4 - Accounts Manager Login Unit Testing



\## Overview



This task demonstrates automated unit testing of the user login functionality using the NUnit framework. The `AccountsManagerLib` module validates user credentials and returns appropriate success or failure messages.



\## Project Structure



```text

Task 4 - Accounts Manager Login

├── AccountsManagerLib

│   └── AccountsManager.cs

├── AccountsManagerLib.Tests

│   └── AccountsManagerTests.cs

└── Output

```



\## Implementation



\- Created the `AccountsManagerLib` project containing the login functionality.

\- Implemented login validation for the provided valid user credentials.

\- Returned the appropriate welcome message for valid credentials.

\- Returned an invalid user ID/password message for incorrect credentials.

\- Threw an `ArgumentException` when the user ID or password was not provided.

\- Created the `AccountsManagerLib.Tests` NUnit test project.

\- Added `AccountsManagerLib` as a project reference.

\- Tested both valid user credentials.

\- Tested invalid login credentials.

\- Tested missing user ID and password scenarios.

\- Followed the `UnitUnderTest\_Scenario\_ExpectedOutcome` naming convention.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` for assertions.



\## Test Failure Verification



To verify that the unit tests correctly detect changes in the source functionality, the valid login functionality was temporarily modified to return an incorrect message.



The tests were executed again after modifying the source code. As expected, the unit test detected the incorrect functionality and failed.



After observing the failed test result, the original implementation was restored and all tests were executed again successfully.



\## Concepts Implemented



\- NUnit Unit Testing

\- TestFixture and Test Attributes

\- SetUp Attribute

\- Single Assertion Rule

\- Assert.That()

\- Exception Testing

\- Login Validation Testing

\- Test Failure Verification

\- Test Naming Conventions

