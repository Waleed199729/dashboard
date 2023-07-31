import * as React from 'react';

import {Routes, Route, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import  HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SellIcon from '@mui/icons-material/Sell';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Leaderboard from './Leaderboard';
import Orders from './Orders';
import SalesReport from './SalesReport';
import Customers from './Customers';
import Home from './Home.js';

const drawerWidth = 240;

const Dashboard = (props) => {

    const navigate  = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

           <ListItem  disablePadding onClick={() => navigate("/")}>    
             <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
               </ListItemIcon>
              <ListItemText> Home </ListItemText>
            </ListItemButton>
           </ListItem>

           <ListItem  disablePadding  onClick={() => navigate("/leaderboard")}>    
             <ListItemButton>
              <ListItemIcon>
                <LeaderboardIcon />     
               </ListItemIcon>
              <ListItemText> LeaderBoard </ListItemText>
            </ListItemButton>
           </ListItem>

           <ListItem  disablePadding onClick={() => navigate("/orders")}>    
             <ListItemButton>
              <ListItemIcon>
                <SellIcon />
               </ListItemIcon>
              <ListItemText> Orders </ListItemText>
            </ListItemButton>
           </ListItem>

           <ListItem  disablePadding onClick={() => navigate("/salesreport")}>    
             <ListItemButton>
              <ListItemIcon>
                <QueryStatsIcon />
               </ListItemIcon>
              <ListItemText> SalesReport </ListItemText>
            </ListItemButton>
           </ListItem>

           <ListItem  disablePadding onClick={() => navigate("/customers")}>    
             <ListItemButton>
              <ListItemIcon>
                <GroupIcon />
               </ListItemIcon>
              <ListItemText> Customers  </ListItemText>
            </ListItemButton>
           </ListItem>


      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            AppsGenii Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route  path='/leaderboard' element={<Leaderboard />} />
            <Route  path='/orders' element={<Orders />} />
            <Route  path='/salesreport' element={<SalesReport />} />
            <Route  path='/customers' element={<Customers />} />
        </Routes>
        
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;