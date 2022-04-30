import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useStyles } from "./projDetailPage/projDetailPageStyles";
// import { projects } from "../assets/projects";
import { Button, Typography } from "@material-ui/core";
import Icon from '@mdi/react';
import Footer from "./footer";
import clsx from 'clsx';

/*Data*/
import getProject from "../assets/projects";
import { globalVars } from "./modules/globalVars";
import { iconTable } from "../assets/project-details/iconTable";

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

  const renderText = (item) => (
    <Typography
      variant={item.variant ? item.variant : "body1"}
      align={item.align ? item.align : "inherit"}>
      {item.texts[globalVars.langList[globalVars.langId]].split("\n").map((str, index) => (
        index == 0 ?
          str
          :
          <><br /> {str}</>
      ))}
    </Typography>
  );

  const renderLinks = (links, isLinkStacked) => {
    return (<>{links ?
      <div style={{
        display: "flex",
        flexDirection: isLinkStacked ? "column" : "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem"
      }}>
        {
          links.map((item, index) => (
            <Button
              variant="text"
              startIcon={
                !iconTable._customIcons.includes(item[2]) ?
                  <Icon size={1} path={iconTable[item[2]]} />
                  :
                  <div style={{
                    backgroundImage: `url(${iconTable[item[2]]})`,
                    backgroundSize: "cover",
                    width: "1.5rem",
                    height: "1.5rem",
                    filter: globalVars.isThemeLight ? "none" : "invert(1)"
                  }} />
              }
              href={process.env.PUBLIC_URL + item[1]}
              target="_blank"
              className={clsx(classes.friendLink, isLinkStacked ? classes.friendLinkStacked : classes.friendLinkRow)}
              key={item[0]}
            >
              {item[0][globalVars.langList[globalVars.langId]]}
            </Button>
          ))
        }
      </div>
      :
      <></>
    }</>)
  }

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
                          <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginRight: "2rem", backgroundColor: item.imgBgColor ? item.imgBgColor : "auto" }} />
                          <div style={{ flexGrow: 1 }}>
                            {renderText(item)}
                            {renderLinks(item.links, item.isLinkStacked)}
                          </div>
                        </>
                        :
                        <>
                          <div style={{ flexGrow: 1 }}>
                            {renderText(item)}
                            {renderLinks(item.links, item.isLinkStacked)}
                          </div>
                          <img src={images[item.img]} alt={item.img} style={{ width: "calc(50% - 1rem)", marginLeft: "2rem", backgroundColor: item.imgBgColor ? item.imgBgColor : "auto" }} />
                        </>
                      :
                      <>
                        <img src={images[item.img]} alt={item.img} width="100%" style={{ marginBottom: "2rem", backgroundColor: item.imgBgColor ? item.imgBgColor : "auto" }} />
                        <div style={{ flexGrow: 1 }}>
                          {renderText(item)}
                          {renderLinks(item.links, item.isLinkStacked)}
                        </div>
                      </>
                    :
                    <div style={{ flexGrow: 1 }}>
                      {renderText(item)}
                      {renderLinks(item.links, item.isLinkStacked)}
                    </div>
                  :
                  item.img ?
                    <div style={{ flexGrow: 1 }}>
                      <img src={images[item.img]} alt={item.img} style={{ width: "100%", backgroundColor: item.imgBgColor ? item.imgBgColor : "auto" }} />
                      {renderLinks(item.links, item.isLinkStacked)}
                    </div>
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
