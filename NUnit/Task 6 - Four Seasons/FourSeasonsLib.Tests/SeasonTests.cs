using FourSeasonsLib;
using NUnit.Framework;

namespace FourSeasonsLib.Tests
{
    [TestFixture]
    public class SeasonTests
    {
        private Season _season = null!;

        [SetUp]
        public void Setup()
        {
            _season = new Season();
        }

        // Straightforward way
        private static readonly object[] SeasonTestCases =
        {
            new object[] { "February", "Spring" },
            new object[] { "March", "Spring" },
            new object[] { "April", "Summer" },
            new object[] { "May", "Summer" },
            new object[] { "June", "Summer" },
            new object[] { "July", "Monsoon" },
            new object[] { "August", "Monsoon" },
            new object[] { "September", "Monsoon" },
            new object[] { "October", "Autumn" },
            new object[] { "November", "Autumn" },
            new object[] { "December", "Winter" },
            new object[] { "January", "Winter" }
        };

        [TestCaseSource(nameof(SeasonTestCases))]
        public void GetSeason_ValidMonth_ReturnsExpectedSeason(
            string month, string expected)
        {
            string actual = _season.GetSeason(month);

            Assert.That(actual, Is.EqualTo(expected));
        }

        // Alternate way
        private static IEnumerable<TestCaseData> SeasonCases()
        {
            yield return new TestCaseData("February", "Spring");
            yield return new TestCaseData("April", "Summer");
            yield return new TestCaseData("July", "Monsoon");
            yield return new TestCaseData("October", "Autumn");
            yield return new TestCaseData("December", "Winter");
        }

        [TestCaseSource(nameof(SeasonCases))]
        public void GetSeason_DifferentMonths_ReturnsCorrectSeason(
            string month, string expected)
        {
            string actual = _season.GetSeason(month);

            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}