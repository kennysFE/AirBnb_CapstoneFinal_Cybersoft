import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../index";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../utils/setting";
import { AppDispatch } from "../configStore";
// import { nguoiDungModel } from "../models/nguoiDungModel";

export interface UserPost {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: number | null;
    birthday: string;
    gender: boolean;
    role: string;
}

export interface UserPostInfor {
    userPost: UserPost[];
}

const initialState: UserPostInfor = {
  userPost: [],
};

const userCreate = createSlice({
  name: "userCreate",
  initialState,
  reducers: {
    userCreateAdmin: (state: UserPostInfor, action: PayloadAction<UserPost[]>) => {
      state.userPost = action.payload;
    },

  },
});

export const { userCreateAdmin } = userCreate.actions;

export default userCreate.reducer;

//-------action api------------

export const createUserApi = (data: UserPost) => {
    console.log(data);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/users", data);
    //   let userPost: UserPost[] = result.data.content;
      const action = userCreateAdmin(result.data.content);
      console.log(result);
      dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};

export const deleteUserApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/users?id=${id}`);
      // const action = userCreateAdmin(result.data.content)
      // console.log(result);
      // dispatch(action);
    }
    catch (err: any) {
      console.log(err);
    }
  }

}
