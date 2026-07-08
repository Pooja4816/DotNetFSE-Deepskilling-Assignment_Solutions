namespace OrderSorting
{
    // This class stores the details of a customer order
    internal class Order
    {
        public int OrderId { get; set; }

        public string CustomerName { get; set; }

        public double TotalPrice { get; set; }
    }
}