\# Exercise 3: Implementing the Builder Pattern



\## Scenario



This exercise demonstrates the implementation of the Builder Design Pattern to create complex objects such as a Computer with multiple optional parts.



\## Project Name



`BuilderPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `BuilderPatternExample`.



\### 2. Define a Product Class



Created a `Computer` class with the following attributes:



\- CPU

\- RAM

\- Storage



\### 3. Implement the Builder Class



Created a nested `Builder` class inside the `Computer` class.



The Builder class provides methods to set different attributes of the Computer:



\- `SetCPU()`

\- `SetRAM()`

\- `SetStorage()`



A `Build()` method is provided to create and return the final `Computer` object.



\### 4. Implement the Builder Pattern



The `Computer` class has a private constructor that accepts the `Builder` object as a parameter.



This ensures that Computer objects are created using the Builder class.



\### 5. Test the Builder Implementation



Created two different Computer configurations using the Builder Pattern:



\- Gaming Computer

\- Office Computer



\## Output



```text

Gaming Computer:

CPU: Intel Core i9

RAM: 32GB

Storage: 1TB SSD



Office Computer:

CPU: Intel Core i5

RAM: 16GB

Storage: 512GB SSD

```



\## Conclusion



The output demonstrates that different configurations of Computer objects can be created using the Builder Pattern. Therefore, the Builder Design Pattern has been implemented successfully.

