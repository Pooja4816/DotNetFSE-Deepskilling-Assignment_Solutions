namespace EcommerceSearch
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating an array of products
            Product[] products =
            {
                new Product { ProductId = 101, ProductName = "Laptop", Category = "Electronics" },
                new Product { ProductId = 102, ProductName = "Shoes", Category = "Fashion" },
                new Product { ProductId = 103, ProductName = "Mobile", Category = "Electronics" },
                new Product { ProductId = 104, ProductName = "Book", Category = "Books" },
                new Product { ProductId = 105, ProductName = "Watch", Category = "Accessories" }
            };

            // Creating an object of the Search class
            Search search = new Search();

            // Searching for a product using linear search
            Product linearResult = search.LinearSearch(products, 103);

            if (linearResult != null)
            {
                Console.WriteLine("Linear Search Result:");
                Console.WriteLine("Product ID: " + linearResult.ProductId);
                Console.WriteLine("Product Name: " + linearResult.ProductName);
                Console.WriteLine("Category: " + linearResult.Category);
            }
            else
            {
                Console.WriteLine("Product not found using Linear Search.");
            }

            Console.WriteLine();

            // Searching for a product using binary search
            Product binaryResult = search.BinarySearch(products, 104);

            if (binaryResult != null)
            {
                Console.WriteLine("Binary Search Result:");
                Console.WriteLine("Product ID: " + binaryResult.ProductId);
                Console.WriteLine("Product Name: " + binaryResult.ProductName);
                Console.WriteLine("Category: " + binaryResult.Category);
            }
            else
            {
                Console.WriteLine("Product not found using Binary Search.");
            }
        }
    }
}