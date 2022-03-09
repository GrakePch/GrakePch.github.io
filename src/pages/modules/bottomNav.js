import React, { useEffect, useState } from "react";
import { CardActionArea, useTheme } from "@material-ui/core";

// MDI icons
import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness7, mdiCogOutline, mdiTranslate } from '@mdi/js';

// Data
import { globalVars } from "./globalVars";
import useScrollPosition from "./scrollPosition";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function BottomNav(props) {
  const theme = useTheme();
  const [isSettingsOpen, setIsSettingOpen] = useState(false);
  const scrollPosY = useScrollPosition();
  const location = useLocation();

  const [dockAtTop, setDockAtTop] = useState(false);

  useEffect(() => {

    setDockAtTop(location.pathname == "/" || location.pathname.startsWith("/c/"));

    const onScroll = e => {
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

  return (
    <div style={{
      position: "fixed",
      bottom: "1.5rem",
      width: "100%",
      height: 48,
      padding: "0 1.5rem",
      zIndex: 99,
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: `${theme.palette.background.paper}cc`,
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