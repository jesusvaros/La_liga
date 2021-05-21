import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";
import { fetchUsersRequest } from "../../../store/users/actions";

const MainView = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  console.log(pending, users, error);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return <>a</>;
};

export default MainView;
