namespace ObserverPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            StockMarket stockMarket = new StockMarket();

            IObserver mobileApp = new MobileApp();
            IObserver webApp = new WebApp();

            stockMarket.RegisterObserver(mobileApp);
            stockMarket.RegisterObserver(webApp);

            stockMarket.SetStockPrice(150.50);

            Console.WriteLine();

            stockMarket.DeregisterObserver(webApp);

            stockMarket.SetStockPrice(175.75);
        }
    }
}