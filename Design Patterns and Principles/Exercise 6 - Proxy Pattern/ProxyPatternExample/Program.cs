namespace ProxyPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            IImage image = new ProxyImage("sample.jpg");

            Console.WriteLine("First display call:");
            image.Display();

            Console.WriteLine();

            Console.WriteLine("Second display call:");
            image.Display();
        }
    }
}