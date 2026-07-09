\# Exercise 8: Implementing the Strategy Pattern



\## Scenario



This exercise demonstrates the implementation of the Strategy Design Pattern in a payment system. The goal is to select and use different payment methods such as Credit Card and PayPal at runtime.



\## Project Name



`StrategyPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `StrategyPatternExample`.



\### 2. Define Strategy Interface



Created an `IPaymentStrategy` interface with a `Pay()` method to provide a common interface for different payment strategies.



\### 3. Implement Concrete Strategies



Created the following concrete payment strategy classes:



\- `CreditCardPayment`

\- `PayPalPayment`



Both classes implement the `IPaymentStrategy` interface and provide their own implementation of the `Pay()` method.



\### 4. Implement Context Class



Created a `PaymentContext` class that holds a reference to an `IPaymentStrategy`.



The `PaymentContext` class provides methods to change the payment strategy at runtime and execute the selected payment strategy.



\### 5. Test the Strategy Implementation



Initially selected the Credit Card payment strategy and executed a payment.



The payment strategy was then changed to PayPal at runtime, and another payment was executed to demonstrate the use of different strategies.



\## Output



```text

Paid 1000 using Credit Card.

Paid 2000 using PayPal.

```



\## Conclusion



The output demonstrates that different payment strategies can be selected and changed at runtime using the Strategy Pattern. Therefore, the Strategy Design Pattern has been implemented successfully.

