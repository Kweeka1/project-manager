using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using Quartz;

namespace mvc.BackgroundServices.Jobs;

public class SendConfirmationEmail : IJob
{
    private readonly IConfiguration _config;

    public SendConfirmationEmail(IConfiguration config)
    {
        _config = config.GetSection("EmailConfig");
    }

    public async Task Execute(IJobExecutionContext context)
    {
        Console.WriteLine("starting emailsender");
        var dataMap = context.JobDetail.JobDataMap;
        var message = new MimeMessage();
        try
        {
            message.From.Add(new MailboxAddress("Pro Collab", "procollab@zohomail.com"));
            message.To.Add(new MailboxAddress($"{dataMap["FirstName"]} {dataMap["LastName"]}",(string)dataMap["Email"]));
            message.Subject = "Confirmation email";
            message.Body = new TextPart("plain")
            {
                Text =
                    $"Hey {dataMap["FirstName"]} {dataMap["LastName"]},\nTo start using your account please click the link below:\n\nhttps://localhost:7159/activate?email={dataMap["Email"]}&token={dataMap["Token"]}\n\nIf you have any questions, please email us at procollab@zohomail.com\n\nHave a nice day!\nPro Collab Team"
            };
            using (var client = new SmtpClient())
            {
                Console.WriteLine(_config["SmtpServer"].Length);
                Console.WriteLine(_config["SmtpPort"].Length);
                await client.ConnectAsync(_config["SmtpServer"], int.Parse(_config["SmtpPort"]),
                    SecureSocketOptions.StartTls);
                Console.WriteLine(client.IsConnected);
                Console.WriteLine(client.IsAuthenticated);
                await client.AuthenticateAsync(_config["SmtpUsername"], _config["SmtpPassword"]);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
        
    }
}