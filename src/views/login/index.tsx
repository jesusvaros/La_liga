import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import ErrorModal from "../../components/ErrorModal";
import LoginForm from "../../components/LoginForm";
import {
  postAuthRequest,
  RemoveAuthError,
} from "../../store/authentication/actions";
import { RootState } from "../../store/reducer";
import { LoginWrapp, LoginCard, LigaIcon } from "./styles";

// const clientId = "configureId.apps.googleusercontent.com";

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

  // Cloose the error modal after 5secs
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        clooseModalError();
      }, 5000);
    }
  }, [error, clooseModalError]);

  // Log in validation callbacks it needs the clientId to work properly
  // const onSuccessGoogleLogIn = useCallback((res) => {
  //   setToken(res.token);
  // }, []);
  // const onFailureGoogleLogIn = useCallback(() => {}, []);

  return (
    <Switch>
      <Route path="/" exact>
        <LoginWrapp>
          <LoginCard>
            <LigaIcon />
            <LoginForm onSubmit={onSubmit} />
            {/* <GoogleLoginButton
              clientId={clientId}
              onSuccess={onSuccessGoogleLogIn}
              buttonText="LogIn"
              onFailure={onFailureGoogleLogIn}
              isSignedIn={true}
            /> */}
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
