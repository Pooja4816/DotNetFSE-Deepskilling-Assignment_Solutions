\# Task 3 - URL Host Name Parser Unit Testing



\## Overview



This task demonstrates automated unit testing of the `ParseHostName()` functionality using the NUnit framework. The method parses and returns the host name from a given URL.



\## Project Structure



```text

Task 3 - URL Host Name Parser

├── UtilLib

│   └── UrlHostNameParser.cs

├── UtilLib.Tests

│   └── UrlHostNameParserTests.cs

└── Output

```



\## Implementation



\- Created the `UtilLib` project containing the `UrlHostNameParser` class.

\- Implemented the `ParseHostName()` method to extract the host name from a URL.

\- Created the `UtilLib.Tests` NUnit test project.

\- Added `UtilLib` as a project reference.

\- Created test methods for both execution paths of the `ParseHostName()` method.

\- Followed the `UnitUnderTest\_Scenario\_ExpectedOutcome` naming convention.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` to verify actual and expected results.



\## Test Failure Verification



To verify that the unit tests correctly detect changes in the source functionality, the `ParseHostName()` method was temporarily modified to return an incorrect value:



```csharp

return "wrong-host";

```



The tests were executed again after modifying the source code. As expected, one test passed and one test failed, demonstrating that the unit tests successfully detected the incorrect functionality.



After observing the failed test result, the original implementation was restored:



```csharp

return url.Split('/')\[0];

```



The tests were executed again to confirm that both test cases passed successfully.



\## Concepts Implemented



\- NUnit Unit Testing

\- TestFixture and Test Attributes

\- SetUp Attribute

\- Single Assertion Rule

\- Assert.That()

\- Testing Multiple Execution Paths

\- Test Failure Verification

\- Test Naming Conventions

