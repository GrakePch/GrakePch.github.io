import React, { useEffect, useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { lightTheme, darkTheme } from "./assets/theme";
import ScrollToTop from "./scrollToTop";
import Index from "./pages/index";
import ProjCatePage from "./pages/projCatePage";
import ProjDetailPage from "./pages/projDetailPage";
import FloatSettings from "./pages/modules/floatSettings";
import LeftNav from "./pages/modules/leftNav";

// Data
import { globalVars } from "./pages/modules/globalVars";
import BottomNav from "./pages/modules/bottomNav";
import useWindowSize from "./pages/modules/viewportDimensions";
import NotFound from "./pages/notFound";
import { Redirect } from "react-router-dom";

// MDI icons
import { mdiAccountMultipleOutline, mdiArchiveOutline, mdiPageFirst } from "@mdi/js";


function App() {
  // Set Theme
  const [isThemeLight, setTheme] = useState(globalVars.isThemeLight);
  const themeToggle = () => {
    let newValue = !isThemeLight;
    setTheme(newValue);
    if (!window.localStorage) {
      alert("The browser does not support localstorage");
    } else {
      localStorage.setItem("isThemeLight", newValue);
    }
  }
  const theme = createTheme(isThemeLight ? lightTheme : darkTheme);
  globalVars.isThemeLight = isThemeLight;

  // Set Language
  // 0: English; 1: Simplified Chinese
  const [langId, setLangId] = useState(globalVars.langId);
  const langIdToggle = () => {
    let newValue = langId == 0 ? 1 : 0
    setLangId(newValue);
    if (!window.localStorage) {
      alert("The browser does not support localstorage");
    } else {
      localStorage.setItem("lang", newValue);
    }
  }
  globalVars.langId = langId;

  const [vw, vh] = useWindowSize();
  globalVars.vw = vw;
  globalVars.vh = vh;
  // globalVars.scrollY = useScrollPosition();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Index />
            {
              vw >= 600 ?
                <LeftNav anchors={anchors_index} showIndicator={true} />
                :
                <BottomNav themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId} anchors={anchors_index} showIndicator={true} />
            }
          </Route>
          <Route exact path="/c/:id">
            <ScrollToTop />
            <ProjCatePage />
            {
              vw >= 600 ?
                <LeftNav anchors={anchors_topBtm} />
                :
                <BottomNav themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId} anchors={anchors_topBtm} />
            }
          </Route>
          <Route exact path="/p/:id">
            <ScrollToTop />
            <ProjDetailPage />
            {
              vw >= 600 ?
                <LeftNav anchors={anchors_topBtm} />
                :
                <BottomNav themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId} anchors={anchors_topBtm} />
            }
          </Route>
          <Route exact path="/bpext">
            <Redirect to="/p/bpext" />
          </Route>
          <Route>
            <NotFound />
            {
              vw >= 600 ?
                <LeftNav anchors={anchors_logoOnly} />
                :
                <BottomNav themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId} anchors={anchors_logoOnly} />
            }
          </Route>
        </Switch>
        {
          vw >= 600 ?
            <>
              <FloatSettings themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId} />
            </>
            :
            null
        }
      </Router>
    </ThemeProvider>
  );
}

export default App;

const anchors_index = [
  {
    label: "Top",
    icon: "Grake",
  },
  {
    label: "Archived Projects",
    icon: mdiArchiveOutline,
    id: "anchor-projects",
  },
  {
    label: "Friends",
    icon: mdiAccountMultipleOutline,
    id: "anchor-friends",
  }
];

const anchors_topBtm = [
  {
    label: "Home",
    icon: "Grake",
  },
  {
    label: "Top",
    icon: mdiPageFirst,
    rotate: 90,
  },
  {
    label: "Footer",
    icon: mdiPageFirst,
    rotate: -90,
  },
];

const anchors_logoOnly = [
  {
    label: "Home",
    icon: "Grake",
  }
];
