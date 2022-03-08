import React from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import { useStyles } from "./projCatePage/projCatePageStyles";
import useWindowSize from "./modules/viewportDimensions";

/*Data*/
import { projects } from "../assets/projects";
import noneIcon from "../assets/project-icons/none.svg";
import { globalVars } from "./modules/globalVars";
import Footer from "./footer";

export default function ProjCatePage(props) {
  const classes = useStyles(props);
  const { id } = useParams();
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

  const [vw, vh] = useWindowSize();

  // Check path validation
  let projCateList = Object.keys(projects);
  if (!(projCateList.includes(id))) {
    history.replace("/404")
    return (<></>);
  }

  // Get projects in this categories
  let projectsInThisCategory = Object.keys(projects[id].children);


  return (
    <>
      <div className={classes.welcome_screen}>
        <div>
          <Typography variant="h3" align="center" style={{ fontWeight: 600 }}>{projects[id].title[globalVars.langList[globalVars.langId]]}</Typography>
        </div>
      </div>
      <div className={classes.main} id="main">
        {
          projectsInThisCategory.map(key => (
            <Card className={classes.cards} key={key}>
              <CardActionArea className={classes.cardActionArea} onClick={() => routeChange(`/p/${key}`)}>
                <CardMedia
                  className={classes.cardMedia}
                  style={{
                    backgroundImage: `url(${projects[id].children[key].cover})`
                  }}
                />
                <CardContent className={classes.cardContent}>
                  <div style={{
                    width: 60,
                    height: 60,
                    flexShrink: 0,
                    margin: vw > 1088? ".5rem 0 1rem 0" : "0 .5rem 0 1rem",
                    backgroundImage: `url(${projects[id].children[key].icon ?
                      projects[id].children[key].icon
                      :
                      noneIcon
                      })`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    filter: globalVars.isThemeLight ? "none" : "invert(1)"
                  }}></div>
                  <div style={{flexGrow: 1}}>
                    <Typography variant={vw >= 1400 || vw <= 1088 ? "h4" : "h5"}>
                      {projects[id].children[key].title[globalVars.langList[globalVars.langId]]}
                    </Typography>
                    <Typography variant={vw >= 1400 || vw <= 1088 ? "subtitle1" : "subtitle2"}>
                      {projects[id].children[key].date[0]} / {projects[id].children[key].date[1]}
                    </Typography>
                    {
                      projects[id].children[key].intro ?
                        <Typography variant={vw >= 1400 || vw <= 1088 ? "body1" : "body2"}>
                          {projects[id].children[key].intro[globalVars.langList[globalVars.langId]]}
                        </Typography>
                        :
                        <>
                        </>
                    }
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
        
        <Footer />
      </div>
    </>
  );
}