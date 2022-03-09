import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useStyles } from "./projDetailPage/projDetailPageStyles";

/*Data*/
// import { projects } from "../assets/projects";
import { Typography } from "@material-ui/core";
import getProject from "../assets/projects";
import { globalVars } from "./modules/globalVars";
import Footer from "./footer";

export default function ProjDetailPage(props) {
  const classes = useStyles(props);
  const { id } = useParams();
  const history = useHistory();

  const routeChange = (path) => {
    history.push(path);
  }

  const vw = globalVars.vw;
  const vh = globalVars.vh;

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
        <div className={classes.top_banner}>
          <Typography variant="body1">
            <Link to={`/c/${getProject(id).categ}`} className={classes.categLink}>{getProject(id).categTitle[globalVars.langList[globalVars.langId]]}</Link> /
          </Typography>
          <Typography variant="h4">
            {getProject(id).projInfo.title[globalVars.langList[globalVars.langId]]}
          </Typography>
          <div style={{
            position: "absolute",
            width: 60,
            height: 60,
            right: "2rem",
            bottom: "2rem",
            backgroundImage: `url(${getProject(id).projInfo.icon})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: globalVars.isThemeLight ? "none" : "invert(1)"
          }}></div>
        </div>
        {/* <img src={images[projs[id].cover]} alt={projs[id].cover} width="100%" style={{ marginBottom: "1rem" }} /> */}
        {
          projs[id].contents.map((item, index) => (
            <div className={classes.content_block} key={index} style={{
              flexDirection:
                vw >= 768 ? "row" : "column"
            }}>
              {
                item.texts ?
                  item.img ?
                    vw >= 768 ?
                      item.imgPositionLeft ?
                        <>
                          <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginRight: "2rem" }} />
                          <Typography>
                            {item.texts[globalVars.langList[globalVars.langId]]}
                          </Typography>
                        </>
                        :
                        <>
                          <Typography>
                            {item.texts[globalVars.langList[globalVars.langId]]}
                          </Typography>
                          <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginLeft: "2rem" }} />
                        </>
                      :
                      <>
                        <img src={images[item.img]} alt={item.img} width="100%" style={{ marginBottom: "2rem" }} />
                        <Typography>
                          {item.texts[globalVars.langList[globalVars.langId]]}
                        </Typography>
                      </>
                    :
                    <Typography>
                      {item.texts[globalVars.langList[globalVars.langId]]}
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
        <Footer marginRem={0} />
      </div>
    </>
  )
}
