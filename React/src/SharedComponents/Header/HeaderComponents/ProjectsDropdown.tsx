import React, {FunctionComponent} from "react"
import {Menu, MenuItem} from "@mui/material";
import {ProjectsDropdownProps} from "../interface";

const ProjectsDropdown: FunctionComponent<ProjectsDropdownProps> = ({ProjectsAnchorEl, isProjectsDropdownOpen, handleProjectsMenuClose}) => {
  return (
    <Menu
      anchorEl={ProjectsAnchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isProjectsDropdownOpen}
      onClose={handleProjectsMenuClose}
    >
      <MenuItem onClick={handleProjectsMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProjectsMenuClose}>My account</MenuItem>
    </Menu>
  )
}

export default ProjectsDropdown;