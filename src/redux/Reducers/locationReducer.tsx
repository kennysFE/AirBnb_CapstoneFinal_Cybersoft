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


export interface Location {
    id: number;
    tenViTri: string;
    tinhThanh: string;
    quocGia: string;
    hinhAnh: string;
}

export interface locationListItem {
    locationList: Location[]
}

const initialState: locationListItem = {
  locationList: [],
};

const locationReducer = createSlice({
  name: "locationReducer",
  initialState,
  reducers: {
    getAllLocation: (state: locationListItem, action: PayloadAction<Location[]>) => {
      state.locationList = action.payload;
    },
  },
});

export const { getAllLocation } = locationReducer.actions;

export default locationReducer.reducer;

//-------action api------------

export const getLocationApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/vi-tri");
      let locationList: Location[] = result.data.content;
      const action = getAllLocation(locationList);
      console.log(result);
      dispatch(action);
      console.log(action);
    } catch (err) {
      console.log(err);
    }
  };
};