namespace OrderSorting
{
    // This class contains methods for sorting orders
    internal class Sorting
    {
        // Method to sort orders by total price using Bubble Sort
        public void BubbleSort(Order[] orders)
        {
            int n = orders.Length;

            for (int i = 0; i < n - 1; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    if (orders[j].TotalPrice > orders[j + 1].TotalPrice)
                    {
                        Order temp = orders[j];
                        orders[j] = orders[j + 1];
                        orders[j + 1] = temp;
                    }
                }
            }
        }

        // Method to sort orders by total price using Quick Sort
        public void QuickSort(Order[] orders, int low, int high)
        {
            if (low < high)
            {
                int pivotIndex = Partition(orders, low, high);

                QuickSort(orders, low, pivotIndex - 1);
                QuickSort(orders, pivotIndex + 1, high);
            }
        }

        // Method to place the pivot at its correct position
        private int Partition(Order[] orders, int low, int high)
        {
            double pivot = orders[high].TotalPrice;
            int i = low - 1;

            for (int j = low; j < high; j++)
            {
                if (orders[j].TotalPrice < pivot)
                {
                    i++;

                    Order temp = orders[i];
                    orders[i] = orders[j];
                    orders[j] = temp;
                }
            }

            Order pivotTemp = orders[i + 1];
            orders[i + 1] = orders[high];
            orders[high] = pivotTemp;

            return i + 1;
        }
    }
}