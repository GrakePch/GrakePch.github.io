import React, { useEffect } from "react";
import { CardActionArea, Tooltip, useTheme, withStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// MDI icons
import Icon from '@mdi/react';

// Data
import Glogo from "../../assets/G-logo/GKP-2111-black.svg";
import { globalVars } from "./globalVars";

const ColoredTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.primary.main,
  }
}))(Tooltip);

export default function LeftNav(props) {
  const theme = useTheme();
  const anchors = props.anchors;
  const history = useHistory();

  useEffect(() => {

    const onScroll = e => {
      navIndicatorUpdate();
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  })

  function navIndicatorUpdate() {
    if (!props.showIndicator) return;
    const halfViewPortHeight = 0.5 * (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);  // viewPortHeight for older browsers
    const indicator = document.getElementById("navIndicator");
    if (document.getElementById(anchors[1].id) &&
      document.getElementById(anchors[1].id).getBoundingClientRect().y > halfViewPortHeight) {
      indicator.style.top = 0;
    }
    for (let i = anchors.length - 1; i > 0; i--) {
      if (document.getElementById(anchors[i].id) &&
        document.getElementById(anchors[i].id).getBoundingClientRect().y <= halfViewPortHeight) {
        indicator.style.top = i * 48 + "px";
        break;
      }
    }
  }

  return (
    <div style={{
      position: "fixed",
      left: 8,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 199,
    }}>
      {anchors.map((item, index) =>
        <ColoredTooltip
          title={item.label}
          placement="right"
        >
          <CardActionArea
            style={{
              width: 48,
              height: 48,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
            width: 4,
            height: 48,
            top: 0,
            left: -8,
            backgroundColor: theme.palette.primary.main,
            transition: "top .2s cubic-bezier(.5,0,0,1)",
          }}
        ></div>
        :
        null
      }
    </div >
  )
}