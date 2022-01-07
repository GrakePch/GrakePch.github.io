import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useStyles } from "./projDetailPage/projDetailPageStyles";

/*Data*/
import { projects } from "../assets/projects";
import { Typography } from "@material-ui/core";
import getProject from "../assets/projects";

export default function ProjDetailPage(props) {
  const classes = useStyles(props);
  const { id } = useParams();
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

  let lang = "en";

  const projs = function (r) {
    let k = r.keys()
    let l = r.keys().map(r);
    let d = {}
    for (let i = 0; i < l.length; i++) {
      d[k[i].replace(/^.*[\\/]/, '').replace(/\.json$/, '')] = l[i]
    }
    return d
  }(require.context('../assets/project-details/', false, /\.json$/))

  // Check path validation
  if (!projs[id]) {
    history.replace("/404")
    return (<></>)
  }

  const images = function (r) {
    let k = r.keys()
    let l = r.keys().map(r);
    let d = {}
    for (let i = 0; i < l.length; i++) {
      d[k[i].replace(/^.*[\\/]/, '').replace(/\.(png|jpe?g|svg|JPE?G)$/, '')] = l[i].default
    }
    return d
  }(require.context('../assets/project-images/', true, /\.(png|jpe?g|svg|JPE?G)$/));

  return (
    <>
      <div className={classes.main} id="main">
        <div className={classes.top_banner} style={{backgroundImage: `url(${getProject(id).projInfo.icon})`}}>
          <Typography variant="body1">
            <Link to={`/c/${getProject(id).categ}`} className={classes.categLink}>{getProject(id).categTitle[lang]}</Link> /
          </Typography>
          <Typography variant="h4">
            {getProject(id).projInfo.title[lang]}
          </Typography>
        </div>
        {/* <img src={images[projs[id].cover]} alt={projs[id].cover} width="100%" style={{ marginBottom: "1rem" }} /> */}
        {
          projs[id].contents.map((item, index) => (
            <div className={classes.content_block} key={index}>
              {
                item.texts ?
                  item.img ?
                    item.imgPositionLeft ?
                      <>
                        <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginRight: "2rem" }} />
                        <Typography>
                          {item.texts}
                        </Typography>
                      </>
                      :
                      <>
                        <Typography>
                          {item.texts}
                        </Typography>
                        <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginLeft: "2rem" }} />
                      </>
                    :
                    <Typography>
                      {item.texts}
                    </Typography>
                  :
                  item.img ?
                    <img src={images[item.img]} alt={item.img} width="100%" />
                    :
                    <></>
              }
            </div>
          ))
        }
      </div>
    </>
  )
}
