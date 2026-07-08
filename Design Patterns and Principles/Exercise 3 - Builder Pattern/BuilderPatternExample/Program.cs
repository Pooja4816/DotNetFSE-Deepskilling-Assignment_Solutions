namespace BuilderPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Computer gamingComputer = new Computer.Builder()
                .SetCPU("Intel Core i9")
                .SetRAM("32GB")
                .SetStorage("1TB SSD")
                .Build();

            Computer officeComputer = new Computer.Builder()
                .SetCPU("Intel Core i5")
                .SetRAM("16GB")
                .SetStorage("512GB SSD")
                .Build();

            Console.WriteLine("Gaming Computer:");
            Console.WriteLine($"CPU: {gamingComputer.CPU}");
            Console.WriteLine($"RAM: {gamingComputer.RAM}");
            Console.WriteLine($"Storage: {gamingComputer.Storage}");

            Console.WriteLine();

            Console.WriteLine("Office Computer:");
            Console.WriteLine($"CPU: {officeComputer.CPU}");
            Console.WriteLine($"RAM: {officeComputer.RAM}");
            Console.WriteLine($"Storage: {officeComputer.Storage}");
        }
    }
}