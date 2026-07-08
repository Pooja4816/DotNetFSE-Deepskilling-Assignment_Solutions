namespace InventoryManagementSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating an inventory object
            Inventory inventory = new Inventory();

            // Creating products with their details
            Product product1 = new Product
            {
                ProductId = 101,
                ProductName = "Laptop",
                Quantity = 10,
                Price = 50000
            };

            Product product2 = new Product
            {
                ProductId = 102,
                ProductName = "Mouse",
                Quantity = 20,
                Price = 500
            };

            // Adding products to the inventory
            inventory.AddProduct(product1);
            inventory.AddProduct(product2);

            Console.WriteLine("\nCurrent Inventory:");
            inventory.DisplayProducts();

            // Updating the first product
            inventory.UpdateProduct(101, 15, 55000);

            Console.WriteLine("\nInventory After Update:");
            inventory.DisplayProducts();

            // Deleting the second product
            inventory.DeleteProduct(102);

            Console.WriteLine("\nInventory After Delete:");
            inventory.DisplayProducts();
        }
    }
}