namespace TaskManagementSystem
{
    // This class manages tasks using a singly linked list
    internal class TaskLinkedList
    {
        private TaskNode head;

        // Method to add a new task
        public void AddTask(Task task)
        {
            TaskNode newNode = new TaskNode(task);

            if (head == null)
            {
                head = newNode;
            }
            else
            {
                TaskNode current = head;

                while (current.Next != null)
                {
                    current = current.Next;
                }

                current.Next = newNode;
            }

            Console.WriteLine("Task added successfully.");
        }

        // Method to search a task by ID
        public Task SearchTask(int taskId)
        {
            TaskNode current = head;

            while (current != null)
            {
                if (current.TaskData.TaskId == taskId)
                {
                    return current.TaskData;
                }

                current = current.Next;
            }

            return null;
        }

        // Method to display all tasks
        public void DisplayTasks()
        {
            if (head == null)
            {
                Console.WriteLine("No tasks found.");
                return;
            }

            TaskNode current = head;

            while (current != null)
            {
                Console.WriteLine(
                    "Task ID: " + current.TaskData.TaskId +
                    ", Task Name: " + current.TaskData.TaskName +
                    ", Status: " + current.TaskData.Status
                );

                current = current.Next;
            }
        }

        // Method to delete a task by ID
        public void DeleteTask(int taskId)
        {
            if (head == null)
            {
                Console.WriteLine("Task list is empty.");
                return;
            }

            // Checking if the first task needs to be deleted
            if (head.TaskData.TaskId == taskId)
            {
                head = head.Next;
                Console.WriteLine("Task deleted successfully.");
                return;
            }

            TaskNode current = head;

            while (current.Next != null)
            {
                if (current.Next.TaskData.TaskId == taskId)
                {
                    current.Next = current.Next.Next;
                    Console.WriteLine("Task deleted successfully.");
                    return;
                }

                current = current.Next;
            }

            Console.WriteLine("Task not found.");
        }
    }
}