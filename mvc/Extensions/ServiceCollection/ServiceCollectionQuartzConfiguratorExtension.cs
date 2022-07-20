using Quartz;

namespace mvc.Extensions.ServiceCollection;

public static class ServiceCollectionQuartzConfiguratorExtension
***REMOVED***
    public static void AddJobWithTrigger<T>(
        this IServiceCollectionQuartzConfigurator quartzConfigurator, string cronSchedule) where T : IJob
    ***REMOVED***
        var jobName = typeof(T).Name;

        var jobKey = new JobKey(jobName);

        quartzConfigurator.AddJob<T>(job => job.WithIdentity(jobKey));
        quartzConfigurator.AddTrigger(trigger =>
            trigger.ForJob(jobKey)
                .WithCronSchedule(cronSchedule)
        );
***REMOVED***
***REMOVED***