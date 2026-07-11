namespace AccountsManagerLib
{
    public class AccountsManager
    {
        public string Login(string userId, string password)
        {
            if (string.IsNullOrWhiteSpace(userId) ||
                string.IsNullOrWhiteSpace(password))
            {
                throw new ArgumentException(
                    "User id and password cannot be empty.");
            }

            if ((userId == "user_11" && password == "secret@user11") ||
                (userId == "user_22" && password == "secret@user22"))
            {
                return $"Welcome {userId}!!!";
            }

            return "Invalid user id/password";

            //return "Wrong Message";
        }
    }
}