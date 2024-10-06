import { Box, Button } from "@mui/material";
import { useState } from "react";

export interface NavigationProps {
  pages: string[];
}

const Navigation = ({ pages }: NavigationProps) => {
  const [, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map(page =>
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      )}
    </Box>
  );
};

export default Navigation;
