namespace AdapterPatternExample
{
    public class StripeGateway
    {
        public void SendPayment(double amount)
        {
            Console.WriteLine($"Payment of {amount} processed through Stripe.");
        }
    }
}