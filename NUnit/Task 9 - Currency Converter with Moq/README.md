\# Task 9 - Currency Converter with Moq



\## Overview



This task demonstrates unit testing with the Moq framework. The `ConverterLib` application converts a given US Dollar amount into Euro using an external exchange rate service.



Moq is used to mock the external service so that the `USDToEuro()` method can be tested independently.



\## Project Structure



```text

Task 9 - Currency Converter with Moq

├── ConverterLib

│   ├── Converter.cs

│   └── IDollarToEuroExchangeRateFeed.cs

├── ConverterLib.Tests

│   └── ConverterTests.cs

└── Output

```



\## Implementation



\- Created the `ConverterLib` project.

\- Created the `IDollarToEuroExchangeRateFeed` interface to represent the external exchange rate service.

\- Implemented the `USDToEuro()` method in the `Converter` class.

\- Used constructor dependency injection to provide the exchange rate service.

\- Created the `ConverterLib.Tests` NUnit test project.

\- Added the Moq package to the test project.

\- Created mock objects for `IDollarToEuroExchangeRateFeed`.

\- Used `Setup()` and `Returns()` to provide mock exchange rates.

\- Tested the conversion functionality with different Dollar amounts and exchange rates.

\- Followed the Single Assertion Rule.

\- Used `Assert.That()` to compare the actual and expected results.



\## Test Failure Verification



To verify that the unit tests detect incorrect functionality, the conversion operation was temporarily changed from multiplication to addition.



The tests were executed again after modifying the source code. Both test cases failed, showing that the tests successfully detected the incorrect conversion logic.



The original multiplication logic was then restored, and all tests passed successfully.



\## Concepts Implemented



\- NUnit Unit Testing

\- Moq Framework

\- Mock Objects

\- Dependency Injection

\- Interface-Based Dependency

\- Setup() and Returns()

\- Single Assertion Rule

\- Assert.That()

\- Test Failure Verification

