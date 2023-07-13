import React, { useState } from "react";
import "./index/index.css";
import { useStyles } from "./index/indexStyles";
import { useHistory } from "react-router";

import {
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Divider,
} from '@material-ui/core/';
import { useTheme } from "@material-ui/styles";

/*Modules*/
import Footer from "./footer";
import useScrollPosition from "./modules/scrollPosition";

/*Icons*/
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';
import GKPLogo from '../assets/G-logo/GKP-2305-cut-cropToLogo.png';

/*Data*/
import { friends } from "../assets/friends";
import { globalVars } from "./modules/globalVars";
import ProjCateShowcase from "./modules/projCateShowcase";

export default function Index() {
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  }

  const vw = globalVars.vw;
  const vh = globalVars.vh;
  const scrollPosY = useScrollPosition();
  const [t_hours, setTHours] = useState(0);
  const [t_mins, setTMins] = useState(0);

  const props = {
    vw: vw,
    vh: vh,
    scrollPosY: scrollPosY,
    logo_unit: Math.max(100, Math.min(.2 * vw, .2 * vh)) / 1400,
    t_hours: t_hours,
    t_mins: t_mins,
  }

  setTimeout(() => {
    let date = new Date();
    setTHours(date.getHours())
    setTMins(date.getMinutes())
  }, 500);

  const classes = useStyles(props);
  const theme = useTheme();

  const showProjectList = [
    "minecraft-contents",
    "star-citizen-contents",
    "graphic-design",
    "twisty-puzzle-design",
    "midi-works",
  ];

  const renderFriendLinks = (link) => {
    const customIconList = ["bilibili"]
    return (
      <Button
        variant="text"
        startIcon={
          !link[2] ? // Icon not found
            <Icon size={1} path={mdiOpenInNew} />
            :
            customIconList.includes(link[0]) ? // Custom Icon
              <div style={{
                backgroundImage: `url(${link[2]})`,
                backgroundSize: "cover",
                width: "1.5rem",
                height: "1.5rem",
                filter: globalVars.isThemeLight ? "none" : "invert(1)"
              }} />
              : // Icon in mdi lib
              <Icon size={1} path={link[2]} />
        }
        href={link[1]}
        target="_blank"
        className={classes.friendLink}
        key={link[0]}
      >
        {link[0]}
      </Button>
    )
  }


  const renderFriends = () => {
    let friendList = Object.keys(friends).sort();
    let eleFriend = [];

    let columnNum = 1;
    if (vw > 1584) {
      columnNum = 3;
    } else if (vw > 1088) {
      columnNum = 2;
    }

    let currectCol = [];

    for (let c = 0; c < columnNum; c++) {
      currectCol = [];
      for (let index = c; index < friendList.length; index += columnNum) {
        currectCol.push(friendList[index])
      }
      eleFriend.push(currectCol);
    }

    return (<>
      {
        eleFriend.map((col, index) => (
          <div className={classes.friendColumn} key={col[0] + index.toString()}>
            {
              col.map(item => (
                <Accordion classes={{ root: classes.friendCard, expanded: classes.friendCard_expanded }} key={item}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    classes={{ root: classes.friendCardTitle, content: classes.friendCardTitleContent }}
                    disableRipple={false}
                  >
                    <div className={classes.friendAvatar} style={{ backgroundImage: `url(${friends[item].avatar})` }}></div>
                    <Typography variant="h5" style={{ flexGrow: 1, fontWeight: 600 }}>{item}</Typography>
                  </AccordionSummary>
                  <Divider />
                  {
                    friends[item].descrip ?
                      <AccordionDetails className={classes.friendDescrip}>
                        <Typography>{friends[item].descrip}</Typography>
                      </AccordionDetails>
                      :
                      <></>
                  }
                  <AccordionActions>
                    {
                      friends[item].links.map(link => renderFriendLinks(link))
                    }
                  </AccordionActions>
                </Accordion>
              ))
            }
          </div>
        ))
      }
    </>)
  }

  return (
    <>
      <div className="welcomePage">
        <div className="logoCard">
          <div className="logo" style={{ backgroundImage: `url(${GKPLogo})` }}></div>
          <div className="logoCard-content">
            <h1>GrakePCH</h1>
            <h3>A Sol III native who loves to realize aesthetic creativity through computer technologies.</h3>
          </div>
        </div>

      </div>

      <div
        className="bodyPage"
        style={{ backgroundColor: theme.palette.background.default }}
      >
        <div
          className="sectionAllProjects"
          id="anchor-projects"
          style={{ padding: vw >= 600 ? 64 : "1.5rem" }}
        >
          <div style={{
            display: "flex",
            flexDirection: "column",
          }}>
            {showProjectList.map(key => <ProjCateShowcase projCateId={key} key={key} />)}
          </div>
        </div>
        <div className={classes.main} id="main">
          <div className={classes.section_friends} id="anchor-friends">
            <div>
              {renderFriends()}
            </div>
          </div>
          <div className={classes.footerWrapper}>
            <Footer />
          </div>
        </div>
      </div >
    </>
  )
}