import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./redux-store/users-slice";

const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
  },
});

export default store;
