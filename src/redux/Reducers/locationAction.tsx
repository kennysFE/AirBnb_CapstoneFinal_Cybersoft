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

// type locationUpdate = {
//     tenPhong: string;
//     khach: number;
//     phongNgu: number;
//     giuong: number;
//     phongTam: number;
//     moTa: string;
//     giaTien: number;
//     mayGiat: boolean;
//     banLa: boolean;
//     tivi: boolean;
//     dieuHoa: boolean;
//     wifi: boolean;
//     bep: boolean;
//     doXe: boolean;
//     hoBoi: boolean;
//     banUi: boolean;
//     maViTri: number;
//     hinhAnh: string;
// }

export interface locationPutState {
    locationPut: Location[] | any;
}

const initialState: locationPutState = {
    locationPut: []
};


const locationAction = createSlice({
  name: "locationAction",
  initialState,
  reducers: {
    locationActionAdmin: (state: locationPutState, action: PayloadAction<Location[]>) => {
      state.locationPut = action.payload;
    },
  },
});

export const { locationActionAdmin } = locationAction.actions;

export default locationAction.reducer;
  
//-------action api------------ 

export const putlocationApi = (id: number, data: Location) => {
    return async (dispatch: AppDispatch) => {
      try {
        let result = await http.put(`/vi-tri/${id}`, data);
        console.log({ result });
        let action = locationActionAdmin(result.data.content);
        dispatch(action);
      } catch (error) {
        console.log({ error });
      }
    };
  };

  export const deletelocationApi = (id: number) => {
    return async (dispatch: AppDispatch) => {
      try {
        const result = await http.delete(`/vi-tri/${id}`);
        // const action = userCreateAdmin(result.data.content)
        // console.log(result);
        // dispatch(action);
      }
      catch (err: any) {
        console.log(err);
      }
    }
  
  }

  export const getlocationAPi = (id: number) => {
    return async (dispatch: AppDispatch) => {
      try {
        let result = await http.get(`/vi-tri/${id}`);
        console.log({ result });
        let action = locationActionAdmin(result.data.content);
        dispatch(action);
      } catch (err) {
        console.log({ err });
      }
    };
  };
