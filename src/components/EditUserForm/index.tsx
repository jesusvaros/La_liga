import React, { useCallback } from "react";
import { ArrowLeft, XOctagon } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useRouteMatch } from "react-router-dom";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { RootState } from "../../store/reducer";
import { deleteUserRequest } from "../../store/users/actions";
import { Button } from "../../views/loggedInRoutes/mainView/styles";
import {
  FooterButtons,
  FormContainer,
  Form,
  Label,
  Wrapp,
  MaxWidth,
} from "./styles";

// Component that uses the redux form library to manage the formularies in the web.

const EditUserDetailForm = ({ handleSubmit }: InjectedFormProps) => {
  const { goBack } = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const userId = parseInt(params.id);
  const dispatch = useDispatch();
  const { pending } = useSelector((state: RootState) => state.users);

  // Function to delete the user, then redirects the user to the mainViews that will not show that user.
  const onDelete = useCallback(() => {
    dispatch(deleteUserRequest({ id: userId }));
    goBack();
  }, [dispatch, userId, goBack]);

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
          onClick={pending ? undefined : onDelete}
          disabled={pending}
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
