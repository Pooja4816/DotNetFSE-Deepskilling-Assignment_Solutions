namespace DependencyInjectionExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            ICustomerRepository customerRepository =
                new CustomerRepositoryImpl();

            CustomerService customerService =
                new CustomerService(customerRepository);

            string customer = customerService.GetCustomerById(101);

            Console.WriteLine(customer);
        }
    }
}