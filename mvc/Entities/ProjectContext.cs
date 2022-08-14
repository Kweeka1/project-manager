using Microsoft.EntityFrameworkCore;
using mvc.Entities.EmailConfirmations;
using mvc.Entities.UserEntity;

namespace mvc.Entities;

public class ProjectContext : DbContext
{
    public ProjectContext(DbContextOptions<ProjectContext> options) : base(options)
    {
        
    }
    public DbSet<User> Users { get; set; }
}