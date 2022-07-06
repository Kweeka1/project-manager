using mvc.Entities;
using Quartz;

namespace mvc.BackgroundServices;

public class RemoveInactiveAccounts : IJob
***REMOVED***
    private readonly ProjectContext _context;

    public RemoveInactiveAccounts(ProjectContext context)
    ***REMOVED***
        _context = context;
***REMOVED***

    public async Task Execute(IJobExecutionContext context)
    ***REMOVED***
        var inactiveUsers = _context.Users.AsQueryable().Where(user => user.Deactivate);
        _context.Users.RemoveRange(inactiveUsers);
***REMOVED***
***REMOVED***