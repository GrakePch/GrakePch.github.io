import { makeStyles } from "@material-ui/core";
import GKPIconBlack from "../../assets/G-logo/GKP-2111-black.svg";

export const useStylesWelcome = makeStyles(theme => ({
  welcome_screen: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 99,
    pointerEvents: 'none',

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
}))