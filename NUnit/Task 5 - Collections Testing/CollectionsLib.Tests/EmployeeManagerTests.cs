using CollectionsLib;
using NUnit.Framework;

namespace CollectionsLib.Tests
{
    [TestFixture]
    public class EmployeeManagerTests
    {
        private EmployeeManager _employeeManager = null!;

        [SetUp]
        public void Setup()
        {
            _employeeManager = new EmployeeManager();
        }

        [Test]
        public void GetEmployees_CollectionContainsNoNullValues_ReturnsTrue()
        {
            List<Employee> employees = _employeeManager.GetEmployees();

            Assert.That(employees, Has.None.Null);
        }

        [Test]
        public void GetEmployees_EmployeeId100Exists_ReturnsTrue()
        {
            List<Employee> employees = _employeeManager.GetEmployees();

            Assert.That(employees, Has.Some.Property("Id").EqualTo(100));
        }

        [Test]
        public void GetEmployees_CollectionContainsUniqueEmployees_ReturnsTrue()
        {
            List<Employee> employees = _employeeManager.GetEmployees();

            Assert.That(employees, Is.Unique);
        }

        [Test]
        public void GetEmployees_BothCollectionsContainSameItems_ReturnsTrue()
        {
            List<Employee> employees = _employeeManager.GetEmployees();

            List<Employee> previousEmployees =
                _employeeManager.GetEmployeesWhoJoinedInPreviousYears();

            Assert.That(previousEmployees, Is.EquivalentTo(employees));
        }
    }
}