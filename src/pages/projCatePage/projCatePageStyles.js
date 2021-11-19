import { makeStyles } from "@material-ui/core";
import GKPIconBlack from "../../assets/G-logo/GKP-2111-black.svg";

export const useStyles = makeStyles((theme) => ({
  "welcome_screen": {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#e1e3e5',
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `linear-gradient(rgba(225, 227, 229, 0.9), rgba(225, 227, 229, 0.9)), url(${GKPIconBlack})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '10rem',
    backgroundPosition: 'center',
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: `calc(75vw + ${theme.spacing(6)+"px"})`,
    maxWidth: `calc(1440px + ${theme.spacing(6)+"px"})`,
    margin: "0 auto",
    paddingTop: theme.spacing(12),
  },
  cards: {
    height: "32vw",
    maxHeight: 614.4,
    margin: `${theme.spacing(12)}px ${theme.spacing(3)}px`,
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1)",

    "&:hover": {
      transform: 'translateY(-.5rem)',
      boxShadow: `.33rem 1rem 0 0 ${theme.palette.primary.main}, -.33rem 1rem 0 0 ${theme.palette.primary.main}, .33rem -.33rem 0 0 ${theme.palette.primary.main}, -.33rem -.33rem 0 0 ${theme.palette.primary.main}`,
    }
  },
  cardActionArea: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  cardMedia: {
    height: "100%",
    width: "56.9vw",
    maxWidth: 1092.48,
    flexShrink: 0,
  },
  cardContent: {
    flexGrow: 1,
    width: 0,
    height: "100%",
    paddingTop: `calc(60px + ${theme.spacing(4)+"px"})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 60,
    backgroundPosition: `${theme.spacing(2)+"px"} ${theme.spacing(2)+"px"}`,
  }
}))