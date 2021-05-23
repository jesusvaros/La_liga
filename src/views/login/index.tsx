import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import ErrorModal from "../../components/ErrorModal";
import LoginForm from "../../components/LoginForm";
import { setToken } from "../../storage";
import {
  postAuthRequest,
  RemoveAuthError,
} from "../../store/authentication/actions";
import { RootState } from "../../store/reducer";
import { LoginWrapp, LoginCard, LigaIcon, GoogleLoginButton } from "./styles";

const clientId = "configureId.apps.googleusercontent.com";

const LoginView = () => {
  const dispatch = useDispatch();
  const onSubmit = useCallback(
    (data) => {
      dispatch(postAuthRequest(data));
    },
    [dispatch]
  );

  const { pending, error } = useSelector((state: RootState) => state.auth);

  const clooseModalError = useCallback(() => {
    dispatch(RemoveAuthError());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        clooseModalError();
      }, 5000);
    }
  }, [error, clooseModalError]);

  const onSuccessGoogleLogIn = useCallback((res) => {
    setToken(res.token);
  }, []);
  const onFailureGoogleLogIn = useCallback(() => {}, []);

  return (
    <Switch>
      <Route path="/" exact>
        <LoginWrapp>
          <LoginCard>
            <LigaIcon />
            <LoginForm onSubmit={onSubmit} />
            <GoogleLoginButton
              clientId={clientId}
              onSuccess={onSuccessGoogleLogIn}
              buttonText="LogIn"
              onFailure={onFailureGoogleLogIn}
              isSignedIn={true}
            />
          </LoginCard>

          <ErrorModal
            error={error}
            pending={pending}
            onRecharge={clooseModalError}
            titleButton="Cloose"
            bottomPosition
          />
        </LoginWrapp>
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default LoginView;
