using Microsoft.EntityFrameworkCore;
using mvc.Entities;

namespace mvc.BackgroundServices;

public class AddInitialMigration : IHostedService
{
    private readonly ProjectContext _projectContext;
    private readonly string dir = Directory.GetCurrentDirectory() + "/Migrations";
    private readonly ILogger<AddInitialMigration> _logger;

    public AddInitialMigration(ILogger<AddInitialMigration> logger, ProjectContext projectContext)
    {
        _logger = logger;
        _projectContext = projectContext;
    }

    public async Task StartAsync(CancellationToken cancellationToken)
    {
        await Task.Run(() =>
        {
            if (!cancellationToken.IsCancellationRequested)
            {
                if (Directory.Exists(dir)) return;
                _projectContext.Database.Migrate();
            }
        }, cancellationToken);
    }

    public Task StopAsync(CancellationToken cancellationToken)
    {
        if (!cancellationToken.IsCancellationRequested)
        {
            if (Directory.Exists(dir)) _logger.LogInformation($"{dir} Directory Exists");
            _logger.LogInformation($"{dir} Directory does not Exist");
        }
        
        return Task.CompletedTask;
    }
}