import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import IconButton from '@mui/material/IconButton';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const pages = ['Home', 'Refactor', 'Review'];


export default function Nav({ rm }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const handleitem = (index) => {
    if (index === 0) {
      navigate('/');
    }
    else if (index === 1) {
      navigate('/refactor');
    }
    else if (index === 2) {
      navigate('/review');

    }
  }


  return (
    <AppBar position="sticky" style={{ top: 0, zIndex: 1201 }}>
      <Container maxWidth="xg">
        <Toolbar disableGutters>


          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, alignItems: 'center',marginLeft:'10px' }}>

            <CodeIcon sx={{marginRight:1}}/>

            <Typography variant="h6" component="div" >
              Code Assist
            </Typography>

            <CodeOffIcon sx={{marginLeft:1}}/>

          </Box>



          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => {
                  handleCloseNavMenu();
                  handleitem(index);
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, alignItems: 'center' }}>

            <CodeIcon sx={{marginRight:1}}/>

            <Typography variant="h6" component="div" >
              Code Assist
            </Typography>

            <CodeOffIcon sx={{marginLeft:1}}/>

          </Box>


          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  handleitem(index);
                }}
                sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}

