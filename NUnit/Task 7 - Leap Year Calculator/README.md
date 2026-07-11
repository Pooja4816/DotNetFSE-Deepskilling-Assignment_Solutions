\# Task 7 - Leap Year Calculator Unit Testing



\## Overview



This task demonstrates parameterized testing using the NUnit framework. The application checks whether a given year is a leap year, a non-leap year, or an invalid year.



\## Project Structure



```text

Task 7 - Leap Year Calculator

├── LeapYearCalculatorLib

│   └── LeapYearCalculator.cs

├── LeapYearCalculatorLib.Tests

│   └── LeapYearCalculatorTests.cs

└── Output

```



\## Implementation



\- Created the `LeapYearCalculatorLib` project.

\- Implemented the logic to validate years between `1753` and `9999`.

\- Returns `1` for a leap year.

\- Returns `0` for a non-leap year.

\- Returns `-1` for an invalid year.

\- Created parameterized test cases using the `\[TestCase]` attribute.

\- Tested leap years, non-leap years, and invalid years using a single test method.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` to compare actual and expected results.



\## Test Failure Verification



To verify that the unit tests detect incorrect functionality, the leap year result was temporarily changed from `1` to `0`.



After running the tests again, two test cases failed, showing that the tests successfully detected the incorrect result.



The original functionality was then restored, and all test cases passed successfully.



\## Concepts Implemented



\- NUnit Unit Testing

\- Parameterized Test Cases

\- TestCase Attribute

\- Single Assertion Rule

\- Assert.That()

\- Leap Year Validation

\- Test Failure Verification

