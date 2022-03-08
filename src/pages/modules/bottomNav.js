import React, { useEffect, useState } from "react";
import { CardActionArea, useTheme } from "@material-ui/core";

// MDI icons
import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness7, mdiCogOutline, mdiTranslate } from '@mdi/js';

// Data
import { globalVars } from "./globalVars";

export default function BottomNav(props) {
  const theme = useTheme();
  const [isSettingsOpen, setIsSettingOpen] = useState(false);

  useEffect(() => {


    const onScroll = e => {
      // if (noShadowAtTop) {
      //   if (window.pageYOffset <= 0) {
      //     setNoShadow(true);
      //   } else {
      //     setNoShadow(false);
      //   }
      // }
      // console.log(window.pageYOffset);
      setIsSettingOpen(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  })

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
      // overflow: "hidden",
      padding: "0 1.5rem",
      zIndex: 99,
    }}>
      <div style={{
        width: "100%",
        height: "100%",
        backgroundColor: `${theme.palette.background.paper}cc`,
        boxShadow: "0 .4rem 0 0 rgba(0,0,0,.15)",
        backdropFilter: "blur(10px)",
      }}>

      </div>
    </div>
  )
}