import {
  Box,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Button
} from "@mui/material";
import { useState } from "react";
import { logout } from "../../utils/logout";
import { useNavigate } from "react-router-dom";

const settings = ["Logout"];

const Settings = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const logoutFn = async () => {
    try {
      console.log("Cerrando sesión...");
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      // Aquí puedes manejar el error de manera más amigable para el usuario
      // Por ejemplo, mostrar un mensaje de error
    }
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map(setting =>
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Button key={setting} onClick={logoutFn}>
              {setting}
            </Button>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default Settings;
