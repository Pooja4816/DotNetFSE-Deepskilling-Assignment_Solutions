\# Exercise 4: Implementing the Adapter Pattern



\## Scenario



This exercise demonstrates the implementation of the Adapter Design Pattern in a payment processing system. The goal is to integrate different third-party payment gateways with different interfaces using adapters.



\## Project Name



`AdapterPatternExample`



\## Steps Implemented



\### 1. Create a New Project



Created a C# Console Application named `AdapterPatternExample`.



\### 2. Define Target Interface



Created an `IPaymentProcessor` interface with a `ProcessPayment()` method to provide a common interface for different payment gateways.



\### 3. Implement Adaptee Classes



Created the following payment gateway classes with their own payment processing methods:



\- `PayPalGateway` with the `MakePayment()` method.

\- `StripeGateway` with the `SendPayment()` method.



\### 4. Implement the Adapter Classes



Created the following adapter classes:



\- `PayPalAdapter`

\- `StripeAdapter`



Each adapter implements the `IPaymentProcessor` interface and translates the `ProcessPayment()` call to the corresponding gateway-specific method.



\### 5. Test the Adapter Implementation



Used the adapter classes to process payments through PayPal and Stripe using the common `IPaymentProcessor` interface.



\## Output



```text

Payment of 1000 processed through PayPal.

Payment of 2000 processed through Stripe.

```



\## Conclusion



The output demonstrates that different payment gateways with different interfaces can be used through a common interface using the Adapter Pattern. Therefore, the Adapter Design Pattern has been implemented successfully.

