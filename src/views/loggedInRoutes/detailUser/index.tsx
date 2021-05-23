import { useCallback, useEffect, useState } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../../store/reducer";
import {
  editUserRequest,
  fetchUserRequest,
  setSubmittedFalse,
} from "../../../store/users/actions";
import {
  Button,
  LoaderWrapp,
  TextError,
  AbsoluteWrapp,
  BlurScreen,
} from "../mainView/styles";

import EditUserDetailForm from "../../../components/EditUserForm";

const DetailUserView = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch<{ id: string }>();
  const userId = parseInt(params.id);
  const { pending, detailUser, error, submitted } = useSelector(
    (state: RootState) => state.users
  );
  const [loadingRecharge, setLoadingRecharge] = useState(false);
  useEffect(() => {
    dispatch(fetchUserRequest({ id: userId }));
  }, [dispatch, userId]);

  const fetchData = useCallback(() => {
    setLoadingRecharge(true);
    dispatch(fetchUserRequest({ id: userId }));
    setTimeout(() => {
      setLoadingRecharge(false);
    }, 2000);
  }, [dispatch, userId]);

  const clooseModal = useCallback(() => {
    dispatch(setSubmittedFalse());
  }, [dispatch]);

  const errorHandle = (
    <AbsoluteWrapp>
      <TextError>{loadingRecharge ? "Loading..." : error}</TextError>
      <Button
        disabled={loadingRecharge || pending}
        onClick={loadingRecharge || pending ? undefined : fetchData}
      >
        Recharge
      </Button>
    </AbsoluteWrapp>
  );

  const submittedModal = (
    <AbsoluteWrapp>
      <TextError>User edited successfully</TextError>
      <Button onClick={clooseModal}>Close</Button>
    </AbsoluteWrapp>
  );
  const onSubmit = useCallback(
    (data) => {
      dispatch(editUserRequest({ id: userId, data }));
    },
    [dispatch, userId]
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

        {error && errorHandle}
        {submitted && submittedModal}

        {(submitted || error) && <BlurScreen />}
      </>
    );
  } else {
    return (
      <LoaderWrapp>
        <Loader />
        {error && errorHandle}
      </LoaderWrapp>
    );
  }
};

export default DetailUserView;
