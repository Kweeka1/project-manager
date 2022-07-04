using mvc.Entities;
using Quartz;

namespace mvc.BackgroundServices;

public class RemoveExpiredToConfirmAccounts : IJob
***REMOVED***
    private readonly ProjectContext _context;
    private readonly ILogger<RemoveExpiredToConfirmAccounts> _logger;

    public RemoveExpiredToConfirmAccounts(ProjectContext context, ILogger<RemoveExpiredToConfirmAccounts> logger)
    ***REMOVED***
        _context = context;
        _logger = logger;
***REMOVED***
    public async Task Execute(IJobExecutionContext context)
    ***REMOVED***
        var users = _context.EmailConfirmations.AsEnumerable().Where(user => user.IsExpired);
        _context.EmailConfirmations.RemoveRange(users);
        await _context.SaveChangesAsync();
***REMOVED***
***REMOVED***