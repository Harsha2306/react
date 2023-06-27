import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { userSliceActions } from "../redux-store/users-slice";

const NewUser = () => {
  const [name, SetName] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <input value={name} onChange={(e) => SetName(e.target.value)} />
      <button
        onClick={() => {
          dispatch(userSliceActions.addNewUser({ name, id: nanoid() }));
          SetName("");
        }}
      >
        Add new User
      </button>
    </div>
  );
};

export default NewUser;
