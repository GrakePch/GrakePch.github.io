import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "min(calc(100% - 128px), 1152px)",
    margin: "0 auto",

    "@media (max-width: 599px)": {
      width: "calc(100% - 3rem)"
    }
  },
  top_banner: {
    position: "relative",
    width: "100%",
    height: "20rem",
    backgroundColor: theme.palette.background.paper,
    margin: 0,
    marginBottom: "2rem",
    padding: "2rem",
  },
  categLink: {
    textDecoration: 'none',
    color: 'inherit',
    "&:hover": {
      textDecoration: 'underline',
    }
  },
  content_block: {
    width: "100%",
    display: "flex",
    alignItems: 'center',
    margin: "2rem 0",
  },
  friendLink: {
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1) !important",
    "&:not(:last-child)": {
      marginRight: ".5rem",
    },

    "&:hover": {
      transform: 'translateY(-.2rem)',
      boxShadow: `0 .4rem 0 0 ${theme.palette.primary.main}`,
    }
  },
}))