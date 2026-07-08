namespace AdapterPatternExample
{
    public class PayPalGateway
    {
        public void MakePayment(double amount)
        {
            Console.WriteLine($"Payment of {amount} processed through PayPal.");
        }
    }
}