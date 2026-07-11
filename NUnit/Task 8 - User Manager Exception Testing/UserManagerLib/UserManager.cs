namespace UserManagerLib
{
    public class UserManager
    {
        public bool CreateUser(string? panCardNo)
        {
            if (string.IsNullOrEmpty(panCardNo))
            {
                throw new NullReferenceException(
                    "PAN Card number cannot be null or empty.");
            }

            if (panCardNo.Length != 10)
            {
                throw new FormatException(
                    "PAN Card number must contain exactly 10 characters.");
            }

            return true;
            //return false;
        }
    }
}