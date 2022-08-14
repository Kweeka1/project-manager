using Microsoft.EntityFrameworkCore;
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
        var users = _context.Users.AsQueryable().Where(user => user.Deactivate);
        _context.RemoveRange(users);
        await _context.SaveChangesAsync();
    }
}