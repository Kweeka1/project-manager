using Microsoft.EntityFrameworkCore;
using mvc.BackgroundServices;
using mvc.BackgroundServices.Jobs;
using mvc.Entities;
using mvc.Extensions.ExceptionHandler;
using mvc.Extensions.MemoryCache.UserCache;
using mvc.Repositories.Interfaces;
using mvc.Repositories.Services;
using Quartz;
using Quartz.Impl;
using Quartz.Spi;
using Tailwind;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
var config = builder.Configuration;
builder.Services.AddDbContext<ProjectContext>(options => options.UseNpgsql(config.GetConnectionString("Npgsql")));
builder.Services.AddMemoryCache();
builder.Services.AddSingleton<IUserAccountCache, UserAccountCache>();
// add cron job with DI as scoped
builder.Services.AddTransient<RemoveInactiveAccounts>();
builder.Services.AddTransient<SendConfirmationEmail>();
builder.Services.AddTransient<IUserServices, UserServices>();
builder.Services.AddAutoMapper(typeof(Program));

builder.Services.AddSingleton<IScheduler>(provider =>
{
    var factory = new StdSchedulerFactory();
    var scheduler = factory.GetScheduler().Result;

    scheduler.JobFactory = new JobFactory(provider);
    
    return scheduler;
});

builder.Services.AddHostedService<QuartzHostedService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    //app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseCustomExceptionHandler();

app.UseAuthorization();

app.MapControllers();

app.RunTailwind("tailwind");
app.Run();
