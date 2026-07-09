namespace CommandPatternExample
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Light light = new Light();

            ICommand lightOn = new LightOnCommand(light);
            ICommand lightOff = new LightOffCommand(light);

            RemoteControl remoteControl = new RemoteControl();

            remoteControl.SetCommand(lightOn);
            remoteControl.PressButton();

            remoteControl.SetCommand(lightOff);
            remoteControl.PressButton();
        }
    }
}