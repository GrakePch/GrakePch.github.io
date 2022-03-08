import React, { useEffect, useState } from "react";
import { CardActionArea, useTheme } from "@material-ui/core";

// MDI icons
import Icon from '@mdi/react';
import { mdiBrightness4, mdiBrightness7, mdiCogOutline, mdiTranslate } from '@mdi/js';

// Data
import { globalVars } from "./globalVars";

export default function FloatSettings(props) {
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
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      height: isSettingsOpen ? 48 * 3 : 48,
      overflow: "hidden",
      transition: "height .2s cubic-bezier(.5,0,0,1)",
      zIndex: 99,
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
            transform: isSettingsOpen ? "rotate(210deg)" : "rotate(0)",
            transition: "transform .2s cubic-bezier(.5,0,0,1)",
          }}
        />
      </CardActionArea>
      <div style={{ backgroundColor: theme.palette.background.invert, color: theme.palette.background.default }}>
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
  )
}