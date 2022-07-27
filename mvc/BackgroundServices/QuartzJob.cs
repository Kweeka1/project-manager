using Quartz;

namespace mvc.BackgroundServices;

public class QuartzJob
***REMOVED***
    private readonly IScheduler _scheduler;

    public QuartzJob(IScheduler scheduler)
    ***REMOVED***
        _scheduler = scheduler;
***REMOVED***

    public void AddJob<T>(string cron) where T : IJob
    ***REMOVED***
        var jobDetails = JobBuilder.Create<T>().WithIdentity(typeof(T).Name).Build();
        var trigger = TriggerBuilder.Create().WithCronSchedule(cron).Build();
        _scheduler.ScheduleJob(jobDetails, trigger);
***REMOVED***
***REMOVED***