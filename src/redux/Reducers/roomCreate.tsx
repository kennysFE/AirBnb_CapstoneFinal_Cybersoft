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

export interface roomPostState {
    roomPost: RoomInfo[];
}

const initialState: roomPostState = {
    roomPost: [],
};


const roomCreate = createSlice({
  name: "roomCreate",
  initialState,
  reducers: {
    roomCreateAdmin: (state: roomPostState, action: PayloadAction<RoomInfo[]>) => {
      state.roomPost = action.payload;
    },

  },
});

export const { roomCreateAdmin } = roomCreate.actions;

export default roomCreate.reducer;

//---------- Action Api --------------

export const createRoomApi = (data: RoomInfo) => {
    console.log(data);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/phong-thue", data);
    //   let userPost: UserPost[] = result.data.content;
      const action = roomCreateAdmin(result.data.content);
      console.log(result);
      dispatch(action);
    } catch (err: any) {
      console.log(err);
    }
  };
};