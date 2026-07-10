\# Task 1 - Write Testable Code with Moq



\## Overview



This task demonstrates how to create testable and loosely coupled code for a mail communication application. The application contains mail-sending functionality that communicates with an external SMTP server.



To make the application suitable for unit testing, the `IMailSender` dependency is injected into the `CustomerComm` class using Constructor Dependency Injection. This design allows the real mail sender to be replaced with a mock object during unit testing.



\## Project Structure



```text

CustomerCommLib

├── IMailSender.cs

├── MailSender.cs

└── CustomerComm.cs

```



\## Implementation



\- `IMailSender` defines the contract for the mail-sending functionality.

\- `MailSender` implements the `IMailSender` interface and contains the SMTP mail-sending logic.

\- `CustomerComm` contains the customer communication logic.

\- Constructor Dependency Injection is used to inject `IMailSender` into the `CustomerComm` class.

\- The dependency can be replaced with a mock object during unit testing without sending an actual email.



\## Concepts Used



\- Interface

\- Dependency Injection

\- Constructor Injection

\- Loose Coupling

\- Testable Code

\- Mocking Preparation



\## Result



The `CustomerCommLib` class library was created and built successfully. The application code is now ready for unit testing using NUnit and Moq.

