namespace ConverterLib
{
    public class Converter
    {
        private readonly IDollarToEuroExchangeRateFeed _exchangeRateFeed;

        public Converter(IDollarToEuroExchangeRateFeed exchangeRateFeed)
        {
            _exchangeRateFeed = exchangeRateFeed;
        }

        public double USDToEuro(double dollars)
        {
            double exchangeRate = _exchangeRateFeed.GetExchangeRate();

            return dollars * exchangeRate;
            //return dollars + exchangeRate;
        }
    }
}