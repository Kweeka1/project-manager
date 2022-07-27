using System.Collections.Concurrent;
using mvc.Entities;
using Quartz;
using Quartz.Simpl;
using Quartz.Spi;

namespace mvc.BackgroundServices;

public class JobFactory : IJobFactory
***REMOVED***
    private readonly IServiceProvider _serviceProvider;

    private readonly ConcurrentDictionary<IJob, IServiceScope> _scopes = new ();

    public JobFactory(IServiceProvider serviceProvider)
    ***REMOVED***
        _serviceProvider = serviceProvider;
***REMOVED***

    public IJob NewJob(TriggerFiredBundle bundle, IScheduler scheduler)
    ***REMOVED***
        var scope = _serviceProvider.CreateScope();
        IJob job;

        try
        ***REMOVED***
            job = scope.ServiceProvider.GetRequiredService(bundle.JobDetail.JobType) as IJob;
    ***REMOVED***
        catch
        ***REMOVED***
            // Failed to create the job -> ensure scope gets disposed
            scope.Dispose();
            throw;
    ***REMOVED***

        // Add scope to dictionary so we can dispose it once the job finishes
        if (!_scopes.TryAdd(job, scope))
        ***REMOVED***
            // Failed to track DI scope -> ensure scope gets disposed
            scope.Dispose();
            throw new Exception("Failed to track DI scope");
    ***REMOVED***

        return job;
***REMOVED***

    public void ReturnJob(IJob job)
    ***REMOVED***
        if (_scopes.TryRemove(job, out var scope))
        ***REMOVED***
            // The Dispose() method ends the scope lifetime.
            // Once Dispose is called, any scoped services that have been resolved from ServiceProvider will be disposed.
            scope.Dispose();
    ***REMOVED***
***REMOVED***
***REMOVED***