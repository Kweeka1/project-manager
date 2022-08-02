import React, ***REMOVED***FunctionComponent***REMOVED*** from "react"
import ***REMOVED***Menu, MenuItem***REMOVED*** from "@mui/material";
import ***REMOVED***ProjectsDropdownProps***REMOVED*** from "../interface";

const ProjectsDropdown: FunctionComponent<ProjectsDropdownProps> = (***REMOVED***ProjectsAnchorEl, isProjectsDropdownOpen, handleProjectsMenuClose***REMOVED***) => ***REMOVED***
  return (
    <Menu
      anchorEl=***REMOVED***ProjectsAnchorEl***REMOVED***
      anchorOrigin=***REMOVED******REMOVED***
        vertical: 'bottom',
        horizontal: 'left',
  ***REMOVED******REMOVED***
      keepMounted
      transformOrigin=***REMOVED******REMOVED***
        vertical: 'top',
        horizontal: 'left',
  ***REMOVED******REMOVED***
      open=***REMOVED***isProjectsDropdownOpen***REMOVED***
      onClose=***REMOVED***handleProjectsMenuClose***REMOVED***
    >
      <MenuItem onClick=***REMOVED***handleProjectsMenuClose***REMOVED***>Profile</MenuItem>
      <MenuItem onClick=***REMOVED***handleProjectsMenuClose***REMOVED***>My account</MenuItem>
    </Menu>
  )
***REMOVED***

export default ProjectsDropdown;