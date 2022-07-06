using Microsoft.EntityFrameworkCore;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;

namespace mvc.Entities;

public class ProjectContext : DbContext
***REMOVED***
    public ProjectContext(DbContextOptions<ProjectContext> options) : base(options)
    ***REMOVED***
        
***REMOVED***
    public DbSet<User> Users ***REMOVED*** get; set; ***REMOVED***
***REMOVED***