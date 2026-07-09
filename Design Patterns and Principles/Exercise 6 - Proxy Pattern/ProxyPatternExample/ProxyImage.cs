namespace ProxyPatternExample
{
    public class ProxyImage : IImage
    {
        private RealImage? realImage;
        private readonly string fileName;

        public ProxyImage(string fileName)
        {
            this.fileName = fileName;
        }

        public void Display()
        {
            if (realImage == null)
            {
                realImage = new RealImage(fileName);
            }

            realImage.Display();
        }
    }
}