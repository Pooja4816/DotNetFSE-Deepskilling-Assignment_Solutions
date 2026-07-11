using CalcLibrary;
using NUnit.Framework;

namespace Calculator.Tests
{
    [TestFixture]
    public class CalculatorTests
    {
        private CalcLibrary.Calculator _calculator = null!;

        [SetUp]
        public void Setup()
        {
            _calculator = new CalcLibrary.Calculator();
        }

        [TearDown]
        public void TearDown()
        {
            _calculator = null!;
        }

        [TestCase(2, 3, 5)]
        [TestCase(10, 20, 30)]
        [TestCase(-5, 5, 0)]
        public void Add_WhenCalled_ReturnsCorrectResult(
            int num1,
            int num2,
            int expected)
        {
            int actual = _calculator.Add(num1, num2);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}