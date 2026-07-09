namespace DecoratorPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            INotifier notifier = new EmailNotifier();

            notifier = new SMSNotifierDecorator(notifier);
            notifier = new SlackNotifierDecorator(notifier);

            notifier.Send("Your order has been shipped.");
        }
    }
}