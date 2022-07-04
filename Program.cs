using System.Security.AccessControl;
using Tailwind;
using Microsoft.EntityFrameworkCore;
using mvc.BackgroundServices;
using mvc.Extensions.ExceptionHandler;
using mvc.Entities;
using mvc.Extensions.ServiceCollection;
using mvc.Repositories.Interfaces;
using mvc.Repositories.Services;
using Quartz;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
var config = builder.Configuration;
builder.Services.AddDbContext<ProjectContext>(options => options.UseNpgsql(config.GetConnectionString("Npgsql")));
builder.Services.AddTransient<IUserServices, UserServices>();
builder.Services.AddAutoMapper(typeof(Program));
builder.Services.AddQuartzHostedService(q => q.WaitForJobsToComplete = true);
builder.Services.AddQuartz(q =>
***REMOVED***
    q.UseMicrosoftDependencyInjectionJobFactory();
    // Cron Schedule time is in UTC
    // subtract time by 1 hour -> 10:15 become 09:15
    // "* * * * * ?" -> "seconds minutes hours day month"
    // "0 15 12 15 * ?" -> Fire at 12:15PM at the 15th day of every month
    // "0 15 17 15 6 ?" -> Fire at 17:15PM at the 15th day of the month June
    //https://www.quartz-scheduler.net/documentation/quartz-3.x/tutorial/crontrigger.html#examples
    q.AddJobWithTrigger<RemoveExpiredToConfirmAccounts>("0 30 2 * * ?");
    
***REMOVED***);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
***REMOVED***
    //app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
***REMOVED***

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseCustomExceptionHandler();

app.UseAuthorization();

app.MapControllers();

app.RunTailwind("tailwind");
app.Run();
