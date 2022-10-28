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


export interface RoomInfo {
    id: number;
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
}

type roomUpdate = {
    tenPhong: string;
    khach: number;
    phongNgu: number;
    giuong: number;
    phongTam: number;
    moTa: string;
    giaTien: number;
    mayGiat: boolean;
    banLa: boolean;
    tivi: boolean;
    dieuHoa: boolean;
    wifi: boolean;
    bep: boolean;
    doXe: boolean;
    hoBoi: boolean;
    banUi: boolean;
    maViTri: number;
    hinhAnh: string;
}

export interface roomPutState {
    roomPut: RoomInfo[] | any;
}

const initialState: roomPutState = {
    roomPut: []
};


const roomAction = createSlice({
  name: "roomAction",
  initialState,
  reducers: {
    roomActionAdmin: (state: roomPutState, action: PayloadAction<RoomInfo[]>) => {
      state.roomPut = action.payload;
    },
  },
});

export const { roomActionAdmin } = roomAction.actions;

export default roomAction.reducer;
  
//-------action api------------ 

export const putRoomApi = (id: number, data: roomUpdate) => {
    return async (dispatch: AppDispatch) => {
      try {
        let result = await http.put(`/phong-thue/${id}`, data);
        console.log({ result });
        let action = roomActionAdmin(result.data.content);
        dispatch(action);
      } catch (error) {
        console.log({ error });
      }
    };
  };

  export const deleteRoomApi = (id: number) => {
    return async (dispatch: AppDispatch) => {
      try {
        const result = await http.delete(`/phong-thue/${id}`);
        // const action = userCreateAdmin(result.data.content)
        // console.log(result);
        // dispatch(action);
      }
      catch (err: any) {
        console.log(err);
      }
    }
  
  }

  export const getRoomAPi = (id: number) => {
    return async (dispatch: AppDispatch) => {
      try {
        let result = await http.get(`/phong-thue/${id}`);
        console.log({ result });
        let action = roomActionAdmin(result.data.content);
        dispatch(action);
      } catch (err) {
        console.log({ err });
      }
    };
  };
