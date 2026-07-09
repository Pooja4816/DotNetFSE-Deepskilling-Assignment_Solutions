namespace DependencyInjectionExample
{
    public class CustomerService
    {
        private readonly ICustomerRepository customerRepository;

        public CustomerService(ICustomerRepository customerRepository)
        {
            this.customerRepository = customerRepository;
        }

        public string GetCustomerById(int id)
        {
            return customerRepository.FindCustomerById(id);
        }
    }
}