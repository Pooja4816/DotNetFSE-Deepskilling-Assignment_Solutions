using LeapYearCalculatorLib;
using NUnit.Framework;

namespace LeapYearCalculatorLib.Tests
{
    [TestFixture]
    public class LeapYearCalculatorTests
    {
        private LeapYearCalculator _calculator = null!;

        [SetUp]
        public void Setup()
        {
            _calculator = new LeapYearCalculator();
        }

        [TestCase(2024, 1)]
        [TestCase(2000, 1)]
        [TestCase(2023, 0)]
        [TestCase(1900, 0)]
        [TestCase(1752, -1)]
        [TestCase(10000, -1)]
        public void CheckLeapYear_DifferentYears_ReturnsExpectedResult(
            int year, int expected)
        {
            int actual = _calculator.CheckLeapYear(year);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}