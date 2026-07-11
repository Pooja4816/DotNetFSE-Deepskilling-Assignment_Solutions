\# Task 5 and 6 - Mock Database for Unit Tests



\## Overview



This exercise demonstrates how to create testable database-related code and perform unit testing using NUnit and Moq.



The application manages player registration and uses `IPlayerMapper` to interact with the database. Moq is used to create a mock implementation of `IPlayerMapper`, allowing the player registration functionality to be tested without accessing the actual database.



\## Project Structure



```text

Task 5 and 6 - Mock Database

├── PlayersManagerLib

│   ├── IPlayerMapper.cs

│   ├── PlayerMapper.cs

│   ├── PlayerManager.cs

│   └── Player.cs

│

└── PlayerManager.Tests

&#x20;   └── PlayerManagerTests.cs

```



\## Task 5 - Create Player Management Library



\- Created the `PlayersManagerLib` Class Library.

\- Defined the `IPlayerMapper` interface.

\- Implemented the `PlayerMapper` class for database operations.

\- Created the `Player` class.

\- Implemented player registration functionality.

\- Used dependency injection to allow `IPlayerMapper` to be replaced with a mock object during unit testing.



\## Task 6 - Unit Testing with NUnit and Moq



\- Created the `PlayerManager.Tests` project.

\- Added NUnit, NUnit3TestAdapter, Moq, and Microsoft.NET.Test.Sdk packages.

\- Added a project reference to `PlayersManagerLib`.

\- Created a mock object of `IPlayerMapper`.

\- Configured `IsPlayerNameExistsInDb()` to return `false`.

\- Tested player registration without accessing the actual database.

\- Used `TestFixture`, `OneTimeSetUp`, and `TestCase` attributes.

\- Verified the player's name, age, country, and number of matches using `Assert.That`.



\## Concepts Implemented



\- Unit Testing

\- Mocking

\- NUnit

\- Moq

\- Database Dependency Mocking

\- Dependency Injection

\- Loose Coupling

\- Testable Code

