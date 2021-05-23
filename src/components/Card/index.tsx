import React, { useCallback } from "react";
import { User } from "../../store/users/models";
import { CardWrapp, Text, UserIcon } from "./styles";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userToDefault } from "../../store/users/actions";

const UserCard = ({ id, avatar, email, first_name, last_name }: User) => {
  const { push } = useHistory();
  const dispatch = useDispatch();

  const redirectToUser = useCallback(() => {
    dispatch(userToDefault());
    push(`/user/${id}`);
  }, [id, push, dispatch]);

  return (
    <CardWrapp onClick={redirectToUser}>
      <UserIcon src={avatar} alt={`${first_name} Avatar`} />
      <Text size={16} weight={600}>
        {first_name}
      </Text>
      <Text>{last_name}</Text>
      <Text>{email}</Text>
    </CardWrapp>
  );
};

export default UserCard;
