import { hexToRgb, makeStyles } from "@material-ui/core";
import GKPIconBlack from "../../assets/G-logo/GKP-2301-vector.svg";

export const useStyles = makeStyles((theme) => ({
  "welcome_screen": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(${theme.palette.background.paper}e6, ${theme.palette.background.paper}e6), url(${GKPIconBlack})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '10rem',
    backgroundPosition: 'center',
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: `calc(75vw + 3rem)`,
    maxWidth: `calc(1440px + 3rem)`,
    margin: "0 auto",
    paddingTop: "6rem",
    "@media (max-width: 464px)": {
      width: "100%"
    }
  },
  cards: {
    height: "32vw",
    maxHeight: 614.4,
    margin: `${theme.spacing(12)}px ${theme.spacing(3)}px`,
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    overflow: "hidden",
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1)",

    "&:hover": {
      transform: 'translateY(-.5rem)',
      boxShadow: `.33rem 1rem 0 0 ${theme.palette.primary.main}, -.33rem 1rem 0 0 ${theme.palette.primary.main}, .33rem -.33rem 0 0 ${theme.palette.primary.main}, -.33rem -.33rem 0 0 ${theme.palette.primary.main}`,
    },

    "@media (max-width: 1088px)": {
      height: "100%",
      maxHeight: "none",
      // minHeight: "75vw",
    }
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    padding: "1rem",
    "@media (max-width: 1088px)": {
      flexDirection: "column",

    }
  },
  cardMedia: {
    height: "calc(32vw - 2rem)",
    width: "calc((32vw - 2rem) * 16 / 9)",
    maxWidth: 1092.48,
    flexShrink: 0,
    "@media (max-width: 1088px)": {
      width: "calc(75vw - 2rem)",
      height: "calc((75vw - 2rem) / 16 * 9)"
    },
    "@media (max-width: 464px)": {
      width: "100%",
      height: "calc((100vw - 2rem) / 16 * 9)"
    }
  },
  cardContent: {
    flexGrow: 1,
    // width: 0,
    height: "100%",
    marginLeft: "1.5rem",
    padding: 0,
    "@media (max-width: 1088px)": {
      display: "flex",
      flexDirection: "row-reverse",
      justifyContent: "flex-end",
      width: "100%",
      marginLeft: 0,
      marginTop: "1.5rem",
      marginBottom: "1.5rem",
    }
  }
}))