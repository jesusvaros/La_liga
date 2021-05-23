import React from "react";
import { ArrowLeft, XOctagon } from "react-feather";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { RootState } from "../../store/reducer";
import { Button } from "../../views/loggedInRoutes/mainView/styles";
import {
  FooterButtons,
  FormContainer,
  Form,
  Label,
  Wrapp,
  MaxWidth,
} from "./styles";

const EditUserDetailForm = ({ handleSubmit }: InjectedFormProps) => {
  const { goBack } = useHistory();
  const { pending } = useSelector((state: RootState) => state.users);
  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <Wrapp>
          <Label>First Name</Label>
          <Field name="first_name" component="input" type="text" />
        </Wrapp>
        <Wrapp>
          <Label>Last Name</Label>
          <Field name="last_name" component="input" type="text" />
        </Wrapp>
        <Wrapp>
          <Label>Email</Label>
          <Field name="email" component="input" type="text" />
        </Wrapp>
        <Button
          onClick={goBack}
          background="black"
          color="white"
          max_width={160}
        >
          <XOctagon /> Delete User
        </Button>
      </FormContainer>

      <FooterButtons>
        <MaxWidth>
          <Button onClick={goBack} background="white" color="black">
            <ArrowLeft />
            Back
          </Button>
          <Button onClick={handleSubmit} disabled={pending}>
            Save
          </Button>
        </MaxWidth>
      </FooterButtons>
    </Form>
  );
};

export default reduxForm({
  form: "editUserDetailForm",
})(EditUserDetailForm);
