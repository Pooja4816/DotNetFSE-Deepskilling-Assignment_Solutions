\# Exercise 11: Implementing Dependency Injection



\## Scenario



This exercise demonstrates the implementation of Dependency Injection in a customer management application. The goal is to manage the dependency between the service class and repository class using constructor injection.



\## Project Name



`DependencyInjectionExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `DependencyInjectionExample`.



\### 2. Define Repository Interface



Created an `ICustomerRepository` interface with a `FindCustomerById()` method.



\### 3. Implement Concrete Repository



Created a `CustomerRepositoryImpl` class that implements the `ICustomerRepository` interface and provides the implementation of the `FindCustomerById()` method.



\### 4. Define Service Class



Created a `CustomerService` class that depends on the `ICustomerRepository` interface.



\### 5. Implement Dependency Injection



Used constructor injection to inject the `ICustomerRepository` dependency into the `CustomerService` class.



\### 6. Test the Dependency Injection Implementation



Created a `CustomerRepositoryImpl` object and injected it into the `CustomerService` through its constructor. The service was then used to find a customer by ID.



\## Conclusion



Dependency Injection was successfully implemented using constructor injection, reducing direct dependency between the service and repository classes.

