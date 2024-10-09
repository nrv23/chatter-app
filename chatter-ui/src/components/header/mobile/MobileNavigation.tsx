import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { IPage } from "../../../interfaces/page.interface";
import { useNavigate } from "react-router-dom";

interface MobileNavigationProps {
    pages: IPage[];
}

const MobileNavigation = ({ pages}: MobileNavigationProps) =>  {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      const navigate = useNavigate();
    
    return <>
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={() => {
                  handleCloseNavMenu();
                  navigate(page.path);
                }}>
                  <Typography sx={{ textAlign: 'center' }}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    </>
}


export default MobileNavigation;