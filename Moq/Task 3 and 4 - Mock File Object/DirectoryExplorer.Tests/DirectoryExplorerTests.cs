using MagicFilesLib;
using Moq;
using NUnit.Framework;

namespace DirectoryExplorer.Tests
{
    [TestFixture]
    public class DirectoryExplorerTests
    {
        private Mock<IDirectoryExplorer> _mockDirectoryExplorer = null!;

        private readonly string _file1 = "file.txt";
        private readonly string _file2 = "file2.txt";

        [OneTimeSetUp]
        public void Init()
        {
            _mockDirectoryExplorer = new Mock<IDirectoryExplorer>();
        }

        [TestCase]
        public void GetFiles_ReturnsExpectedFiles()
        {
            ICollection<string> files = new List<string>
            {
                _file1,
                _file2
            };

            _mockDirectoryExplorer
                .Setup(directory => directory.GetFiles(It.IsAny<string>()))
                .Returns(files);

            ICollection<string> result =
                _mockDirectoryExplorer.Object.GetFiles("TestPath");

            Assert.That(result, Is.Not.Null);
            Assert.That(result.Count, Is.EqualTo(2));
            Assert.That(result, Does.Contain(_file1));
        }
    }
}