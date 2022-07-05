import Box from "@mui/material/Box";

import ScrollUpIcon from "../components/ScrollUpIcon";

import { useEffect, useState } from "react";

const drawerWidth = 140;

const Layout = ({ children }) => {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: "1rem",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
      }}
    >
      {children}
      {showUpButton && (
        <Box
          sx={{
            position: "fixed",
            right: "1rem",
            bottom: "1rem",
            zIndex: "1",
          }}
        >
          <ScrollUpIcon showUpButton={showUpButton} />
        </Box>
      )}
    </Box>
  );
};

export default Layout;
