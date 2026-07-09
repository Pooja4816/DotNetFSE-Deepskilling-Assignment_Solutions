namespace StrategyPatternExample
{
    public class PaymentContext
    {
        private IPaymentStrategy paymentStrategy;

        public PaymentContext(IPaymentStrategy paymentStrategy)
        {
            this.paymentStrategy = paymentStrategy;
        }

        public void SetPaymentStrategy(IPaymentStrategy paymentStrategy)
        {
            this.paymentStrategy = paymentStrategy;
        }

        public void ExecutePayment(double amount)
        {
            paymentStrategy.Pay(amount);
        }
    }
}