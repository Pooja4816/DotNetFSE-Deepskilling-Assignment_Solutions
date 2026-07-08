namespace AdapterPatternExample
{
    public class PayPalAdapter : IPaymentProcessor
    {
        private readonly PayPalGateway payPalGateway;

        public PayPalAdapter(PayPalGateway payPalGateway)
        {
            this.payPalGateway = payPalGateway;
        }

        public void ProcessPayment(double amount)
        {
            payPalGateway.MakePayment(amount);
        }
    }
}