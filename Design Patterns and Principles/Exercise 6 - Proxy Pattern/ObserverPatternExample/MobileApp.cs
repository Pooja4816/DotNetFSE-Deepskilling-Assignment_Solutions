namespace ObserverPatternExample
{
    public class MobileApp : IObserver
    {
        public void Update(double stockPrice)
        {
            Console.WriteLine($"Mobile App received stock price update: {stockPrice}");
        }
    }
}