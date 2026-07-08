namespace EmployeeManagementSystem
{
    // This class manages employee records
    internal class EmployeeManager
    {
        private Employee[] employees;
        private int employeeCount;

        // Constructor to create the employee array
        public EmployeeManager(int size)
        {
            employees = new Employee[size];
            employeeCount = 0;
        }

        // Method to add a new employee
        public void AddEmployee(Employee employee)
        {
            if (employeeCount < employees.Length)
            {
                employees[employeeCount] = employee;
                employeeCount++;

                Console.WriteLine("Employee added successfully.");
            }
            else
            {
                Console.WriteLine("Employee array is full.");
            }
        }

        // Method to search an employee by ID
        public Employee SearchEmployee(int employeeId)
        {
            for (int i = 0; i < employeeCount; i++)
            {
                if (employees[i].EmployeeId == employeeId)
                {
                    return employees[i];
                }
            }

            return null;
        }

        // Method to display all employee records
        public void DisplayEmployees()
        {
            if (employeeCount == 0)
            {
                Console.WriteLine("No employees found.");
                return;
            }

            for (int i = 0; i < employeeCount; i++)
            {
                Console.WriteLine(
                    "Employee ID: " + employees[i].EmployeeId +
                    ", Name: " + employees[i].Name +
                    ", Position: " + employees[i].Position +
                    ", Salary: " + employees[i].Salary
                );
            }
        }

        // Method to delete an employee by ID
        public void DeleteEmployee(int employeeId)
        {
            for (int i = 0; i < employeeCount; i++)
            {
                if (employees[i].EmployeeId == employeeId)
                {
                    // Shifting remaining employees to fill the empty position
                    for (int j = i; j < employeeCount - 1; j++)
                    {
                        employees[j] = employees[j + 1];
                    }

                    employeeCount--;

                    Console.WriteLine("Employee deleted successfully.");
                    return;
                }
            }

            Console.WriteLine("Employee not found.");
        }
    }
}