import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { ReactComponent as LinkedInIconLight } from "../assets/svg/linkedInIconLight.svg";
import { ReactComponent as LinkedInIconDark } from "../assets/svg/linkedInIconDark.svg";
import { ReactComponent as GithubIconLight } from "../assets/svg/githubIconLight.svg";
import { ReactComponent as GithubIconDark } from "../assets/svg/githubIconDark.svg";
import { ReactComponent as FacebookIconLight } from "../assets/svg/facebookIconLight.svg";
import { ReactComponent as FacebookIconDark } from "../assets/svg/facebookIconDark.svg";
import { ReactComponent as InstagramIconLight } from "../assets/svg/instagramIconLight.svg";
import { ReactComponent as InstagramIconDark } from "../assets/svg/instagramIconDark.svg";
import { ReactComponent as WhatsAppIconLight } from "../assets/svg/whatsAppIconLight.svg";
import { ReactComponent as WhatsAppIconDark } from "../assets/svg/whatsAppIconDark.svg";

import Logo from "../assets/png/vk.png";

import styled from "styled-components";

const drawerWidth = 140;

const menuMapping = {
  About: "about",
  "My Skills": "skills",
  Projects: "projects",
};

const Image = styled.img`
  width: ${drawerWidth - 50}px;
  height: ${drawerWidth - 50}px;
  margin: 1rem;
  cursor: pointer;
`;

// const Link = styled.a`
//   background: transparent;
//   border-radius: 3px;
//   color: palevioletred;
//   margin: 0.5em;
//   text-align: center;
//   text-decoration: none;
// `;

const DrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <DrawerContainer>
      <Image src={Logo} onClick={() => navigate("/")} />
      <Divider sx={{ width: "100%" }} />
      <Typography
        component="div"
        variant="body"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Vaibhav Kesharwani
      </Typography>
      <Divider sx={{ width: "100%" }} />
      <List>
        {[
          "",
          "About",
          "My Skills",
          "Projects",
          "Certifications",
          "Honors & Awards",
          "Contact",
        ].map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "flex", flexDirection: "column" }}
          >
            {/* <ListItemButton onClick={() => navigate(`${menuMapping[text]}`)}>
              <ListItemText primary={text} sx={{ textAlign: "center" }} />
            </ListItemButton> */}

            <Link
              to={`/${menuMapping[text]}`}
              style={{
                background: "transparent",
                borderRadius: "3px",
                color: "palevioletred",
                margin: "0.5em",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              {text}
            </Link>
            <Divider sx={{ width: "100%" }} />
          </ListItem>
        ))}
      </List>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: "1rem",
        }}
      >
        <IconButton
          href="https://www.linkedin.com/in/vaibhav-kesharwani-5b8137111/"
          target="_blank"
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <LinkedInIconDark />
          ) : (
            <LinkedInIconLight />
          )}
        </IconButton>
        <IconButton
          href="https://github.com/vaibbhavk"
          target="_blank"
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <GithubIconDark />
          ) : (
            <GithubIconLight />
          )}
        </IconButton>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          p: "1rem",
        }}
      >
        <IconButton
          href="https://www.facebook.com/vaibhav.vk28/"
          target="_blank"
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <FacebookIconDark />
          ) : (
            <FacebookIconLight />
          )}
        </IconButton>
        <IconButton
          href="https://www.instagram.com/vk_2128/"
          target="_blank"
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <InstagramIconDark />
          ) : (
            <InstagramIconLight />
          )}
        </IconButton>

        <IconButton
          href="https://wa.me/8770911462"
          target="_blank"
          color="inherit"
        >
          {theme.palette.mode === "light" ? (
            <WhatsAppIconDark />
          ) : (
            <WhatsAppIconLight />
          )}
        </IconButton>
      </Box>
      <Divider sx={{ width: "100%" }} />

      <Box
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
        }}
      >
        <IconButton onClick={props.colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>
    </DrawerContainer>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="mailbox folders"
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={{
          display: { sm: "none" },
          marginTop: "8px",
        }}
      >
        <MenuIcon />
      </IconButton>
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
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
