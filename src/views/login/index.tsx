import React, { useCallback } from "react";
import LoginForm from "../../components/LoginForm";
import { LoginWrapp, LoginCard, LigaIcon } from "./styles";

const LoginView = () => {
  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <LoginWrapp>
      <LoginCard>
        <LigaIcon />
        <LoginForm onSubmit={onSubmit} />
      </LoginCard>
    </LoginWrapp>
  );
};

export default LoginView;
