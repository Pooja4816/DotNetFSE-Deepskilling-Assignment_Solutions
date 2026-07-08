namespace AdapterPatternExample
{
    public class StripeAdapter : IPaymentProcessor
    {
        private readonly StripeGateway stripeGateway;

        public StripeAdapter(StripeGateway stripeGateway)
        {
            this.stripeGateway = stripeGateway;
        }

        public void ProcessPayment(double amount)
        {
            stripeGateway.SendPayment(amount);
        }
    }
}