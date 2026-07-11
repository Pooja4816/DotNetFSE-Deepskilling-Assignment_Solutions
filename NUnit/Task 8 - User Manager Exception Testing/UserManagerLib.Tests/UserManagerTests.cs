using NUnit.Framework;
using UserManagerLib;

namespace UserManagerLib.Tests
{
    [TestFixture]
    public class UserManagerTests
    {
        private UserManager _userManager = null!;

        [SetUp]
        public void Setup()
        {
            _userManager = new UserManager();
        }

        [Test]
        public void CreateUser_ValidPANCardNumber_ReturnsTrue()
        {
            bool actual = _userManager.CreateUser("ABCDE1234F");

            Assert.That(actual, Is.True);
        }

        [Test]
        public void CreateUser_NullPANCardNumber_ThrowsNullReferenceException()
        {
            Assert.That(
                () => _userManager.CreateUser(null),
                Throws.TypeOf<NullReferenceException>());
        }

        [Test]
        public void CreateUser_EmptyPANCardNumber_ThrowsNullReferenceException()
        {
            Assert.That(
                () => _userManager.CreateUser(""),
                Throws.TypeOf<NullReferenceException>());
        }

        [Test]
        public void CreateUser_InvalidPANCardLength_ThrowsFormatException()
        {
            Assert.That(
                () => _userManager.CreateUser("ABCDE123"),
                Throws.TypeOf<FormatException>());
        }
    }
}