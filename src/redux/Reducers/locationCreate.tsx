import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../index";
import {
  http,
  ACCESS_TOKEN,
  USER_LOGIN,
  setStore,
  getStore,
  setStoreJSON,
  getStoreJSON,
  clearLocalStorage
} from "../../utils/setting";
import { AppDispatch } from "../configStore";

// const {userInfo} = localStorage.getItem(ACCESS_TOKEN);
export interface Location {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
  }

export interface locationPostState {
    roomPost: Location[];
}

const initialState: locationPostState = {
    roomPost: [],
};


const locationCreate = createSlice({
  name: "locationCreate",
  initialState,
  reducers: {
    locationCreateAdmin: (state: locationPostState, action: PayloadAction<Location[]>) => {
      state.roomPost = action.payload;
    },

  },
});

export const { locationCreateAdmin } = locationCreate.actions;

export default locationCreate.reducer;

//---------- Action Api --------------

export const createLocationApi = (data: Location) => {
    console.log(data);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/vi-tri", data);
      const action = locationCreateAdmin(result.data.content);
      console.log(result);
      dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};