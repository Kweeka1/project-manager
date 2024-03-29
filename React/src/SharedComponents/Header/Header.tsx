import React, {FunctionComponent, MouseEvent, SyntheticEvent, useContext, useState} from "react"
import {AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography, useTheme} from "@mui/material";
import {Search, SearchIconWrapper, StyledInputBase} from "../StyledComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import MobileMenu from "./HeaderComponents/MobileMenu";
import ProjectsDropdown from "./HeaderComponents/ProjectsDropdown";
import {
  DarkMode,
  ShieldMoon,
  WbIncandescent,
  WbIridescent,
  WbShade,
  WbShadeSharp,
  WbSunny,
  WbTwilight
} from "@mui/icons-material";
import {ColorModeContext} from "../../Contexts/ThemeContext";



const Header: FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [ProjectsAnchorEl, setProjectsAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isProjectsDropdownOpen = Boolean(ProjectsAnchorEl);

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) : void => setAnchorEl(event.currentTarget);
  const handleProjectsMenuOpen = (event: MouseEvent<HTMLElement>) : void => setProjectsAnchorEl(event.currentTarget);
  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) : void => setMobileMoreAnchorEl(event.currentTarget);
  const handleProjectsMenuClose = () : void => setProjectsAnchorEl(null);
  const handleMobileMenuClose = () : void => setMobileMoreAnchorEl(null);
  const handleMenuClose = () : void => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const colorModeContext = useContext(ColorModeContext);
  const theme = useTheme();

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' }, paddingRight: "2rem" }}
        >
          Pro Collab
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            disableElevation
            onClick={handleProjectsMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
          >My Projects</Button>
          <Button
            variant="contained"
            disableElevation
            onClick={handleProjectsMenuOpen}
            endIcon={<KeyboardArrowDownIcon />}
          >Invite people</Button>
          <Button
            variant="contained"
            disableElevation
            onClick={handleProjectsMenuOpen}
          >Create</Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <IconButton size="large" color="inherit" onClick={() => colorModeContext.toggleColorMode()} >
            { theme.palette.mode === "light" ? <WbSunny /> : <DarkMode /> }
          </IconButton>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
      {<ProjectsDropdown
        handleProjectsMenuClose={handleProjectsMenuClose}
        isProjectsDropdownOpen={isProjectsDropdownOpen}
        ProjectsAnchorEl={ProjectsAnchorEl} />}
      {<MobileMenu
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl} />}
      {renderMenu}
    </Box>
  )
}

export default Header;