namespace DutchTreat.Servises
{
    public interface IMailService
    {
        void SendMessage(string to, string from, string body);
    }
}