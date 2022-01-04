import React from "react";
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

/*Modules*/
import useWindowSize from "./modules/viewportDimensions";
import useScrollPosition from "./modules/scrollPosition";

/*Icons*/
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

/*Data*/
import { projects } from "../data/projects";
import noneIcon from "../assets/project-icons/none.svg";
import { friends } from "../data/friends";

export default function Index() {
  const history = useHistory();
  const routeChange = (path) => {
    history.push(path);
  }

  let lang = 0;
  const [vw, vh] = useWindowSize();
  const scrollPosY = useScrollPosition();

  const props = {
    vw: vw,
    vh: vh,
    scrollPosY: scrollPosY,
    logo_size: Math.max(100, Math.min(.2 * vw, .2 * vh)),
  }

  const classes = useStyles(props);
  const logoSection = useStylesLogo(props);

  const renderProjects = () => {
    let eleProjects = [];
    for (let k in projects) {
      let projInThisCategory = Object.keys(projects[k].children)
      eleProjects.push(
        <Card className={classes.cards} key={k}>
          <CardActionArea className={classes.cardsActionArea} onClick={() => routeChange(`/c/${k}`)}>
            <CardContent>
              <Typography variant="h5" align="center">
                {projects[k].title[lang]}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {projInThisCategory.map(key => (
              <Button style={{
                height: 80,
                width: 80,
                padding: 0,
                backgroundImage: `url(${projects[k].children[key].icon ?
                  projects[k].children[key].icon
                  :
                  noneIcon
                  })`,
                backgroundSize: 60,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
                className={classes.cardsActionBtn}
                key={key}
              ></Button>
            ))}
          </CardActions>
        </Card>
      )
    }
    return eleProjects
  }

  const renderFriendLinks = (link) => {
    const customIconList = ["bilibili"]

    if (!link[2]) { // Icon not found
      return (
        <Button
          variant="text"
          startIcon={<Icon size={1} path={mdiOpenInNew} />}
          href={link[1]}
          target="_blank"
          className={classes.friendLink}
          key={link[0]}
        >
          {link[0]}
        </Button>
      )
    } else if (customIconList.includes(link[0])) { // Custom Icon
      return (
        <Button
          variant="text"
          startIcon={<div style={{ backgroundImage: `url(${link[2]})`, backgroundSize: "cover", width: "1.5rem", height: "1.5rem" }} />}
          href={link[1]}
          target="_blank"
          className={classes.friendLink}
          key={link[0]}
        >
          {link[0]}
        </Button>
      )
    } else { // Icon in mdi lib
      return (
        <Button
          variant="text"
          startIcon={<Icon size={1} path={link[2]} />}
          href={link[1]}
          target="_blank"
          className={classes.friendLink}
          key={link[0]}
        >
          {link[0]}
        </Button>
      )
    }
  }

  const renderFriends = () => {
    let friendList = Object.keys(friends).sort();
    let eleFriend = [];

    let columnNum = 1;
    if (vw > 1919) {
      columnNum = 3;
    } else if (vw > 1258) {
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
                    <Typography variant="h5" style={{ flexGrow: 1 }}>{item}</Typography>
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
      <div className={logoSection.welcome_screen}>
        {/* <div className="welcome-logo-container">
          <div className="welcome-logo"></div>
          <h1 className="welcome-logo-word">
            <span className="G">G</span>
            <span className="r">r</span>
            <span className="a">a</span>
            <span className="k">k</span>
            <span className="e">e</span>
            PCH
          </h1>
        </div> */}

        <div className={logoSection.logo_main}>
          <div className={logoSection.logo_line_1}></div>
          <div className={logoSection.logo_line_2}></div>
          <div className={logoSection.logo_line_3}></div>
          <div className={logoSection.logo_line_4}></div>
          <div className={logoSection.logo_dot}></div>
        </div>

        <div className={logoSection.mask_top}></div>
        <div className={logoSection.mask_right}></div>
        <div className={logoSection.mask_bottom}></div>
        <div className={logoSection.mask_left}></div>

      </div>

      <div className={logoSection.first_page_bg}></div>

      <div className={logoSection.second_page}>
        <Typography variant="h3" align="center">Welcome to the website of GrakePCH</Typography>
      </div>

      <div className={classes.main}>
        <div className={classes.section_projects}>
          <div>
            {renderProjects()}
          </div>
        </div>
        <div className={classes.section_friends}>
          <div>
            {renderFriends()}
          </div>
        </div>
      </div>
    </>
  )
}