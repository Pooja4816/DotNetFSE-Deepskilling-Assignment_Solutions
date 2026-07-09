namespace MVCPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Student student = new Student
            {
                Name = "Pooja",
                Id = 101,
                Grade = "A"
            };

            StudentView view = new StudentView();

            StudentController controller =
                new StudentController(student, view);

            Console.WriteLine("Initial Student Details:");
            controller.UpdateView();

            Console.WriteLine();

            controller.SetStudentName("Pooja Mandal");
            controller.SetStudentGrade("A+");

            Console.WriteLine("Updated Student Details:");
            controller.UpdateView();
        }
    }
}