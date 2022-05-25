import React, { useState } from "react";
import { Button, CardActionArea, IconButton, Typography, useTheme } from "@material-ui/core";
import { ArrowForward, ChevronLeft, ChevronRight } from "@material-ui/icons";

/*Data*/
import { projects } from "../../assets/projects";
import noneIcon from "../../assets/project-icons/none.svg";
import { globalVars } from "./globalVars";
import { useHistory } from "react-router";


export default function ProjCateShowcase(props) {
  const theme = useTheme();
  const history = useHistory();
  const thisProjCate = projects[props.projCateId];
  const keysInThisProjCate = Object.keys(thisProjCate.children);
  const [previewProjIndex, setPreviewProjIndex] = useState(0);

  return (
    <div style={{
      color: theme.palette.background.default,
      backgroundColor: theme.palette.background.invert,
      margin: props.margin ? props.margin : 0,
    }}>
      <CardActionArea style={{
        width: "100%",
        padding: "1.5rem",
        paddingTop: "2rem",
        display: "flex",
        justifyContent: "space-between"
      }}
        onClick={() => history.push(`/c/${props.projCateId}`)}>
        <Typography variant="h4">
          {thisProjCate.title[globalVars.langList[globalVars.langId]]}
        </Typography>
        <Button disableRipple color="inherit" endIcon={<ArrowForward />} style={{ flexShrink: 0 }}>See All</Button>
      </CardActionArea>
      <div className="noScrollBar" style={{
        display: "flex",
        padding: ".5rem",
        width: "100%",
        overflowX: "scroll",
        overflowY: "hidden",
      }}>
        {keysInThisProjCate.sort((a, b) =>
          ((thisProjCate.children[b].date ? thisProjCate.children[b].date[0] : 0)
            -
            (thisProjCate.children[a].date ? thisProjCate.children[a].date[0] : 0)) * 100
          +
          ((thisProjCate.children[b].date ? thisProjCate.children[b].date[1] : 0)
            -
            (thisProjCate.children[a].date ? thisProjCate.children[a].date[1] : 0))).map((key, index) => (
              <div style={{
                position: "relative",
                marginLeft: index > 0 ? ".5rem" : 0,
              }}>
                <CardActionArea
                  key={key}
                  onClick={() => history.push(`/p/${key}`)}
                  onMouseEnter={() => setPreviewProjIndex(index)}
                  style={{
                    width: "max-content",
                    transform: keysInThisProjCate[previewProjIndex] == key ? "translateY(-0.3rem)" : null,
                    transition: "transform .2s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
                  }}>
                  <div style={{
                    width: 80,
                    height: 80,
                    backgroundImage: `url(${thisProjCate.children[key].icon
                      ? thisProjCate.children[key].icon
                      : noneIcon
                      })`,
                    backgroundSize: 60,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    filter: !globalVars.isThemeLight ? "none" : "invert(1)"
                  }}></div>
                </CardActionArea>
                <div style={{
                  position: "absolute",
                  width: 25,
                  height: 25,
                  transform: `translate(-50%, 100%) scale(1, ${keysInThisProjCate[previewProjIndex] == key ? 1 : 0}) rotate(45deg)`,
                  transformOrigin: "center",
                  bottom: 0,
                  left: "50%",
                  backgroundColor: theme.palette.background.paper,
                  transition: "all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28)",
                }}></div>
              </div>
            ))}
      </div>
      <div style={{
        display: "flex",
        flexDirection: globalVars.vw > 1088 ? "row" : "column",
        width: "100%",
        padding: globalVars.vw > 1088 ? "1.5rem" : "1rem",
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
      }}>
        <div style={{
          flexShrink: 0,
          width: globalVars.vw > 1088 ? "75%" : "100%",
          aspectRatio: "16 / 9",
          marginRight: globalVars.vw > 1088 ? "1.5rem" : 0,
          marginBottom: globalVars.vw > 1088 ? 0 : "1.5rem",
          backgroundImage: `url(${thisProjCate.children[keysInThisProjCate[previewProjIndex]].cover})`,
          backgroundSize: thisProjCate.children[keysInThisProjCate[previewProjIndex]].coverSize ? thisProjCate.children[keysInThisProjCate[previewProjIndex]].coverSize : "cover",
          backgroundColor: "#fff",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          {
            globalVars.vw > 1088
              ?
              <div style={{ position: "relative", marginBottom: "1rem" }}>
                <Typography variant={globalVars.vw > 1584 ? "h1" : "h2"} style={{ lineHeight: 1 }}>
                  {thisProjCate.children[keysInThisProjCate[previewProjIndex]].date
                    ? thisProjCate.children[keysInThisProjCate[previewProjIndex]].date[0]
                    : "2XXX"}
                </Typography>
                <Typography variant={globalVars.vw > 1584 ? "h1" : "h2"} align="right" style={{ lineHeight: 1 }}>
                  {thisProjCate.children[keysInThisProjCate[previewProjIndex]].date
                    ? thisProjCate.children[keysInThisProjCate[previewProjIndex]].date[1]
                    : "X"}
                </Typography>
                <div style={{
                  position: "absolute",
                  right: 0,
                  top: 0,
                  width: 2,
                  height: "120%",
                  backgroundColor: theme.palette.text.primary,
                  transformOrigin: "top",
                  transform: "rotate(45deg)",
                  marginTop: "5%"
                }}></div>
              </div>
              :
              <div style={{ display: "flex", alignItems: "center", justifyContent: "end", marginBottom: "1rem" }}>

                <IconButton
                  color="inherit"
                  size="small"
                  style={{ borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.background.invert + "80", marginRight: "1rem" }}
                  onClick={() => setPreviewProjIndex((previewProjIndex - 1 + keysInThisProjCate.length) % keysInThisProjCate.length)}
                ><ChevronLeft /></IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  style={{ borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.background.invert + "80" }}
                  onClick={() => setPreviewProjIndex((previewProjIndex + 1) % keysInThisProjCate.length)}
                ><ChevronRight /></IconButton>
                <div style={{ flexGrow: 1 }}></div>

                <Typography variant="h4" style={{ lineHeight: 1, fontWeight: 200 }}>
                  {thisProjCate.children[keysInThisProjCate[previewProjIndex]].date
                    ? thisProjCate.children[keysInThisProjCate[previewProjIndex]].date[0]
                    : "2XXX"}
                </Typography>
                <div style={{ position: "relative", width: "2rem", aspectRatio: "1 / 1" }}>
                  <div style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    width: 2,
                    height: "120%",
                    backgroundColor: theme.palette.text.primary,
                    transformOrigin: "top",
                    transform: "rotate(45deg)",
                    marginTop: "5%",
                    marginRight: "3%"
                  }}></div>
                </div>
                <Typography variant="h4" align="right" style={{ lineHeight: 1, fontWeight: 200 }}>
                  {thisProjCate.children[keysInThisProjCate[previewProjIndex]].date
                    ? thisProjCate.children[keysInThisProjCate[previewProjIndex]].date[1]
                    : "X"}
                </Typography>
              </div>
          }
          <Typography variant="h4" style={{marginBottom: ".5rem"}}>
            {thisProjCate.children[keysInThisProjCate[previewProjIndex]].title[globalVars.langList[globalVars.langId]]}
          </Typography>
          {
            thisProjCate.children[keysInThisProjCate[previewProjIndex]].intro &&
            <Typography variant="body1">
              {thisProjCate.children[keysInThisProjCate[previewProjIndex]].intro[globalVars.langList[globalVars.langId]]}
            </Typography>
          }
          <div style={{ flexGrow: 1 }}></div>
          <div style={{ display: "flex", justifyContent: "end", paddingTop: "1rem", alignItems: "center" }}>
            {
              globalVars.vw > 1088 && <>
                <IconButton
                  color="inherit"
                  size="small"
                  style={{ borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.background.invert + "80", marginRight: "1rem" }}
                  onClick={() => setPreviewProjIndex((previewProjIndex - 1 + keysInThisProjCate.length) % keysInThisProjCate.length)}
                ><ChevronLeft /></IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  style={{ borderWidth: 1, borderStyle: "solid", borderColor: theme.palette.background.invert + "80" }}
                  onClick={() => setPreviewProjIndex((previewProjIndex + 1) % keysInThisProjCate.length)}
                ><ChevronRight /></IconButton>
                <div style={{ flexGrow: 1 }}></div>
              </>
            }
            <Button variant="text" color="inherit" endIcon={<ArrowForward />}
              onClick={() => history.push(`/p/${keysInThisProjCate[previewProjIndex]}`)}>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};