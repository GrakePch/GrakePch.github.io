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
import Footer from "./pages/footer";
import FloatSettings from "./pages/modules/floatSettings";


function App() {
  // Set Theme
  const [isThemeLight, setTheme] = useState(true);
  const themeToggle = () => {
    setTheme(!isThemeLight);
    if (!window.localStorage) {
      alert("The browser does not support localstorage");
    } else {
      localStorage.setItem("isThemeLight", !isThemeLight);
    }
  }
  const theme = createTheme(isThemeLight ? lightTheme : darkTheme);

  // Set Language
  // 0: English; 1: Simplified Chinese
  const [langId, setLangId] = useState(0);
  const langIdToggle = () => {
    setLangId(langId == 0? 1: 0);
    if (!window.localStorage) {
      alert("The browser does not support localstorage");
    } else {
      localStorage.setItem("lang", langId == 0? 1: 0);
    }
  }

  var langList = ["en", "zh"];
  var lang = langList[langId];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Index lang={lang}/>
            <Footer widthType="index" />
          </Route>
          <Route exact path="/c/:id">
            <ScrollToTop />
            <ProjCatePage />
            <Footer widthType="projCate" />
          </Route>
          <Route exact path="/p/:id">
            <ScrollToTop />
            <ProjDetailPage />
            <Footer widthType="projDetail" />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <FloatSettings themeToggle={themeToggle} setTheme={setTheme} langToggle={langIdToggle} setLang={setLangId}/>
    </ThemeProvider>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>
}

export default App;
