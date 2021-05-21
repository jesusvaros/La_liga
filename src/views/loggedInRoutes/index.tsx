import React from "react";

import { Route, Switch } from "react-router-dom";
import MainView from "./mainView";

import { PageWrapp, Header, LigaIcon } from "./styles";

const LoggedIndRoutes = () => {
  return (
    <PageWrapp>
      <Header>
        <LigaIcon />
      </Header>
      <Switch>
        <Route path="/" exact component={MainView} />
      </Switch>
    </PageWrapp>
  );
};

export default LoggedIndRoutes;
