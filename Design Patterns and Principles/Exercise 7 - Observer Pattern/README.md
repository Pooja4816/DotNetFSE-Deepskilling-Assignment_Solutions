\# Exercise 7: Implementing the Observer Pattern



\## Scenario



This exercise demonstrates the implementation of the Observer Design Pattern in a stock market monitoring application. The goal is to notify multiple clients whenever the stock price changes.



\## Project Name



`ObserverPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `ObserverPatternExample`.



\### 2. Define Subject Interface



Created an `IStock` interface with methods to register, deregister, and notify observers.



\### 3. Implement Concrete Subject



Created a `StockMarket` class that implements the `IStock` interface and maintains a list of registered observers.



The `StockMarket` class notifies all registered observers whenever the stock price changes.



\### 4. Define Observer Interface



Created an `IObserver` interface with an `Update()` method to receive stock price updates.



\### 5. Implement Concrete Observers



Created the following concrete observer classes:



\- `MobileApp`

\- `WebApp`



Both classes implement the `IObserver` interface and receive notifications whenever the stock price changes.



\### 6. Test the Observer Implementation



Registered the `MobileApp` and `WebApp` observers with the `StockMarket`.



Changed the stock price to notify both registered observers. The `WebApp` observer was then deregistered, and the stock price was changed again to demonstrate that only the remaining registered observer receives the update.



\## Output



```text

Stock price changed to: 150.5

Mobile App received stock price update: 150.5

Web App received stock price update: 150.5



Stock price changed to: 175.75

Mobile App received stock price update: 175.75

```



\## Conclusion



The output demonstrates that registered observers are automatically notified whenever the stock price changes. It also shows that a deregistered observer no longer receives updates. Therefore, the Observer Design Pattern has been implemented successfully.

