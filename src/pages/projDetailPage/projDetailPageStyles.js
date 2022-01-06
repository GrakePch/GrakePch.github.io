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
    width: "100%",
    height: "20rem",
    backgroundColor: '#e1e3e5',
    margin: 0,
    marginBottom: "2rem",
    padding: "2rem",
    backgroundPosition: 'bottom 2rem right 2rem',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 60,
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