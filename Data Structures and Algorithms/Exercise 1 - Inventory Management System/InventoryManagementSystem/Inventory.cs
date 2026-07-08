namespace InventoryManagementSystem
{
    // This class manages all the products in the inventory
    internal class Inventory
    {
        private Dictionary<int, Product> products = new Dictionary<int, Product>();

        // Method to add a new product to the inventory
        public void AddProduct(Product product)
        {
            products.Add(product.ProductId, product);
            Console.WriteLine("Product added successfully.");
        }

        // Method to update the quantity and price of a product
        public void UpdateProduct(int productId, int quantity, double price)
        {
            if (products.ContainsKey(productId))
            {
                products[productId].Quantity = quantity;
                products[productId].Price = price;

                Console.WriteLine("Product updated successfully.");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }
        }

        // Method to delete a product from the inventory
        public void DeleteProduct(int productId)
        {
            if (products.ContainsKey(productId))
            {
                products.Remove(productId);
                Console.WriteLine("Product deleted successfully.");
            }
            else
            {
                Console.WriteLine("Product not found.");
            }
        }

        // Method to display all products in the inventory
        public void DisplayProducts()
        {
            foreach (Product product in products.Values)
            {
                Console.WriteLine(
                    "Product ID: " + product.ProductId +
                    ", Name: " + product.ProductName +
                    ", Quantity: " + product.Quantity +
                    ", Price: " + product.Price
                );
            }
        }
    }
}