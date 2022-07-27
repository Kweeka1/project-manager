﻿using Microsoft.EntityFrameworkCore;
using mvc.Entities;
using Quartz;

namespace mvc.BackgroundServices;

public class RemoveInactiveAccounts : IJob
***REMOVED***
    private readonly ProjectContext _context;

    public RemoveInactiveAccounts(ProjectContext context)
    ***REMOVED***
        _context = context;
***REMOVED***

    public async Task Execute(IJobExecutionContext context)
    ***REMOVED***
        var users = _context.Users.AsQueryable().Where(user => user.Deactivate);
        _context.RemoveRange(users);
        await _context.SaveChangesAsync();
***REMOVED***
***REMOVED***