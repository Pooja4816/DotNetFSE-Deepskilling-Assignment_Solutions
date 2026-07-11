# Task 1 and 2 - Write Testable Code with Moq

## Overview

This exercise demonstrates how to create testable and loosely coupled code using Dependency Injection, NUnit, and Moq.

The application contains mail-sending functionality that communicates with an external SMTP server. To perform unit testing without sending an actual email, the `IMailSender` dependency is mocked using Moq.

## Project Structure

```text
Task 1 and 2 - Mail Sender
├── CustomerCommLib
│   ├── IMailSender.cs
│   ├── MailSender.cs
│   └── CustomerComm.cs
│
└── CustomerComm.Tests
    └── CustomerCommTests.cs
```

## Task 1 - Create Testable Code

- Created the `CustomerCommLib` Class Library.
- Defined the `IMailSender` interface.
- Implemented the `MailSender` class.
- Created the `CustomerComm` class.
- Used Constructor Dependency Injection to achieve loose coupling and make the code testable.

## Task 2 - Unit Testing with NUnit and Moq

- Created the `CustomerComm.Tests` project.
- Added NUnit, NUnit3TestAdapter, Moq, and Microsoft.NET.Test.Sdk packages.
- Added a project reference to `CustomerCommLib`.
- Created a mock object of `IMailSender`.
- Configured the mocked `SendMail()` method to accept any two string arguments and return `true`.
- Used `TestFixture`, `OneTimeSetUp`, and `TestCase` attributes.
- Used `Assert.That` to verify that the result is `true`.

## Concepts Implemented

- Unit Testing
- Mocking
- NUnit
- Moq
- Dependency Injection
- Constructor Injection
- Loose Coupling
- Testable Code