using Quartz;

namespace mvc.BackgroundServices;

public class QuartzHostedService : IHostedService
***REMOVED***
    private readonly IScheduler _scheduler;

    public QuartzHostedService(IScheduler scheduler)
    ***REMOVED***
        _scheduler = scheduler;
***REMOVED***

    public async Task StartAsync(CancellationToken cancellationToken)
    ***REMOVED***
        Console.WriteLine("started Quartz hosted service");
        await _scheduler.Start(cancellationToken);
        // "* * * * * ?" -> "seconds minutes hours day month"
        // "0 15 17 15 6 ?" -> Fire at 17:15PM at the 15th day of the month June
        
        // Remove Inactive accounts
        new QuartzJob(_scheduler).AddJob<RemoveInactiveAccounts>("0 31 16 * * ?");
***REMOVED***

    public Task StopAsync(CancellationToken cancellationToken)
    ***REMOVED***
        Console.WriteLine("shutting down quartz jobs");
        _scheduler.Shutdown(waitForJobsToComplete: true, cancellationToken);
        return Task.CompletedTask;
***REMOVED***
***REMOVED***