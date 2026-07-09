namespace StrategyPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            PaymentContext paymentContext =
                new PaymentContext(new CreditCardPayment());

            paymentContext.ExecutePayment(1000);

            paymentContext.SetPaymentStrategy(new PayPalPayment());

            paymentContext.ExecutePayment(2000);
        }
    }
}