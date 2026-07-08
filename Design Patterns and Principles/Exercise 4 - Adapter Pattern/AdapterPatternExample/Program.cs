namespace AdapterPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            PayPalGateway payPalGateway = new PayPalGateway();
            IPaymentProcessor payPalProcessor = new PayPalAdapter(payPalGateway);
            payPalProcessor.ProcessPayment(1000);

            StripeGateway stripeGateway = new StripeGateway();
            IPaymentProcessor stripeProcessor = new StripeAdapter(stripeGateway);
            stripeProcessor.ProcessPayment(2000);
        }
    }
}