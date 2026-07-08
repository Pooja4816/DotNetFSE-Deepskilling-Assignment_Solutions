namespace EmployeeManagementSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating an employee manager with a fixed array size
            EmployeeManager manager = new EmployeeManager(5);

            // Creating employee records
            Employee employee1 = new Employee
            {
                EmployeeId = 101,
                Name = "Rahul",
                Position = "Developer",
                Salary = 50000
            };

            Employee employee2 = new Employee
            {
                EmployeeId = 102,
                Name = "Priya",
                Position = "Designer",
                Salary = 45000
            };

            Employee employee3 = new Employee
            {
                EmployeeId = 103,
                Name = "Aman",
                Position = "Tester",
                Salary = 40000
            };

            // Adding employees
            manager.AddEmployee(employee1);
            manager.AddEmployee(employee2);
            manager.AddEmployee(employee3);

            Console.WriteLine("\nEmployee Records:");
            manager.DisplayEmployees();

            // Searching for an employee
            Console.WriteLine("\nSearching for Employee ID 102:");

            Employee searchResult = manager.SearchEmployee(102);

            if (searchResult != null)
            {
                Console.WriteLine(
                    "Employee Found: " +
                    searchResult.Name +
                    ", Position: " +
                    searchResult.Position
                );
            }
            else
            {
                Console.WriteLine("Employee not found.");
            }

            // Deleting an employee
            Console.WriteLine("\nDeleting Employee ID 102:");
            manager.DeleteEmployee(102);

            Console.WriteLine("\nEmployee Records After Delete:");
            manager.DisplayEmployees();
        }
    }
}