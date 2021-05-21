import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../../components/Card";
import Pagination from "../../../components/Paginator";
import { RootState } from "../../../store/reducer";
import { fetchUsersRequest } from "../../../store/users/actions";
import { CardsWrapp } from "./styles";

const MainView = () => {
  const dispatch = useDispatch();
  const { pending, usersResponse, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsersRequest({ page: 1 }));
  }, [dispatch]);

  if (usersResponse) {
    return (
      <>
        <CardsWrapp>
          {usersResponse.data.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </CardsWrapp>
        <Pagination
          currentPage={usersResponse.page}
          totalPages={usersResponse.total_pages}
          pending={pending}
        />
        {/* Modal Error */}
      </>
    );
  } else {
    return <>loading</>;
  }
};

export default MainView;
