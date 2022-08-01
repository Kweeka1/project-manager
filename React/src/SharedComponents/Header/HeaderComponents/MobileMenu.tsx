import React, ***REMOVED***FunctionComponent, MouseEvent***REMOVED*** from "react";
import ***REMOVED***Badge, IconButton, Menu, MenuItem***REMOVED*** from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

interface Props ***REMOVED***
  mobileMoreAnchorEl: HTMLElement | null;
  isMobileMenuOpen: boolean;
  handleMobileMenuClose: (event: MouseEvent<HTMLElement>) => void;
  handleProfileMenuOpen: (event: MouseEvent<HTMLElement>) => void;
***REMOVED***

const renderMobileMenu: FunctionComponent<Props> = (***REMOVED***mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen***REMOVED***) => (
  <Menu
    anchorEl=***REMOVED***mobileMoreAnchorEl***REMOVED***
    anchorOrigin=***REMOVED******REMOVED***
      vertical: 'bottom',
      horizontal: 'right',
***REMOVED******REMOVED***
    keepMounted
    transformOrigin=***REMOVED******REMOVED***
      vertical: 'top',
      horizontal: 'right',
***REMOVED******REMOVED***
    open=***REMOVED***isMobileMenuOpen***REMOVED***
    onClose=***REMOVED***handleMobileMenuClose***REMOVED***
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent=***REMOVED***4***REMOVED*** color="error">
          <MailIcon/>
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent=***REMOVED***17***REMOVED*** color="error">
          <NotificationsIcon/>
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick=***REMOVED***handleProfileMenuOpen***REMOVED***>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle/>
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
)

export default renderMobileMenu;