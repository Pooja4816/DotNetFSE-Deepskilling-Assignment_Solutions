namespace FinancialForecasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating an object of the ForecastCalculator class
            ForecastCalculator calculator = new ForecastCalculator();

            // Initial financial data
            double currentValue = 10000;
            double growthRate = 0.10;
            int years = 3;

            // Calculating the future value
            double futureValue = calculator.CalculateFutureValue(
                currentValue,
                growthRate,
                years
            );

            Console.WriteLine("Financial Forecast:");
            Console.WriteLine("Current Value: " + currentValue);
            Console.WriteLine("Annual Growth Rate: " + (growthRate * 100) + "%");
            Console.WriteLine("Number of Years: " + years);
            Console.WriteLine("Predicted Future Value: " + futureValue.ToString("F2"));
        }
    }
}