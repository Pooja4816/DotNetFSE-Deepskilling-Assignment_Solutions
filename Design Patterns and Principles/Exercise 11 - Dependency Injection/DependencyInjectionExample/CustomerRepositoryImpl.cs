namespace DependencyInjectionExample
{
    public class CustomerRepositoryImpl : ICustomerRepository
    {
        public string FindCustomerById(int id)
        {
            return $"Customer found with ID: {id}";
        }
    }
}