namespace ObserverPatternExample
{
    public class WebApp : IObserver
    {
        public void Update(double stockPrice)
        {
            Console.WriteLine($"Web App received stock price update: {stockPrice}");
        }
    }
}