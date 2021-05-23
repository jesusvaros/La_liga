import React, { useCallback } from "react";
import { LogOut } from "react-feather";
import { useDispatch } from "react-redux";

import { Redirect, Route, Switch } from "react-router-dom";
import { authLogOut } from "../../store/authentication/actions";
import DetailUserView from "./detailUser";
import MainView from "./mainView";

import { PageWrapp, Header, LigaIcon, LogOutWrapp } from "./styles";

const LoggedIndRoutes = () => {
  const dispatch = useDispatch();
  const logOut = useCallback(() => {
    dispatch(authLogOut());
  }, [dispatch]);

  return (
    <PageWrapp>
      <Header>
        <LigaIcon />
        <LogOutWrapp onClick={logOut}>
          <LogOut />
          Log Out
        </LogOutWrapp>
      </Header>
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/user/:id" exact component={DetailUserView} />
        <Redirect to="/" />
      </Switch>
    </PageWrapp>
  );
};

export default LoggedIndRoutes;
