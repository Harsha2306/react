import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "usersSlice",
  initialState: { usersList: [] },
  reducers: {
    addNewUser(state, action) {
      state.usersList.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.usersList = action.payload.usersList;
    });
  },
});

export const addUsers = createAsyncThunk("a", async (usersList) => {
  const response = await fetch(
    "https://react-http-df499-default-rtdb.firebaseio.com/users.json",
    {
      method: "PUT",
      body: JSON.stringify({ usersList }),
    }
  );
  await response.json();
});

export const fetchUsers = createAsyncThunk("b", async () => {
  const response = await fetch(
    "https://react-http-df499-default-rtdb.firebaseio.com/users.json"
  );
  return await response.json();
});

export const userSliceActions = userSlice.actions;

export default userSlice;
