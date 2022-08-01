import React, ***REMOVED***FunctionComponent, MouseEvent, SyntheticEvent, useState***REMOVED*** from "react"
import ***REMOVED***AppBar, Badge, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography***REMOVED*** from "@mui/material";
import ***REMOVED***Search, SearchIconWrapper, StyledInputBase***REMOVED*** from "../StyledComponents";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import MobileMenu from "./HeaderComponents/MobileMenu";



const Header: FunctionComponent = () => ***REMOVED***
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
  const handleMenuClose = () : void => ***REMOVED***
    setAnchorEl(null);
    handleMobileMenuClose();
***REMOVED***;

  const renderProjectsDropdown = (
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
  );

  const renderMenu = (
    <Menu
      anchorEl=***REMOVED***anchorEl***REMOVED***
      anchorOrigin=***REMOVED******REMOVED***
        vertical: 'bottom',
        horizontal: 'right',
  ***REMOVED******REMOVED***
      keepMounted
      transformOrigin=***REMOVED******REMOVED***
        vertical: 'top',
        horizontal: 'right',
  ***REMOVED******REMOVED***
      open=***REMOVED***isMenuOpen***REMOVED***
      onClose=***REMOVED***handleMenuClose***REMOVED***
    >
      <MenuItem onClick=***REMOVED***handleMenuClose***REMOVED***>Profile</MenuItem>
      <MenuItem onClick=***REMOVED***handleMenuClose***REMOVED***>My account</MenuItem>
    </Menu>
  );

  return (
    <Box sx=***REMOVED******REMOVED*** flexGrow: 1 ***REMOVED******REMOVED***>
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx=***REMOVED******REMOVED*** display: ***REMOVED*** xs: 'none', sm: 'block' ***REMOVED*** ***REMOVED******REMOVED***
        >
          Pro Collab
        </Typography>
        <Search>
          <SearchIconWrapper>
            ***REMOVED***/* <SearchIcon /> */***REMOVED***
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps=***REMOVED******REMOVED*** 'aria-label': 'search' ***REMOVED******REMOVED***
          />
        </Search>
        <Button
          variant="contained"
          disableElevation
          onClick=***REMOVED***handleProjectsMenuOpen***REMOVED***
          endIcon=***REMOVED***<KeyboardArrowDownIcon />***REMOVED***
        >My Projects</Button>
        <Button
          variant="contained"
          disableElevation
          onClick=***REMOVED***handleProjectsMenuOpen***REMOVED***
          endIcon=***REMOVED***<KeyboardArrowDownIcon />***REMOVED***
        >Invite people</Button>
        <Box sx=***REMOVED******REMOVED*** flexGrow: 1 ***REMOVED******REMOVED*** />
        <Box sx=***REMOVED******REMOVED*** display: ***REMOVED*** xs: 'none', md: 'flex' ***REMOVED*** ***REMOVED******REMOVED***>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent=***REMOVED***4***REMOVED*** color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent=***REMOVED***17***REMOVED*** color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            onClick=***REMOVED***handleProfileMenuOpen***REMOVED***
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx=***REMOVED******REMOVED*** display: ***REMOVED*** xs: 'flex', md: 'none' ***REMOVED*** ***REMOVED******REMOVED***>
          <IconButton
            size="large"
            onClick=***REMOVED***handleMobileMenuOpen***REMOVED***
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
      ***REMOVED***renderProjectsDropdown***REMOVED***
      ***REMOVED***<MobileMenu
        handleMobileMenuClose=***REMOVED***handleMobileMenuClose***REMOVED***
        handleProfileMenuOpen=***REMOVED***handleProfileMenuOpen***REMOVED***
        isMobileMenuOpen=***REMOVED***isMobileMenuOpen***REMOVED***
        mobileMoreAnchorEl=***REMOVED***mobileMoreAnchorEl***REMOVED*** />***REMOVED***
      ***REMOVED***renderMenu***REMOVED***
    </Box>
  )
***REMOVED***

export default Header;