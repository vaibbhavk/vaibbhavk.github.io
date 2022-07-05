import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { blueGrey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";

const fabLightStyle = {
  color: "common.white",
  bgcolor: blueGrey[700],
  "&:hover": {
    bgcolor: blueGrey[400],
  },
};

const fabDarkStyle = {
  color: "common.white",
  bgcolor: blueGrey[200],
  "&:hover": {
    bgcolor: blueGrey[400],
  },
};

const ScrollUpIcon = ({ showUpButton }) => {
  const theme = useTheme();

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <Zoom
      in={showUpButton}
      timeout={transitionDuration}
      style={{
        transitionDelay: `${showUpButton ? transitionDuration.exit : 0}ms`,
      }}
      unmountOnExit
    >
      <Fab
        size="small"
        sx={theme.palette.mode === "dark" ? fabDarkStyle : fabLightStyle}
        aria-label="scroll-up"
      >
        <KeyboardArrowUpIcon size="small" />
      </Fab>
    </Zoom>
  );
};

export default ScrollUpIcon;
