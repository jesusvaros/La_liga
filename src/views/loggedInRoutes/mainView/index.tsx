import { useCallback, useEffect } from "react";
import { Loader } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../../components/Card";
import Pagination from "../../../components/Paginator";
import { RootState } from "../../../store/reducer";
import { fetchUsersRequest } from "../../../store/users/actions";
import {
  Button,
  CardsWrapp,
  LoaderWrapp,
  TextError,
  AbsoluteWrapp,
  BlurScreen,
} from "./styles";

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

  const errorHandle = (
    <>
      <TextError>{error}</TextError>
      <Button onClick={pending ? undefined : fetchData}>Recharge</Button>
    </>
  );

  if (users) {
    return (
      <>
        <CardsWrapp>
          {users.data.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
          {error && <AbsoluteWrapp>{errorHandle}</AbsoluteWrapp>}
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
        {error && errorHandle}
      </LoaderWrapp>
    );
  }
};

export default MainView;
