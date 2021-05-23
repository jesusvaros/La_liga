import React, { FC, useState, useCallback } from "react";
import {
  Field,
  InjectedFormProps,
  reduxForm,
  WrappedFieldProps,
} from "redux-form";
import { Button } from "../../views/loggedInRoutes/mainView/styles";
import { Label, Wrapp } from "../EditUserForm/styles";
import { Eye, EyeOff } from "react-feather";

// Custom field component to allow the user to see the password by clicking on the eye icon
const PasswordField: FC<WrappedFieldProps> = ({ input }) => {
  const [type, setType] = useState<"text" | "password">("password");

  const toggleFieldType = useCallback(() => {
    setType((type) => (type === "text" ? "password" : "text"));
  }, [setType]);

  const Icon = type === "text" ? Eye : EyeOff;

  return (
    <Wrapp>
      <Label>Password.</Label>
      <input id="password" type={type} {...input} />
      <Icon onClick={toggleFieldType} />
    </Wrapp>
  );
};

const LoginForm: FC<InjectedFormProps> = ({ handleSubmit, invalid }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Wrapp>
        <Label>Email.</Label>
        <Field name="email" component="input" type="text" />
      </Wrapp>
      <Field name="password" component={PasswordField} />
      <Button disabled={invalid} onClick={handleSubmit}>
        Log in
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
