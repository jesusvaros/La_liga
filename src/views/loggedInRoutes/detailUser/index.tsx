import React, { useCallback, useEffect } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../../store/reducer";
import {
  editUserRequest,
  fetchUserRequest,
  setSubmittedFalse,
} from "../../../store/users/actions";
import { Button, LoaderWrapp, BlurScreen } from "../mainView/styles";

import EditUserDetailForm from "../../../components/EditUserForm";
import ErrorModal from "../../../components/ErrorModal";
import {
  AbsoluteWrapp,
  TextError,
} from "../../../components/ErrorModal/styles";

const DetailUserView = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch<{ id: string }>();
  const userId = parseInt(params.id);
  const { pending, detailUser, error, submitted } = useSelector(
    (state: RootState) => state.users
  );
  // Checks for the values of the detail user on the backend we could also take that value from the array of users
  // on the store to allow the patch without having to fetch every time we enter the view
  useEffect(() => {
    dispatch(fetchUserRequest({ id: userId }));
  }, [dispatch, userId]);

  const fetchData = useCallback(() => {
    dispatch(fetchUserRequest({ id: userId }));
  }, [dispatch, userId]);

  // Cloose the modal of success editing by setting the var in the store to false
  const clooseModal = useCallback(() => {
    dispatch(setSubmittedFalse());
  }, [dispatch]);

  const onSubmit = useCallback(
    (data) => {
      dispatch(editUserRequest({ id: userId, data }));
    },
    [dispatch, userId]
  );

  const submittedModal = (
    <AbsoluteWrapp>
      <TextError>User edited successfully</TextError>
      <Button onClick={clooseModal}>Cloose</Button>
    </AbsoluteWrapp>
  );

  if (detailUser) {
    return (
      <>
        <EditUserDetailForm
          initialValues={{
            first_name: detailUser?.data.first_name,
            last_name: detailUser?.data.last_name,
            email: detailUser?.data.email,
          }}
          onSubmit={onSubmit}
        />

        <ErrorModal error={error} pending={pending} onRecharge={fetchData} />
        {submitted && submittedModal}

        {(submitted || error) && <BlurScreen />}
      </>
    );
  } else {
    return (
      <LoaderWrapp>
        <Loader />
        <ErrorModal error={error} pending={pending} onRecharge={fetchData} />
      </LoaderWrapp>
    );
  }
};

export default DetailUserView;
