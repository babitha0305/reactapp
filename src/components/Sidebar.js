import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{ width: 200, [`& .MuiDrawer-paper`]: { width: 200 } }}
    >
      <List>
        {['Home', 'About', 'Contact'].map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default Sidebar;