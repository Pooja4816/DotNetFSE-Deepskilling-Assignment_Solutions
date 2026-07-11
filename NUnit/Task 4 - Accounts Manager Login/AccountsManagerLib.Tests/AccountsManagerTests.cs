using AccountsManagerLib;
using NUnit.Framework;

namespace AccountsManagerLib.Tests
{
    [TestFixture]
    public class AccountsManagerTests
    {
        private AccountsManager _accountsManager = null!;

        [SetUp]
        public void Setup()
        {
            _accountsManager = new AccountsManager();
        }

        [Test]
        public void Login_ValidUser11Credentials_ReturnsWelcomeMessage()
        {
            string actual = _accountsManager.Login(
                "user_11",
                "secret@user11");

            Assert.That(actual, Is.EqualTo("Welcome user_11!!!"));
        }

        [Test]
        public void Login_ValidUser22Credentials_ReturnsWelcomeMessage()
        {
            string actual = _accountsManager.Login(
                "user_22",
                "secret@user22");

            Assert.That(actual, Is.EqualTo("Welcome user_22!!!"));
        }

        [Test]
        public void Login_InvalidCredentials_ReturnsInvalidMessage()
        {
            string actual = _accountsManager.Login(
                "invalid_user",
                "invalid_password");

            Assert.That(actual, Is.EqualTo("Invalid user id/password"));
        }

        [Test]
        public void Login_EmptyUserId_ThrowsArgumentException()
        {
            Assert.That(
                () => _accountsManager.Login("", "secret@user11"),
                Throws.TypeOf<ArgumentException>());
        }

        [Test]
        public void Login_EmptyPassword_ThrowsArgumentException()
        {
            Assert.That(
                () => _accountsManager.Login("user_11", ""),
                Throws.TypeOf<ArgumentException>());
        }
    }
}