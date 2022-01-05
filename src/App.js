import { createTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch

} from "react-router-dom";
import { lightTheme } from "./assets/theme";
import ScrollToTop from "./scrollToTop";
import Index from "./pages/index";
import ProjCatePage from "./pages/projCatePage";
import ProjDetailPage from "./pages/projDetailPage";


function App() {
  const theme = createTheme(lightTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <ScrollToTop />
            <Index />
          </Route>
          <Route exact path="/c/:id">
            <ScrollToTop />
            <ProjCatePage />
          </Route>
          <Route exact path="/p/:id">
            <ProjDetailPage />
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
