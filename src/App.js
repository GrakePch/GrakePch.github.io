import React, { useState } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { lightTheme } from "./assets/theme";
import ScrollToTop from "./scrollToTop";
import Index from "./pages/index";
import ProjCatePage from "./pages/projCatePage";
import ProjDetailPage from "./pages/projDetailPage";
import Footer from "./pages/footer";


function App() {
  const theme = createTheme(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Index />
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
    </ThemeProvider>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>
}

export default App;
