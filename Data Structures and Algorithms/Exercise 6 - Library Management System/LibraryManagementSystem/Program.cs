namespace LibraryManagementSystem
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Creating a sorted array of books
            Book[] books =
            {
                new Book { BookId = 101, Title = "Clean Code", Author = "Robert C. Martin" },
                new Book { BookId = 102, Title = "Design Patterns", Author = "Erich Gamma" },
                new Book { BookId = 103, Title = "Introduction to Algorithms", Author = "Thomas H. Cormen" },
                new Book { BookId = 104, Title = "The Pragmatic Programmer", Author = "Andrew Hunt" }
            };

            // Creating an object of the BookSearch class
            BookSearch search = new BookSearch();

            // Searching for a book using Linear Search
            Book linearResult = search.LinearSearch(books, "Design Patterns");

            Console.WriteLine("Linear Search Result:");

            if (linearResult != null)
            {
                Console.WriteLine(
                    "Book ID: " + linearResult.BookId +
                    ", Title: " + linearResult.Title +
                    ", Author: " + linearResult.Author
                );
            }
            else
            {
                Console.WriteLine("Book not found.");
            }

            Console.WriteLine();

            // Searching for a book using Binary Search
            Book binaryResult = search.BinarySearch(books, "The Pragmatic Programmer");

            Console.WriteLine("Binary Search Result:");

            if (binaryResult != null)
            {
                Console.WriteLine(
                    "Book ID: " + binaryResult.BookId +
                    ", Title: " + binaryResult.Title +
                    ", Author: " + binaryResult.Author
                );
            }
            else
            {
                Console.WriteLine("Book not found.");
            }
        }
    }
}