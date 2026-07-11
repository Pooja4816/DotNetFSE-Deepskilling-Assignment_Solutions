using Moq;
using NUnit.Framework;
using PlayersManagerLib;

namespace PlayerManager.Tests
{
    [TestFixture]
    public class PlayerManagerTests
    {
        private Mock<IPlayerMapper> _mockPlayerMapper = null!;

        [OneTimeSetUp]
        public void Init()
        {
            _mockPlayerMapper = new Mock<IPlayerMapper>();
        }

        [TestCase]
        public void RegisterNewPlayer_ReturnsPlayerDetails()
        {
            _mockPlayerMapper
                .Setup(mapper => mapper.IsPlayerNameExistsInDb(
                    It.IsAny<string>()))
                .Returns(false);

            Player player = Player.RegisterNewPlayer(
                "Virat",
                _mockPlayerMapper.Object);

            Assert.That(player, Is.Not.Null);
            Assert.That(player.Name, Is.EqualTo("Virat"));
            Assert.That(player.Age, Is.EqualTo(23));
            Assert.That(player.Country, Is.EqualTo("India"));
            Assert.That(player.NoOfMatches, Is.EqualTo(30));
        }
    }
}