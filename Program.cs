using Tailwind;
using mvc.Extensions.ExceptionHandler;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

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
