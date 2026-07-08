namespace LibraryManagementSystem
{
    // This class contains methods for searching books
    internal class BookSearch
    {
        // Method to search a book by title using Linear Search
        public Book LinearSearch(Book[] books, string title)
        {
            foreach (Book book in books)
            {
                if (book.Title.Equals(title, StringComparison.OrdinalIgnoreCase))
                {
                    return book;
                }
            }

            return null;
        }

        // Method to search a book by title using Binary Search
        public Book BinarySearch(Book[] books, string title)
        {
            int left = 0;
            int right = books.Length - 1;

            while (left <= right)
            {
                int middle = (left + right) / 2;

                int comparison = string.Compare(
                    books[middle].Title,
                    title,
                    StringComparison.OrdinalIgnoreCase
                );

                if (comparison == 0)
                {
                    return books[middle];
                }
                else if (comparison < 0)
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