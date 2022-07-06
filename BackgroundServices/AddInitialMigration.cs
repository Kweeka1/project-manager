using Microsoft.EntityFrameworkCore;
using mvc.Entities;

namespace mvc.BackgroundServices;

public class AddInitialMigration : IHostedService
***REMOVED***
    private readonly ProjectContext _projectContext;
    private readonly string dir = Directory.GetCurrentDirectory() + "/Migrations";
    private readonly ILogger<AddInitialMigration> _logger;

    public AddInitialMigration(ILogger<AddInitialMigration> logger, ProjectContext projectContext)
    ***REMOVED***
        _logger = logger;
        _projectContext = projectContext;
***REMOVED***

    public async Task StartAsync(CancellationToken cancellationToken)
    ***REMOVED***
        await Task.Run(() =>
        ***REMOVED***
            if (!cancellationToken.IsCancellationRequested)
            ***REMOVED***
                if (Directory.Exists(dir)) return;
                _projectContext.Database.Migrate();
        ***REMOVED***
    ***REMOVED***, cancellationToken);
***REMOVED***

    public Task StopAsync(CancellationToken cancellationToken)
    ***REMOVED***
        if (!cancellationToken.IsCancellationRequested)
        ***REMOVED***
            if (Directory.Exists(dir)) _logger.LogInformation($"***REMOVED***dir***REMOVED*** Directory Exists");
            _logger.LogInformation($"***REMOVED***dir***REMOVED*** Directory does not Exist");
    ***REMOVED***
        
        return Task.CompletedTask;
***REMOVED***
***REMOVED***