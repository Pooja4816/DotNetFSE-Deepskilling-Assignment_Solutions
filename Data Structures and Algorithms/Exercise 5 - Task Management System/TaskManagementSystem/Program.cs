namespace TaskManagementSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating a task linked list
            TaskLinkedList taskList = new TaskLinkedList();

            // Creating tasks
            Task task1 = new Task
            {
                TaskId = 101,
                TaskName = "Complete Assignment",
                Status = "Pending"
            };

            Task task2 = new Task
            {
                TaskId = 102,
                TaskName = "Prepare Presentation",
                Status = "In Progress"
            };

            Task task3 = new Task
            {
                TaskId = 103,
                TaskName = "Submit Report",
                Status = "Completed"
            };

            // Adding tasks to the linked list
            taskList.AddTask(task1);
            taskList.AddTask(task2);
            taskList.AddTask(task3);

            Console.WriteLine("\nTask List:");
            taskList.DisplayTasks();

            // Searching for a task
            Console.WriteLine("\nSearching for Task ID 102:");

            Task searchResult = taskList.SearchTask(102);

            if (searchResult != null)
            {
                Console.WriteLine(
                    "Task Found: " +
                    searchResult.TaskName +
                    ", Status: " +
                    searchResult.Status
                );
            }
            else
            {
                Console.WriteLine("Task not found.");
            }

            // Deleting a task
            Console.WriteLine("\nDeleting Task ID 102:");
            taskList.DeleteTask(102);

            Console.WriteLine("\nTask List After Delete:");
            taskList.DisplayTasks();
        }
    }
}