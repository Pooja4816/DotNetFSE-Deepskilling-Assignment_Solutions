namespace MathLibrary
{
    public class Calculator
    {
        private double result;

        public double GetResult
        {
            get { return result; }
        }

        public double Addition(double num1, double num2)
        {
            result = num1 + num2;
            return result;
        }

        public double Subtraction(double num1, double num2)
        {
            result = num1 - num2;
            return result;
        }

        public double Multiplication(double num1, double num2)
        {
            result = num1 * num2;
            return result;
        }

        public double Division(double dividend, double divisor)
        {
            if (divisor == 0)
            {
                throw new ArgumentException("Division by zero");
            }

            result = dividend / divisor;
            return result;
        }

        public void AllClear()
        {
            result = 0;
        }
    }
}