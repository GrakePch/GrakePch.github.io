import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    flexDirection: "column",
    width: "min(calc(100% - 6rem), 1152px)",
    margin: "0 auto",
    // marginTop: "-5rem",
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
  }
}))