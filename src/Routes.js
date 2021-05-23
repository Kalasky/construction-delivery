import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import Premium from "./components/pages/Premium";
// import Contact from "./components/pages/Contact";

const Routes = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/#/premium" exact component={Premium} />
        {/* <Route path="/contact" exact component={Contact} /> */}
      </Switch>
      <Footer />
    </HashRouter>
  );
};

export default Routes;
