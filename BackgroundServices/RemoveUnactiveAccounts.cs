using mvc.Entities;
using Quartz;

namespace mvc.BackgroundServices;

public class RemoveInactiveAccounts : IJob
{
    private readonly ProjectContext _context;

    public RemoveInactiveAccounts(ProjectContext context)
    {
        _context = context;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var inactiveUsers = _context.Users.AsQueryable().Where(user => user.Deactivate);
        _context.Users.RemoveRange(inactiveUsers);
    }
}