import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import { Copyright } from '@mui/icons-material';
export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{margin:'auto'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, cursor: 'default' }}
            disableRipple 
          >
            <CodeIcon/>
          </IconButton>
          <Typography variant="h6" component="div">
            Code Assist
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 1, cursor: 'default' }}
            disableRipple
          >
            <CodeOffIcon/>
          </IconButton>
        
        </Toolbar>
        <Box sx={{margin:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>

      <Copyright/>
      <Typography sx={{margin:'1px'}}>

       2024
      </Typography>
        </Box>
      </AppBar>
      
    </Box>
  );
}