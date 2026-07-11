\# Task 3 and 4 - Mock File Object for Unit Tests



\## Overview



This exercise demonstrates how to create testable file system code and perform unit testing using NUnit and Moq.



The application uses the `IDirectoryExplorer` interface to provide file retrieval functionality. Moq is used to create a mock implementation of `IDirectoryExplorer`, allowing the file system functionality to be tested without accessing the actual file system.



\## Project Structure



```text

Task 3 and 4 - Mock File Object

├── MagicFilesLib

│   ├── IDirectoryExplorer.cs

│   └── DirectoryExplorer.cs

│

└── DirectoryExplorer.Tests

&#x20;   └── DirectoryExplorerTests.cs

```



\## Task 3 - Create File System Library



\- Created the `MagicFilesLib` Class Library.

\- Defined the `IDirectoryExplorer` interface.

\- Implemented the `DirectoryExplorer` class.

\- Used `Directory.GetFiles()` to retrieve files from a specified path.



\## Task 4 - Unit Testing with NUnit and Moq



\- Created the `DirectoryExplorer.Tests` project.

\- Added NUnit, NUnit3TestAdapter, Moq, and Microsoft.NET.Test.Sdk packages.

\- Added a project reference to `MagicFilesLib`.

\- Created a mock object of `IDirectoryExplorer`.

\- Configured the mock object with hard-coded file names.

\- Used `TestFixture`, `OneTimeSetUp`, and `TestCase` attributes.

\- Verified that the returned collection is not null.

\- Verified that the collection contains two files.

\- Verified that the collection contains `file.txt`.



\## Concepts Implemented



\- Unit Testing

\- Mocking

\- NUnit

\- Moq

\- Interfaces

\- File System Testing

\- Testable Code

