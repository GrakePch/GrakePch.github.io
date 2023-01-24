import React from "react";
import { Button, makeStyles, Typography, useTheme } from "@material-ui/core";

import GKPIconBlack from "../assets/G-logo/GKP-2301-vector.svg";
import bilibiliIcon from "../assets/svgs/bilibili.svg";

import Icon from '@mdi/react';
import { mdiEmail, mdiGithub, mdiTwitter } from "@mdi/js";
import { globalVars } from "./modules/globalVars";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer_main: {
    display: "flex",
    flexDirection: "column",
    minHeight: '20rem',
    width: "calc(100% - 3rem)",
    margin: "0 auto",
    marginTop: theme.spacing(12),
    padding: "2rem",
    paddingBottom: globalVars.vw >= 600 ? "auto" : "calc(48px + 3rem)",
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  linksContainer: {
    width: "100%",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    "& > *:not(:first-child)": {
      marginLeft: theme.spacing(1),
    }
  },
  linkBtn: {
    boxShadow: `0 0 0 0 ${theme.palette.primary.main}`,
    transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1) !important",

    "&:hover": {
      transform: 'translateY(-.2rem)',
      boxShadow: `0 .4rem 0 0 ${theme.palette.primary.main}`,
    }
  }
}))

export default function Footer(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const history = useHistory();

  const vw = globalVars.vw;
  const vh = globalVars.vh;

  return (
    <div className={classes.footer_main}
      style={{
        width: props.marginRem ?
          "calc(100% - 3rem)" :
          `calc(100% - ${props.marginRem}rem)`
      }}>
      <div style={{
        width: "4rem",
        height: "4rem",
        cursor: "pointer",
        flexShrink: 0,
        backgroundImage: `url(${GKPIconBlack})`,
        backgroundSize: "4rem",
        backgroundRepeat: "no-repeat",
        marginBottom: "1rem",
        filter: globalVars.isThemeLight ? "none" : "invert(1)"
      }}
        onClick={() => history.push("/")}
      ></div>
      <Typography variant="h5">GrakePCH © 2017-2022</Typography>
      <Typography variant="subtitle1">grakep.ch</Typography>

      <div style={{ flexGrow: 1, minHeight: "2rem" }}></div>

      {
        vw >= 768 ?
          <div className={classes.linksContainer}>
            <Button
              variant="text"
              startIcon={<Icon size={1} path={mdiEmail} />}
              href="mailto:grakepch@gmail.com"
              target="_blank"
              className={classes.linkBtn}
            >
              Email
            </Button>
            <Button
              variant="text"
              startIcon={<Icon size={1} path={mdiGithub} />}
              href="https://github.com/GrakePch"
              target="_blank"
              className={classes.linkBtn}
            >
              Github
            </Button>
            <Button
              variant="text"
              startIcon={<Icon size={1} path={mdiTwitter} />}
              href="https://twitter.com/Grake_Pch"
              target="_blank"
              className={classes.linkBtn}
            >
              Twitter
            </Button>
            <Button
              variant="text"
              startIcon={<div style={{
                backgroundImage: `url(${bilibiliIcon})`,
                backgroundSize: "cover",
                width: "1.5rem",
                height: "1.5rem",
                filter: globalVars.isThemeLight ? "none" : "invert(1)"
              }} />}
              href="https://space.bilibili.com/1020137"
              target="_blank"
              className={classes.linkBtn}
            >
              Bilibili
            </Button>
          </div>
          :
          <div className={classes.linksContainer} style={{justifyContent: "center"}}>
            <Button
              variant="text"
              href="mailto:grakepch@gmail.com"
              target="_blank"
              className={classes.linkBtn}
            >
              <Icon size={1} path={mdiEmail} />
            </Button>
            <Button
              variant="text"
              href="https://github.com/GrakePch"
              target="_blank"
              className={classes.linkBtn}
            >
              <Icon size={1} path={mdiGithub} />
            </Button>
            <Button
              variant="text"
              href="https://twitter.com/Grake_Pch"
              target="_blank"
              className={classes.linkBtn}
            >
              <Icon size={1} path={mdiTwitter} />
            </Button>
            <Button
              variant="text"
              href="https://space.bilibili.com/1020137"
              target="_blank"
              className={classes.linkBtn}
            >
              <div style={{
                backgroundImage: `url(${bilibiliIcon})`,
                backgroundSize: "cover",
                width: "1.5rem",
                height: "1.5rem",
                filter: globalVars.isThemeLight ? "none" : "invert(1)"
              }} />
            </Button>
          </div>
      }
    </div>
  )
}