\# Exercise 1: Implementing the Singleton Pattern



\## Scenario



This exercise demonstrates the implementation of the Singleton Design Pattern using a logging utility class. The goal is to ensure that only one instance of the Logger class is created and used throughout the application lifecycle for consistent logging.



\## Project Name



`SingletonPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `SingletonPatternExample`.



\### 2. Define a Singleton Class



Created a `Logger` class with:



\- A private static instance of the `Logger` class.

\- A private constructor to prevent direct object creation.

\- A public static `GetInstance()` method to provide access to the single instance of the `Logger` class.



\### 3. Implement the Singleton Pattern



Implemented the Singleton Design Pattern to ensure that only one instance of the `Logger` class is created throughout the application lifecycle.



\### 4. Test the Singleton Implementation



Created two Logger references using the `GetInstance()` method and verified that both references point to the same instance.



\## Output



```text

Logger instance created.

Log: First log message.

Log: Second log message.

Both logger instances are the same.

```



\## Conclusion



The output confirms that only one instance of the `Logger` class is created and shared across the application. Therefore, the Singleton Design Pattern has been implemented successfully.

