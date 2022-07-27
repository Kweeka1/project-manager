using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using Quartz;

namespace mvc.BackgroundServices.Jobs;

public class SendConfirmationEmail : IJob
***REMOVED***
    private readonly IConfiguration _config;

    public SendConfirmationEmail(IConfiguration config)
    ***REMOVED***
        _config = config.GetSection("EmailConfig");
***REMOVED***

    public async Task Execute(IJobExecutionContext context)
    ***REMOVED***
        Console.WriteLine("starting emailsender");
        var dataMap = context.JobDetail.JobDataMap;
        var message = new MimeMessage();
        try
        ***REMOVED***
            message.From.Add(new MailboxAddress("Pro Collab", "procollab@zohomail.com"));
            message.To.Add(new MailboxAddress($"***REMOVED***dataMap["FirstName"]***REMOVED*** ***REMOVED***dataMap["LastName"]***REMOVED***",(string)dataMap["Email"]));
            message.Subject = "Confirmation email";
            message.Body = new TextPart("plain")
            ***REMOVED***
                Text =
                    $"Hey ***REMOVED***dataMap["FirstName"]***REMOVED*** ***REMOVED***dataMap["LastName"]***REMOVED***,\nTo start using your account please click the link below:\n\nhttps://localhost:7159/activate?email=***REMOVED***dataMap["Email"]***REMOVED***&token=***REMOVED***dataMap["Token"]***REMOVED***\n\nIf you have any questions, please email us at procollab@zohomail.com\n\nHave a nice day!\nPro Collab Team"
        ***REMOVED***;
            using (var client = new SmtpClient())
            ***REMOVED***
                Console.WriteLine(_config["SmtpServer"].Length);
                Console.WriteLine(_config["SmtpPort"].Length);
                await client.ConnectAsync(_config["SmtpServer"], int.Parse(_config["SmtpPort"]),
                    SecureSocketOptions.StartTls);
                Console.WriteLine(client.IsConnected);
                Console.WriteLine(client.IsAuthenticated);
                await client.AuthenticateAsync(_config["SmtpUsername"], _config["SmtpPassword"]);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
        ***REMOVED***
    ***REMOVED***
        catch (Exception e)
        ***REMOVED***
            Console.WriteLine(e);
            throw;
    ***REMOVED***
        
***REMOVED***
***REMOVED***