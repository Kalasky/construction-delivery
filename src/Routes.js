import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Footer from "./Footer";
import Header from "./Header";
import Premium from "./components/pages/Premium";
import Contact from "./components/pages/Contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/premium" exact component={Premium} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
