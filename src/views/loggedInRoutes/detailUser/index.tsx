import { useCallback, useEffect } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { RootState } from "../../../store/reducer";
import { fetchUserRequest } from "../../../store/users/actions";
import { Button, LoaderWrapp, TextError } from "../mainView/styles";

import EditUserDetailForm from "../../../components/EditUserForm";

const DetailUserView = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch<{ id: string }>();
  const userId = parseInt(params.id);
  const { pending, detailUser, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUserRequest({ id: userId }));
  }, [dispatch, userId]);

  const fetchData = useCallback(() => {
    dispatch(fetchUserRequest({ id: userId }));
  }, [dispatch, userId]);

  const errorHandle = (
    <>
      <TextError>{error}</TextError>
      <Button onClick={pending ? undefined : fetchData}>Recharge</Button>
    </>
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
          onSubmit={undefined} //TODO
        />
        {error && errorHandle}
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
