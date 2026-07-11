using MathLibrary;
using NUnit.Framework;

namespace MathLibrary.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private MathLibrary.Calculator _calculator = null!;

        [SetUp]
        public void Setup()
        {
            _calculator = new MathLibrary.Calculator();
        }

        [TestCase(10, 5, 5)]
        [TestCase(20, 10, 10)]
        [TestCase(-5, 5, -10)]
        public void TestSubtraction(double num1, double num2, double expected)
        {
            double actual = _calculator.Subtraction(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(5, 2, 10)]
        [TestCase(10, 3, 30)]
        [TestCase(-5, 2, -10)]
        public void TestMultiplication(double num1, double num2, double expected)
        {
            double actual = _calculator.Multiplication(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }

        [TestCase(10, 2, 5)]
        [TestCase(20, 4, 5)]
        [TestCase(10, 0, 0)]
        public void TestDivision(double dividend, double divisor, double expected)
        {
            try
            {
                double actual = _calculator.Division(dividend, divisor);

                Assert.That(actual, Is.EqualTo(expected));
            }
            catch (ArgumentException)
            {
                if (divisor == 0)
                {
                    Assert.Pass();
                }

                Assert.Fail("Division by zero");
            }
        }

        [Test]
        public void TestAddAndClear()
        {
            double actual = _calculator.Addition(10, 5);

            Assert.That(actual, Is.EqualTo(15));

            _calculator.AllClear();

            Assert.That(_calculator.GetResult, Is.EqualTo(0));
        }
    }
}