import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { BrowserView, MobileView, isMobileOnly } from "react-device-detect";

//NAVIGATION
import NavigationBar from "./NavigationBar";
import MobileNavigationBar from "./MobileNavigationBar";
//PAGES
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import NoMatch from "../pages/NoMatch";
//COMPONENTS
import Footer from "../components/Footer";

export default function RouteNavigator() {

  return (
    <Router>
      <div>
        <BrowserView>
          <NavigationBar />
        </BrowserView>

        <MobileView>
          <MobileNavigationBar />
        </MobileView>

        <Switch>
          <Route exact path="/">
            <Home />
            <Footer style={ isMobileOnly ? { backgroundColor: "#a7cfe5" } : styles.fullScreenPage} />
          </Route>
          <Route path="/about">
            <About />
            <Footer style={{ backgroundColor: "#24305e" }}/>
          </Route>
          <Route path="/projects">
            <Projects />
            <Footer style={{ backgroundColor: "#f7e8a0" }}/>
          </Route>
          <Route path="/contact">
            <Contact />
            <Footer style={{...styles.fullScreenPage, backgroundColor: "#f76c6c"}}/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const styles = {
  fullScreenPage: { position: "fixed", zIndex: 3, bottom: 0, width: "100%" },
};