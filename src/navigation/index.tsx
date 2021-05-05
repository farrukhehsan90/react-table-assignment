import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Pages
import { Home } from '../pages'

const Navigation = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Navigation;