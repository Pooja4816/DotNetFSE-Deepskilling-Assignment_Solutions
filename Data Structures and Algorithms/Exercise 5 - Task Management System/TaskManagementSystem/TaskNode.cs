namespace TaskManagementSystem
{
    // This class represents a node in the linked list
    internal class TaskNode
    {
        public Task TaskData { get; set; }

        public TaskNode Next { get; set; }

        // Constructor to create a new node
        public TaskNode(Task task)
        {
            TaskData = task;
            Next = null;
        }
    }
}