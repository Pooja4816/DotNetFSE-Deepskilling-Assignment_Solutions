namespace OrderSorting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating orders for Bubble Sort
            Order[] bubbleOrders =
            {
                new Order { OrderId = 101, CustomerName = "Rahul", TotalPrice = 5000 },
                new Order { OrderId = 102, CustomerName = "Priya", TotalPrice = 2000 },
                new Order { OrderId = 103, CustomerName = "Aman", TotalPrice = 8000 },
                new Order { OrderId = 104, CustomerName = "Neha", TotalPrice = 3000 }
            };

            // Creating orders for Quick Sort
            Order[] quickOrders =
            {
                new Order { OrderId = 101, CustomerName = "Rahul", TotalPrice = 5000 },
                new Order { OrderId = 102, CustomerName = "Priya", TotalPrice = 2000 },
                new Order { OrderId = 103, CustomerName = "Aman", TotalPrice = 8000 },
                new Order { OrderId = 104, CustomerName = "Neha", TotalPrice = 3000 }
            };

            // Creating an object of the Sorting class
            Sorting sorting = new Sorting();

            // Sorting orders using Bubble Sort
            sorting.BubbleSort(bubbleOrders);

            Console.WriteLine("Orders sorted using Bubble Sort:");

            foreach (Order order in bubbleOrders)
            {
                Console.WriteLine(
                    "Order ID: " + order.OrderId +
                    ", Customer: " + order.CustomerName +
                    ", Total Price: " + order.TotalPrice
                );
            }

            Console.WriteLine();

            // Sorting orders using Quick Sort
            sorting.QuickSort(quickOrders, 0, quickOrders.Length - 1);

            Console.WriteLine("Orders sorted using Quick Sort:");

            foreach (Order order in quickOrders)
            {
                Console.WriteLine(
                    "Order ID: " + order.OrderId +
                    ", Customer: " + order.CustomerName +
                    ", Total Price: " + order.TotalPrice
                );
            }
        }
    }
}