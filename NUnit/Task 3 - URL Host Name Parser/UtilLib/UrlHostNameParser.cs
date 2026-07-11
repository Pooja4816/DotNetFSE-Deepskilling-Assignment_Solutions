namespace UtilLib
{
    public class UrlHostNameParser
    {
        public string ParseHostName(string url)
        {
            if (url.Contains("://"))
            {
                return url.Split("://")[1].Split('/')[0];
            }

            return url.Split('/')[0];
        }
    }
}