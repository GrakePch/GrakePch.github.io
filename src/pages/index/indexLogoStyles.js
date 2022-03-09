import { makeStyles } from "@material-ui/core";

function progress(scroll_percent, start, end = 1) {
  return (scroll_percent < start) ?
    1
    : (scroll_percent < end) ?
      1 - (scroll_percent - start) / (end - start)
      :
      0
}

function hide(scroll_percent, start_hiding) {
  return (scroll_percent < start_hiding) ?
    "block"
    :
    "none"
}

export const useStylesLogo = makeStyles(theme => ({
  welcome_screen: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
    zIndex: 99,
    pointerEvents: 'none',

    "& > div": {
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
    }
  },

  logo_main: {
    width: ({ logo_size }) => logo_size * 13 / 14,
    height: ({ logo_size }) => logo_size * 13 / 14,
    top: '50%',
    left: '50%',
    // transform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%) rotate(30.8deg)',
    backgroundColor: "initial !important",

    "& > div": {
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
    }
  },
  logo_line_1: {
    bottom: ({ logo_size }) => logo_size * 222.5 / 1400,
    left: 0,
    height: ({ logo_size }) => logo_size * 140 / 1400,
    width: ({ vh, scrollPosY, logo_size }) => logo_size * 950 / 1400 * progress(scrollPosY / vh, .56, .76),
    transformOrigin: ({ logo_size }) => `${logo_size * 650 / 1400 + "px"} ${logo_size * -287.5 / 1400 + "px"}`,
    transform: 'rotate(180deg)',
  },
  logo_line_2: {
    bottom: ({ logo_size }) => logo_size * 222.5 / 1400,
    left: 0,
    height: ({ logo_size }) => logo_size * 140 / 1400,
    width: ({ vh, scrollPosY, logo_size }) => logo_size * 950 / 1400 * progress(scrollPosY / vh, .44, .64),
    transformOrigin: ({ logo_size }) => `${logo_size * 650 / 1400 + "px"} ${logo_size * -287.5 / 1400 + "px"}`,
    transform: 'rotate(90deg)',
  },
  logo_line_3: {
    bottom: ({ logo_size }) => logo_size * 222.5 / 1400,
    left: 0,
    height: ({ logo_size }) => logo_size * 140 / 1400,
    width: ({ vh, scrollPosY, logo_size }) => logo_size * 750 / 1400 * progress(scrollPosY / vh, .362, .52),
    transformOrigin: ({ logo_size }) => `${logo_size * 650 / 1400 + "px"} ${logo_size * -287.5 / 1400 + "px"}`,
    transform: 'rotate(0deg)',
  },
  logo_line_4: {
    bottom: ({ logo_size }) => logo_size * 222.5 / 1400,
    left: 0,
    height: ({ logo_size }) => logo_size * 140 / 1400,
    width: ({ vh, scrollPosY, logo_size }) => logo_size * 750 / 1400 * progress(scrollPosY / vh, .204, .362),
    transformOrigin: ({ logo_size }) => `${logo_size * 650 / 1400 + "px"} ${logo_size * -287.5 / 1400 + "px"}`,
    transform: 'rotate(-90deg)',
  },
  logo_dot: {
    display: ({ vh, scrollPosY }) => hide(scrollPosY / vh, .2),
    width: ({ vh, scrollPosY, logo_size }) => logo_size * (130 + 70 * progress(scrollPosY / vh, .1, .2)) / 1400,
    height: ({ logo_size }) => logo_size * 200 / 1400,
    top: "50%",
    left: ({ vh, scrollPosY }) => 50 + 27.5 * (1 - progress(scrollPosY / vh, .1, .2)) + "%",
    transform: 'translate(-50%, -50%)',
  },

  mask_top: {
    top: 0,
    width: '100%',
    height: ({ vh, scrollPosY, logo_size }) => `calc((50vh - ${logo_size / 2 + "px"}) * (${progress(scrollPosY / vh, .76)}))`,
  },
  mask_bottom: {
    bottom: 0,
    width: '100%',
    height: ({ vh, scrollPosY, logo_size }) => `calc((50vh - ${logo_size / 2 + "px"}) * (${progress(scrollPosY / vh, .76)}))`,
  },
  mask_right: {
    right: 0,
    width: ({ vh, scrollPosY, logo_size }) => `calc((50% - ${logo_size / 2 + "px"}) * (${progress(scrollPosY / vh, .76)}))`,
    height: "100vh",
  },
  mask_left: {
    left: 0,
    width: ({ vh, scrollPosY, logo_size }) => `calc((50% - ${logo_size / 2 + "px"}) * (${progress(scrollPosY / vh, .76)}))`,
    height: "100vh",
  },

  first_page_bg: {
    position: 'relative',
    width: "100%",
    height: "150vh",
    backgroundColor: theme.palette.background.invert,
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
    color: theme.palette.background.default,
    backgroundColor: theme.palette.background.invert,
    zIndex: 10,
  }
}))