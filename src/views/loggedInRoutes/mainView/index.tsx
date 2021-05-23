import React, { useCallback, useEffect } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../../components/Card";
import ErrorModal from "../../../components/ErrorModal";
import Pagination from "../../../components/Paginator";
import { RootState } from "../../../store/reducer";
import { fetchUsersRequest } from "../../../store/users/actions";
import { CardsWrapp, LoaderWrapp, BlurScreen } from "./styles";

const MainView = () => {
  const dispatch = useDispatch();
  const { pending, users, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersRequest({ page: 1 }));
  }, [dispatch]);

  const fetchData = useCallback(() => {
    dispatch(fetchUsersRequest({ page: 1 }));
  }, [dispatch]);

  if (users) {
    return (
      <>
        <CardsWrapp>
          {users.data.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
          {error && (
            <ErrorModal
              error={error}
              pending={pending}
              onRecharge={fetchData}
            />
          )}
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
