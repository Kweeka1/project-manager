using Tailwind;
using mvc.Extensions.ExceptionHandler;
using Microsoft.AspNetCore.Rewrite;

var builder = WebApplication.CreateBuilder(args);
var rewrite = new RewriteOptions().AddRewrite(@"\/", "/home", true);

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    //app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRewriter(rewrite);
app.UseStaticFiles();

app.UseRouting();
app.UseCustomExceptionHandler();

app.UseAuthorization();

app.MapControllers();

app.RunTailwind("tailwind");
app.Run();
