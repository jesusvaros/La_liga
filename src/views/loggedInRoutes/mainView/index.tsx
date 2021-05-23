import React, { useCallback, useEffect } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../../components/Card";
import ErrorModal from "../../../components/ErrorModal";
import {
  AbsoluteWrapp,
  TextError,
} from "../../../components/ErrorModal/styles";
import Pagination from "../../../components/Paginator";
import { RootState } from "../../../store/reducer";
import {
  fetchUsersRequest,
  setSubmittedFalse,
} from "../../../store/users/actions";
import { CardsWrapp, LoaderWrapp, BlurScreen, Button } from "./styles";

const MainView = () => {
  const dispatch = useDispatch();
  const { pending, users, error, deleted } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    if (!users) {
      dispatch(fetchUsersRequest({ page: 1 }));
    }
  }, [dispatch, users]);

  const fetchData = useCallback(() => {
    dispatch(fetchUsersRequest({ page: 1 }));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(setSubmittedFalse());
  }, [dispatch]);

  const deletedModal = (
    <AbsoluteWrapp>
      <TextError>User deleted successfully</TextError>
      <Button onClick={closeModal}>Close</Button>
    </AbsoluteWrapp>
  );

  if (users) {
    return (
      <>
        <CardsWrapp>
          {users.data.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
          <ErrorModal error={error} pending={pending} onRecharge={fetchData} />
          {deleted && deletedModal}
        </CardsWrapp>
        <Pagination
          currentPage={users.page}
          totalPages={users.total_pages}
          pending={pending || !!error}
        />
        {error && <BlurScreen />}
      </>
    );
  } else {
    return (
      <LoaderWrapp>
        <Loader />
        <ErrorModal error={error} onRecharge={fetchData} pending={pending} />
      </LoaderWrapp>
    );
  }
};

export default MainView;
