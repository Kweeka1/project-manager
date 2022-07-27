using Quartz;

namespace mvc.BackgroundServices;

public class QuartzHostedService : IHostedService
{
    private readonly IScheduler _scheduler;

    public QuartzHostedService(IScheduler scheduler)
    {
        _scheduler = scheduler;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        Console.WriteLine("started Quartz hosted service");
        await _scheduler.Start(cancellationToken);
        // "* * * * * ?" -> "seconds minutes hours day month"
        // "0 15 17 15 6 ?" -> Fire at 17:15PM at the 15th day of the month June
        
        // Remove Inactive accounts
        new QuartzJob(_scheduler).AddJob<RemoveInactiveAccounts>("0 31 16 * * ?");
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        Console.WriteLine("shutting down quartz jobs");
        _scheduler.Shutdown(waitForJobsToComplete: true, cancellationToken);
        return Task.CompletedTask;
    }
}