namespace InventoryManagementSystem
{
    // This class stores the details of a product
    internal class Product
    {
        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public int Quantity { get; set; }

        public double Price { get; set; }
    }
}