import React, { useCallback } from "react";
import { User } from "../../store/users/models";
import { CardWrapp, Text, UserIcon } from "./styles";
import { useHistory } from "react-router";

const UserCard = ({ id, avatar, email, first_name, last_name }: User) => {
  const { push } = useHistory();

  const redirectToUser = useCallback(() => {
    push(`/user/${id}`);
  }, [id, push]);

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
