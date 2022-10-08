import { makeStyles } from "@material-ui/core";
import GKPIconBlack from "../../assets/G-logo/GKP-2111-black.svg";

export const useStylesWelcome = makeStyles(theme => ({
  welcome_screen: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 99,
    // pointerEvents: 'none',

    // backgroundImage: `linear-gradient(${theme.palette.background.paper}e6, ${theme.palette.background.paper}e6), url(${GKPIconBlack})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: ({ logo_unit }) => logo_unit * 1400,
    // backgroundPosition: 'center',

    "& > div": {
      position: 'absolute',
    }
  },
  first_page_bg: {
    position: 'relative',
    width: "100%",
    height: "125vh",
    backgroundColor: theme.palette.background.paper,
    zIndex: 10,
  },
  second_page: {
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: "100%",
    height: "100vh",
    padding: "0 10vw",
    // color: theme.palette.background.default,
    backgroundColor: theme.palette.background.paper,

    zIndex: 100,
    "& > *": {
      zIndex: 100,
    }
  },
  logo_bg: {
    width: ({ logo_unit }) => logo_unit * 1400,
    height: ({ logo_unit }) => logo_unit * 1400,
    // borderRadius: "50%",
    backgroundColor: theme.palette.background.invert,
    opacity: ({ scrollPosY, vh }) =>
      scrollPosY > vh * .5 ?
        1 - (scrollPosY - vh * .5) / (vh * .5)
        : 1,
    top: '50%',
    left: '50%',
    transform: ({ t_mins, scrollPosY }) =>
      'translate(-50%, -50%) ' +
      `rotate(${scrollPosY < 10 ? t_mins / 60 * 90 : 0}deg)`,
    transition: "transform .5s cubic-bezier(.5,0,0,1)",
  },
  logo_main: {
    width: ({ logo_unit }) => logo_unit * 1300 * 2,
    height: ({ logo_unit }) => logo_unit * 1300 * 2,
    backgroundColor: theme.palette.background.paper,
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    transform: ({ t_hours, scrollPosY }) =>
      'translate(-50%, -50%) ' +
      `rotate(${30.8 + (scrollPosY < 10 ?
        t_hours >= 12 ?
          t_hours - 12 : t_hours
        : 0) / 12 * 360}deg)`,
    transition: "transform .5s cubic-bezier(.5,0,0,1)",
    backgroundColor: "initial !important",
    // backgroundColor: "white",

    "& > div": {
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
    }
  },
  logo_line_1: {
    bottom: ({ logo_unit }) => logo_unit * (222.5 + 650),
    left: 0,
    height: ({ logo_unit }) => logo_unit * 140,
    width: ({ logo_unit }) => logo_unit * (950 + 650),
    transformOrigin: ({ logo_unit }) => `${logo_unit * (650 + 650) + "px"} ${logo_unit * -287.5 + "px"}`,
    transform: 'rotate(180deg)',
  },
  logo_line_2: {
    bottom: ({ logo_unit }) => logo_unit * (222.5 + 650),
    left: 0,
    height: ({ logo_unit }) => logo_unit * 140,
    width: ({ logo_unit }) => logo_unit * (950 + 650),
    transformOrigin: ({ logo_unit }) => `${logo_unit * (650 + 650) + "px"} ${logo_unit * -287.5 + "px"}`,
    transform: 'rotate(90deg)',
  },
  logo_line_3: {
    bottom: ({ logo_unit }) => logo_unit * (222.5 + 650),
    left: 0,
    height: ({ logo_unit }) => logo_unit * 140,
    width: ({ logo_unit }) => logo_unit * (750 + 650),
    transformOrigin: ({ logo_unit }) => `${logo_unit * (650 + 650) + "px"} ${logo_unit * -287.5 + "px"}`,
    transform: 'rotate(0deg)',
  },
  logo_line_4: {
    bottom: ({ logo_unit }) => logo_unit * (222.5 + 650),
    left: 0,
    height: ({ logo_unit }) => logo_unit * 140,
    width: ({ logo_unit }) => logo_unit * (750 + 650),
    transformOrigin: ({ logo_unit }) => `${logo_unit * (650 + 650) + "px"} ${logo_unit * -287.5 + "px"}`,
    transform: 'rotate(-90deg)',
  },
  logo_dot: {
    width: ({ logo_unit }) => logo_unit * (130 + 70),
    height: ({ logo_unit }) => logo_unit * 200,
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
  },


  matrix_container: {
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#000",
  },
  matrix_item: {
    flexShrink: 0,
    width: 70, 
    height: 70, 
    backgroundImage: `url(${GKPIconBlack})`, 
    backgroundSize: "cover", 
    opacity: .5,
    filter: "invert(10%)",
    transition: "all .8s .0s",

    "&:hover": {
      opacity: 1,
      filter: "invert(77%) sepia(40%) saturate(870%) hue-rotate(110deg) brightness(91%) contrast(85%)",
      transition: "all .0s",
    }
  },

  mask_top: {
    width: "100%",
    height: 64,
    backgroundColor: theme.palette.background.paper,
  },
  mask_bottom: {
    bottom: 0,
    width: "100%",
    height: 64,
    backgroundColor: theme.palette.background.paper,
  },
  mask_left: {
    width: 64,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  mask_right: {
    right: 0,
    width: 64,
    height: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}))