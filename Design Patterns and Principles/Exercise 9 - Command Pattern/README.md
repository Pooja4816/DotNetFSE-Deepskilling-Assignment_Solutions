\# Exercise 9: Implementing the Command Pattern



\## Scenario



This exercise demonstrates the implementation of the Command Design Pattern in a home automation system. The goal is to issue commands to turn devices on or off using the Command Pattern.



\## Project Name



`CommandPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `CommandPatternExample`.



\### 2. Define Command Interface



Created an `ICommand` interface with an `Execute()` method to provide a common interface for different commands.



\### 3. Implement Concrete Commands



Created the following concrete command classes:



\- `LightOnCommand`

\- `LightOffCommand`



Both classes implement the `ICommand` interface and execute the corresponding action on the `Light` object.



\### 4. Implement Invoker Class



Created a `RemoteControl` class that holds a reference to an `ICommand` object.



The `RemoteControl` provides methods to set a command and execute the selected command.



\### 5. Implement Receiver Class



Created a `Light` class with methods to turn the light on and off.



\### 6. Test the Command Implementation



Created the Light, command, and RemoteControl objects.



The `LightOnCommand` was executed through the `RemoteControl` to turn the light on. The command was then changed to `LightOffCommand` and executed to turn the light off.



\## Output



```text

Light is turned ON.

Light is turned OFF.

```



\## Conclusion



The output demonstrates that different commands can be executed through the RemoteControl using the Command Pattern. Therefore, the Command Design Pattern has been implemented successfully.

