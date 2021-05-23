import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import LoginForm from "../../components/LoginForm";
import { postAuthRequest } from "../../store/authentication/actions";
import { LoginWrapp, LoginCard, LigaIcon } from "./styles";

const LoginView = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (data) => {
      dispatch(postAuthRequest(data));
    },
    [dispatch]
  );

  return (
    <Switch>
      <Route path="/" exact>
        <LoginWrapp>
          <LoginCard>
            <LigaIcon />
            <LoginForm onSubmit={onSubmit} />
          </LoginCard>
        </LoginWrapp>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default LoginView;
