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

/*Data*/
import { projects } from "../data/projectCategories";
import noneIcon from "../assets/project-icons/none.svg";

export default function ProjCatePage(props) {
  const classes = useStyles(props);
  const { id } = useParams();
  const history = useHistory();

  // Check path validation
  let projCateList = Object.keys(projects);
  if (!(projCateList.includes(id))) {
    history.push("/404")
    return (<></>);
  }

  // Get projects in this categories
  let projectsInThisCategory = Object.keys(projects[id].children);


  return (
    <>
      <div className={classes.welcome_screen}>
        <div>
          <Typography variant="h3" align="center">{projects[id].title[0]}</Typography>
        </div>
      </div>
      <div className={classes.main}>
        {
          projectsInThisCategory.map(key => (
            <Card className={classes.cards} key={key}>
              <CardActionArea className={classes.cardActionArea}>
                <CardMedia
                  className={classes.cardMedia}
                  style={{
                    backgroundImage: `url(${projects[id].children[key].cover})`
                  }}
                  component="img" />
                <CardContent className={classes.cardContent} style={{
                  backgroundImage: `url(${projects[id].children[key].icon ?
                    projects[id].children[key].icon
                    :
                    noneIcon
                    })`
                }}>
                  <Typography variant="h5" style={{ fontSize: "1.625rem" }}>
                    {projects[id].children[key].title[0]}
                  </Typography>
                  <Typography variant="subtitle1">
                    {projects[id].children[key].date[0]} / {projects[id].children[key].date[1]}
                  </Typography>
                  {
                    projects[id].children[key].intro ?
                      <Typography variant="body2">
                        {projects[id].children[key].intro}
                      </Typography>
                      :
                      <>
                      </>
                  }
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        }
      </div>
    </>
  );
}