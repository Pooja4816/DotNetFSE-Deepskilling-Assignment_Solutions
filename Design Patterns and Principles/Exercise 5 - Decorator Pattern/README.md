\# Exercise 5: Implementing the Decorator Pattern



\## Scenario



This exercise demonstrates the implementation of the Decorator Design Pattern in a notification system. The goal is to dynamically add multiple notification channels such as Email, SMS, and Slack.



\## Project Name



`DecoratorPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `DecoratorPatternExample`.



\### 2. Define Component Interface



Created an `INotifier` interface with a `Send()` method to provide a common structure for different notification types.



\### 3. Implement Concrete Component



Created an `EmailNotifier` class that implements the `INotifier` interface and provides the basic email notification functionality.



\### 4. Implement Decorator Classes



Created an abstract `NotifierDecorator` class that implements `INotifier` and holds a reference to an existing `INotifier` object.



Created the following concrete decorator classes:



\- `SMSNotifierDecorator`

\- `SlackNotifierDecorator`



Each decorator adds additional notification functionality without modifying the existing `EmailNotifier` class.



\### 5. Test the Decorator Implementation



Created an `EmailNotifier` and dynamically added SMS and Slack notification functionality using decorators.



\## Output



```text

Sending Email notification: Your order has been shipped.

Sending SMS notification: Your order has been shipped.

Sending Slack notification: Your order has been shipped.

```



\## Conclusion



The output demonstrates that additional notification functionalities can be added dynamically using the Decorator Pattern. Therefore, the Decorator Design Pattern has been implemented successfully.

