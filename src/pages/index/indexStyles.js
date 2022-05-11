import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({

  main: {
    // width: `calc(75vw + 3rem)`,
    // width: "min-content",
    position: "relative",
    maxWidth: `calc(1440px + 3rem)`,
    margin: "0 auto",
    zIndex: 100,
    backgroundColor: theme.palette.background.default,

    "@media (max-width: 512px)": {
      width: "100%"
    }
  },

  section_projects: {
    minHeight: "100vh",
    paddingTop: 184,
    margin: "0 auto",
    width: `calc((448px + 3rem) * 3)`, // 3 in a row

    "@media (max-width: 1584px)": { // 2 in a row
      width: `calc((448px + 3rem) * 2)`,
    },
    "@media (max-width: 1088px)": { // 1 in a row
      width: `min(calc(448px + 3rem), calc(100% + 3rem))`,
    },
    "@media (max-width: 512px)": { // Minimum size
      width: "100%",
    }
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    width: "448px",
    height: "min-content",
    boxShadow: "none !important",
    overflow: 'visible !important',
    margin: theme.spacing(3),

    "@media (max-width: 512px)": {
      width: "calc(100% - 3rem)",
    }
  },
  cardsActionArea: {
    backgroundColor: `${theme.palette.background.invert} !important`,
    color: `${theme.palette.background.default} !important`,
    height: 156,
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1)",

    "&:hover": {
      transform: 'translateY(-.5rem)',
      boxShadow: `.33rem 1rem 0 0 ${theme.palette.primary.main}, -.33rem 1rem 0 0 ${theme.palette.primary.main}, .33rem -.33rem 0 0 ${theme.palette.primary.main}, -.33rem -.33rem 0 0 ${theme.palette.primary.main}`,
    }
  },
  cardsActionBtn: {
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1) !important",

    "&:hover": {
      transform: 'translateY(-.2rem)',
      boxShadow: `0 .4rem 0 0 ${theme.palette.primary.main}`,
    }
  },

  section_friends: {
    paddingTop: 184,
    minHeight: "100vh",
    margin: "0 auto",
    width: `calc((448px + 3rem) * 3)`, // 3 in a row

    "& > div": {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    "@media (max-width: 1584px)": { // 2 in a row
      width: `calc((448px + 3rem) * 2)`,
    },
    "@media (max-width: 1088px)": { // 1 in a row
      width: `min(calc(448px + 3rem), calc(100% + 3rem))`,
    },
    "@media (max-width: 512px)": { // Minimum size
      width: "100%",
    }
  },
  friendColumn: {
    width: `calc(448px + 3rem)`,
    display: "flex",
    flexDirection: "column",

    "@media (max-width: 512px)": {
      width: "100%",
    }
  },
  friendCard: {
    // width: `min(448px, 100%)`,
    margin: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: "none !important",
  },
  friendCard_expanded: {
    margin: `${theme.spacing(3) + "px"}!important`,
    marginTop: `${theme.spacing(3) + "px"}!important`,
    marginBottom: `${theme.spacing(3) + "px"}!important`,
  },
  friendCardActionArea: {
    width: '100%',
  },
  friendCardTitle: {
    height: 96,
    backgroundColor: `${theme.palette.background.paper} !important`,
    boxShadow: `0 0 0 0 ${theme.palette.primary.main} !important`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1) !important",
    justifyContent: "flex-start",
    overflow: "hidden",

    "&:hover": {
      transform: 'translateY(-.5rem)',
      boxShadow: `.33rem 1rem 0 0 ${theme.palette.primary.main}, -.33rem 1rem 0 0 ${theme.palette.primary.main}, .33rem -.33rem 0 0 ${theme.palette.primary.main}, -.33rem -.33rem 0 0 ${theme.palette.primary.main} !important`,
    },
  },
  friendCardTitleContent: {
    display: 'flex',
    alignItems: 'center',
  },
  friendAvatar: {
    width: 69,
    height: 69,
    marginRight: theme.spacing(3),
    borderRadius: "50%",
    backgroundSize: "cover",
    flexShrink: 0,
  },
  friendDescrip: {
    padding: theme.spacing(2),
  },
  friendLink: {
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1) !important",

    "&:hover": {
      transform: 'translateY(-.2rem)',
      boxShadow: `0 .4rem 0 0 ${theme.palette.primary.main}`,
    }
  },

  footerWrapper: {
    margin: "0 auto",
    width: `calc((448px + 3rem) * 3)`, // 3 in a row

    "@media (max-width: 1584px)": { // 2 in a row
      width: `calc((448px + 3rem) * 2)`,
    },
    "@media (max-width: 1088px)": { // 1 in a row
      width: `min(calc(448px + 3rem), calc(100% + 3rem))`,
    },
    "@media (max-width: 512px)": { // Minimum size
      width: "100%",
    }
  }
}))