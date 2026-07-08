namespace FinancialForecasting
{
    // This class contains the method for calculating future value
    internal class ForecastCalculator
    {
        // Method to calculate future value using recursion
        public double CalculateFutureValue(
            double currentValue,
            double growthRate,
            int years)
        {
            // Base case
            if (years == 0)
            {
                return currentValue;
            }

            // Recursive call
            return CalculateFutureValue(
                currentValue * (1 + growthRate),
                growthRate,
                years - 1
            );
        }
    }
}