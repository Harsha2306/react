import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { addUsers, fetchUsers } from "../redux-store/users-slice";
import { useDispatch } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.userSlice.usersList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    dispatch(addUsers(users));
  }, [dispatch, users]);

  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

export default Users;
