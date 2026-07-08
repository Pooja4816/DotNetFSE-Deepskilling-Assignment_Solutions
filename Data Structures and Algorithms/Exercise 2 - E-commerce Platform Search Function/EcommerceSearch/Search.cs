namespace EcommerceSearch
{
    // This class contains methods for searching products
    internal class Search
    {
        // Method to search a product using linear search
        public Product LinearSearch(Product[] products, int productId)
        {
            foreach (Product product in products)
            {
                if (product.ProductId == productId)
                {
                    return product;
                }
            }

            return null;
        }

        // Method to search a product using binary search
        public Product BinarySearch(Product[] products, int productId)
        {
            int left = 0;
            int right = products.Length - 1;

            while (left <= right)
            {
                int middle = (left + right) / 2;

                if (products[middle].ProductId == productId)
                {
                    return products[middle];
                }
                else if (products[middle].ProductId < productId)
                {
                    left = middle + 1;
                }
                else
                {
                    right = middle - 1;
                }
            }

            return null;
        }
    }
}