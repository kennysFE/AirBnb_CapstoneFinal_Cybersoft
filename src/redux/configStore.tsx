import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./Reducers/modalReducer";
import userReducer from "./Reducers/userReducer";
import userAdminReducer from "./Reducers/userAdminReducer";

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
    modalReducer: modalReducer,
    userAdminReducer: userAdminReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {pots: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
