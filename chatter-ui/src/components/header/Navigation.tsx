import { Box, Button } from "@mui/material";
import { useState } from "react";
import { IPage } from "../../interfaces/page.interface";
import { useNavigate } from "react-router-dom";

export interface NavigationProps {
  pages: IPage[];
}

const Navigation = ({ pages }: NavigationProps) => {
  const [, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map(page =>
        <Button
          key={page.title}
          //onClick={handleCloseNavMenu}
          onClick={() => {
            handleCloseNavMenu();
            navigate(page.path);
          }}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.title}
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
