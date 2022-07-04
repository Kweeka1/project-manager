using mvc.Entities;
using Quartz;

namespace mvc.BackgroundServices;

public class RemoveExpiredToConfirmAccounts : IJob
{
    private readonly ProjectContext _context;
    private readonly ILogger<RemoveExpiredToConfirmAccounts> _logger;

    public RemoveExpiredToConfirmAccounts(ProjectContext context, ILogger<RemoveExpiredToConfirmAccounts> logger)
    {
        _context = context;
        _logger = logger;
    }
    public async Task Execute(IJobExecutionContext context)
    {
        var users = _context.EmailConfirmations.AsEnumerable().Where(user => user.IsExpired);
        _context.EmailConfirmations.RemoveRange(users);
        await _context.SaveChangesAsync();
    }
}