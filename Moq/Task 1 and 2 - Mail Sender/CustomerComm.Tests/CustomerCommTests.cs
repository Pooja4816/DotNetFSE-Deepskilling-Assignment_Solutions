
using CustomerCommLib;
using Moq;
using NUnit.Framework;

namespace CustomerComm.Tests
{
    [TestFixture]
    public class CustomerCommTests
    {
        private Mock<IMailSender> _mockMailSender = null!;
        private CustomerCommLib.CustomerComm _customerComm = null!;

        [OneTimeSetUp]
        public void Init()
        {
            _mockMailSender = new Mock<IMailSender>();

            _mockMailSender
                .Setup(mailSender => mailSender.SendMail(
                    It.IsAny<string>(),
                    It.IsAny<string>()))
                .Returns(true);

            _customerComm = new CustomerCommLib.CustomerComm(
                _mockMailSender.Object);
        }

        [TestCase]
        public void SendMailToCustomer_ReturnsTrue()
        {
            bool result = _customerComm.SendMailToCustomer();

            Assert.That(result, Is.True);
        }
    }
}