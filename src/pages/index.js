import React, { useState } from "react";
import "./index/index.css";
import { useStyles } from "./index/indexStyles";
import { useStylesLogo } from "./index/indexLogoStyles";
import { useHistory } from "react-router";

import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
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

/*Data*/
import { projects } from "../assets/projects";
import noneIcon from "../assets/project-icons/none.svg";
import { friends } from "../assets/friends";
import { globalVars } from "./modules/globalVars";
import { useStylesWelcome } from "./index/indexWelcome";
import ProjCateShowcase from "./modules/projCateShowcase";
import GKPIconBlack from "../assets/G-logo/GKP-2111-black.svg";

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
  const logoSection = useStylesLogo(props);
  const welcomeCls = useStylesWelcome(props);
  const theme = useTheme();

  const showProjectList = ["twisty-puzzle-design", "midi-works", "star-citizen-contents"];

  const renderProjects = () => {
    let eleProjects = [];
    for (let i in showProjectList) {
      let k = showProjectList[i];
      let projInThisCategory = Object.keys(projects[k].children)
      eleProjects.push(
        <Card className={classes.cards} key={k}>
          <CardActionArea className={classes.cardsActionArea} onClick={() => routeChange(`/c/${k}`)}>
            <CardContent>
              <Typography variant="h4" align="center">
                {projects[k].title[globalVars.langList[globalVars.langId]]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ overflowX: "auto" }}>
            {projInThisCategory.map(key => (
              <Button
                style={{ padding: 0, flexShrink: 0 }}
                className={classes.cardsActionBtn}
                key={key}
                onClick={() => routeChange(`/p/${key}`)}
              >
                <div style={{
                  width: 80,
                  height: 80,
                  backgroundImage: `url(${projects[k].children[key].icon ?
                    projects[k].children[key].icon
                    :
                    noneIcon
                    })`,
                  backgroundSize: 60,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  filter: globalVars.isThemeLight ? "none" : "invert(1)"
                }}></div>
              </Button>
            ))}
          </CardActions>
        </Card>
      )
    }
    return eleProjects
  }

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
      <div className={welcomeCls.welcome_screen}>

        {/* <div className={welcomeCls.logo_bg}></div>

        <div className={welcomeCls.logo_main}>
          <div className={welcomeCls.logo_line_1}></div>
          <div className={welcomeCls.logo_line_2}></div>
          <div className={welcomeCls.logo_line_3}></div>
          <div className={welcomeCls.logo_line_4}></div>
          <div className={welcomeCls.logo_dot}></div>
        </div> */}

        <div className={welcomeCls.matrix_container}>
          {vh &&
            [...Array(Math.ceil(vh / 70)).keys()].map(i =>
              <div style={{ display: "flex", width: "100%", height: 70 }} key={i}>
                {
                  [...Array(Math.ceil(vw / 70)).keys()].map(j =>
                    <div className={welcomeCls.matrix_item} key={j}/>)
                }
              </div>
            )
          }
        </div>

        <div className={welcomeCls.mask_top}></div>
        <div className={welcomeCls.mask_right}></div>
        <div className={welcomeCls.mask_bottom}></div>
        <div className={welcomeCls.mask_left}></div>


      </div>

      <div className={welcomeCls.first_page_bg}></div>

      <div className={welcomeCls.second_page}>
        <Typography variant="h5" align="left"><span style={{color: theme.palette.primary.main}}>GrakePCH</span>, a Sol III native who loves to realize aesthetic creativity through computer technologies.</Typography>
      </div>

      <div style={{ position: "relative", backgroundColor: theme.palette.background.default, width: "100%", zIndex: 100 }}>
        <div className={classes.main} id="main">
          <div className={classes.section_projects} id="anchor-projects">
            <div style={{
              display: "flex",
              flexDirection: "column",
            }}>
              <ProjCateShowcase projCateId="minecraft-contents" margin="1.5rem" />
              <ProjCateShowcase projCateId="graphic-design" margin="1.5rem" />
            </div>
            <div style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}>
              {renderProjects()}
            </div>
          </div>
          <div className={classes.section_friends} id="anchor-friends">
            <div>
              {renderFriends()}
            </div>
          </div>
          <div className={classes.footerWrapper}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}