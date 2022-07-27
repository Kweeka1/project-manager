using Quartz;

namespace mvc.BackgroundServices;

public class QuartzJob
{
    private readonly IScheduler _scheduler;

    public QuartzJob(IScheduler scheduler)
    {
        _scheduler = scheduler;
    }

    public void AddJob<T>(string cron) where T : IJob
    {
        var jobDetails = JobBuilder.Create<T>().WithIdentity(typeof(T).Name).Build();
        var trigger = TriggerBuilder.Create().WithCronSchedule(cron).Build();
        _scheduler.ScheduleJob(jobDetails, trigger);
    }
}