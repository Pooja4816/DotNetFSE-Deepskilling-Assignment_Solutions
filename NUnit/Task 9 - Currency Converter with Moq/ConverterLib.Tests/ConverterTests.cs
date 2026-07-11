using ConverterLib;
using Moq;
using NUnit.Framework;

namespace ConverterLib.Tests
{
    [TestFixture]
    public class ConverterTests
    {
        [Test]
        public void USDToEuro_ValidDollarAmount_ReturnsExpectedEuroAmount()
        {
            var mockExchangeRateFeed =
                new Mock<IDollarToEuroExchangeRateFeed>();

            mockExchangeRateFeed
                .Setup(feed => feed.GetExchangeRate())
                .Returns(0.85);

            var converter =
                new ConverterLib.Converter(mockExchangeRateFeed.Object);

            double actual = converter.USDToEuro(100);

            Assert.That(actual, Is.EqualTo(85));
        }

        [Test]
        public void USDToEuro_DifferentDollarAmount_ReturnsExpectedEuroAmount()
        {
            var mockExchangeRateFeed =
                new Mock<IDollarToEuroExchangeRateFeed>();

            mockExchangeRateFeed
                .Setup(feed => feed.GetExchangeRate())
                .Returns(0.90);

            var converter =
                new ConverterLib.Converter(mockExchangeRateFeed.Object);

            double actual = converter.USDToEuro(200);

            Assert.That(actual, Is.EqualTo(180));
        }
    }
}