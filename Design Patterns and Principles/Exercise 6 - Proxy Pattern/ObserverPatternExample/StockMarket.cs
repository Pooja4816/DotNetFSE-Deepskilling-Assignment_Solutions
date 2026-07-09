namespace ObserverPatternExample
{
    public class StockMarket : IStock
    {
        private readonly List<IObserver> observers = new List<IObserver>();
        private double stockPrice;

        public void RegisterObserver(IObserver observer)
        {
            observers.Add(observer);
        }

        public void DeregisterObserver(IObserver observer)
        {
            observers.Remove(observer);
        }

        public void NotifyObservers()
        {
            foreach (IObserver observer in observers)
            {
                observer.Update(stockPrice);
            }
        }

        public void SetStockPrice(double price)
        {
            stockPrice = price;
            Console.WriteLine($"Stock price changed to: {stockPrice}");
            NotifyObservers();
        }
    }
}