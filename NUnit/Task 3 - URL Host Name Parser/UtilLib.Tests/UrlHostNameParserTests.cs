using NUnit.Framework;
using UtilLib;

namespace UtilLib.Tests
{
    [TestFixture]
    public class UrlHostNameParserTests
    {
        private UrlHostNameParser _parser = null!;

        [SetUp]
        public void Setup()
        {
            _parser = new UrlHostNameParser();
        }

        [Test]
        public void ParseHostName_UrlWithProtocol_ReturnsHostName()
        {
            string url = "https://www.google.com/search";

            string actual = _parser.ParseHostName(url);

            Assert.That(actual, Is.EqualTo("www.google.com"));
        }

        [Test]
        public void ParseHostName_UrlWithoutProtocol_ReturnsHostName()
        {
            string url = "www.google.com/search";

            string actual = _parser.ParseHostName(url);

            Assert.That(actual, Is.EqualTo("www.google.com"));
        }
    }
}