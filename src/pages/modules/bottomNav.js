import React, { useEffect, useState } from "react";
import { CardActionArea, Tooltip, useTheme, withStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";

// MDI icons
import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness7, mdiCogOutline, mdiTranslate } from '@mdi/js';

// Data
import { globalVars } from "./globalVars";
import useScrollPosition from "./scrollPosition";
import Glogo from "../../assets/G-logo/GKP-2301-vector.svg";

const ColoredTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
  }
}))(Tooltip);

export default function BottomNav(props) {
  const theme = useTheme();
  const anchors = props.anchors;
  const [isSettingsOpen, setIsSettingOpen] = useState(false);
  const scrollPosY = useScrollPosition();
  const location = useLocation();
  const history = useHistory();

  const [dockAtTop, setDockAtTop] = useState(false);

  useEffect(() => {

    setDockAtTop(location.pathname == "/" || location.pathname.startsWith("/c/"));

    const onScroll = e => {
      navIndicatorUpdate();
      setIsSettingOpen(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [location])

  // Read theme from localStorage
  if (localStorage.getItem('isThemeLight') === 'false') {
    props.setTheme(false);
  }
  // Read language from localStorage
  if (localStorage.getItem('lang') === "1") {
    props.setLang(1);
  }

  function navIndicatorUpdate() {
    if (!props.showIndicator) return;
    const halfViewPortHeight = 0.5 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);  // viewPortHeight for older browsers
    const indicator = document.getElementById("navIndicator");
    if (document.getElementById(anchors[1].id) &&
      document.getElementById(anchors[1].id).getBoundingClientRect().y > halfViewPortHeight) {
      indicator.style.left = 0;
    }
    for (let i = anchors.length - 1; i > 0; i--) {
      if (document.getElementById(anchors[i].id) &&
        document.getElementById(anchors[i].id).getBoundingClientRect().y <= halfViewPortHeight) {
        indicator.style.left = i * 48 + "px";
        break;
      }
    }
  }


  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      width: "100%",
      height: 48,
      padding: "0 1.5rem",
      zIndex: 199,
    }}>
      <div style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: `#ece2c5cc`,
        transform:
          (dockAtTop && scrollPosY <= 0) || scrollPosY >= document.body.offsetHeight - globalVars.vh ?
            'translateY(0)' : 'translateY(-.2rem)',
        boxShadow:
          (dockAtTop && scrollPosY <= 0) || scrollPosY >= document.body.offsetHeight - globalVars.vh ?
            "0 0 0 0 rgba(0,0,0,.15)" : "0 .4rem 0 0 rgba(0,0,0,.15)",
        transition: "transform .2s cubic-bezier(.5,0,0,1), box-shadow .2s cubic-bezier(.5,0,0,1)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
      }}>

        {/* Anchors */}
        {anchors.map((item, index) =>
          <ColoredTooltip
            title={item.label}
            placement="top"
          >
            <CardActionArea
              style={{
                width: 48,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: isSettingsOpen ? 0 : 1,
                transition: `opacity ${(isSettingsOpen ? .1 : .5) +
                  (isSettingsOpen ? anchors.length - index - 1 : index) * .2
                  }s cubic-bezier(.5,0,0,1)`, // Appear and disappear in order
              }}
              onClick={() =>
                item.id ?
                  document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' })
                  :
                  item.label == "Home" ?
                    history.push("/")
                    :
                    item.label == "Top" ?
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      :
                      window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' })
              }
            >
              {item.icon == "Grake" ?
                <div style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: item.icon == "Grake" ? `url(${Glogo})` : "none",
                  backgroundSize: 20,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  filter: globalVars.isThemeLight ? "none" : "invert(1)",
                }}></div>
                :
                <Icon size={1} path={item.icon} rotate={item.rotate ? item.rotate : 0} />
              }
            </CardActionArea>
          </ColoredTooltip>
        )}
        {props.showIndicator ?
          <div
            id="navIndicator"
            style={{
              position: "absolute",
              width: 48,
              height: isSettingsOpen ? 0 : 4,
              bottom: 0,
              left: 0,
              backgroundColor: theme.palette.primary.main,
              transition: `left .2s cubic-bezier(.5,0,0,1), height ${(isSettingsOpen ? .2 : .5)}s cubic-bezier(.5,0,0,1)`, // Appear and disappear in order
            }}
          ></div>
          :
          null
        }

        {/* Settings */}
        <div style={{
          display: "flex",
          position: "absolute",
          left: isSettingsOpen ? 0 : "calc(100% - 48px)",
          transition: "left .5s cubic-bezier(.5,0,0,1)",
          width: "100%",
        }}>
          <CardActionArea
            style={{
              width: 48,
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => setIsSettingOpen(!isSettingsOpen)}
          >
            <Icon size={1} path={mdiCogOutline}
              style={{
                transform: isSettingsOpen ? "rotate(-210deg)" : "rotate(0)",
                transition: "transform .5s cubic-bezier(.5,0,0,1)",
              }}
            />
          </CardActionArea>
          <div style={{
            backgroundColor: theme.palette.background.invert,
            color: theme.palette.background.default,
            display: "flex",
            width: "calc(100% - 48px)"
          }}>

            <CardActionArea
              style={{
                width: 48,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => props.themeToggle()}
            >
              <Icon size={1} path={globalVars.isThemeLight ? mdiBrightness4 : mdiBrightness7} />
            </CardActionArea>
            <CardActionArea
              style={{
                width: 48,
                height: 48,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => props.langToggle()}
            >
              <Icon size={1} path={mdiTranslate} />
            </CardActionArea>
          </div>
        </div>
      </div>
    </div>
  )
}