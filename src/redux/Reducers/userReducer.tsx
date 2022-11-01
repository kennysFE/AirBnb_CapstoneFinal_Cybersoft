import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history } from "../../App";
import { AppDispatch } from "../configStore";


import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../utils/setting";


interface userLogin {
  user: any;
  // user: string;
  id?: number;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  birthday?: string;
  gender?: boolean;
  role?: string;
}
type UpdateUser = {
  name: string;
  email: string;
  birthday: string;
  role: string;
  gender: boolean;
  phone: string;
};

interface userProfile {
  name: string;
  email: string;
  birthday: string;
  role: string;
  gender: boolean;
  phone: string;
}

interface UserSignIn {
  email?: string;
  password?: string;
}
export interface userLoginState {
  userLogin: userLogin | any  ;
  userProfile: userProfile | any 
}
const initialState: userLoginState = {
  userLogin: getStoreJSON(USER_LOGIN) || {},
  userProfile: {}
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLogin: (state: userLoginState, action: PayloadAction<userLogin>) => {
      state.userLogin = action.payload;
    },
    setUserProfile: (state: userLoginState, action: PayloadAction<userProfile>) => {
      state.userProfile = action.payload;
    }
  }
});

export const { setUserLogin,setUserProfile } = userReducer.actions;

export default userReducer.reducer;

/// Call api post signup
export const postSignupUser = (data: userLogin) => {
  console.log({ data });
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signup", data);
      console.log({ result });
      history.push("/login");
    } catch (error: any) {
      console.log({ error });
      alert(error.response.data.content);
    }
  };
};

// Call api  post signin
export const postSignin = (data: UserSignIn) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signin", data);
      console.log({ result });
      //LƯU TOKEN VÀO LOCALSTORE
      setStore(ACCESS_TOKEN, result.data.content.token);
      // Lưu lại email
      setStoreJSON(USER_LOGIN, result.data.content);
      // Thay đổi page menu     
      history.replace({
        pathname:'/'
       })
       window.location.reload();

    } catch (error: any) {
      let err = error.response.data.content;
      alert(err);
      console.log({ error });
    }
  };
};
// Call api get user
export const getUserProfileAPi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result5 = await http.get(`/users/${getStoreJSON(USER_LOGIN).user.id}`);
      console.log({ result5 });
      let action = setUserProfile(result5.data.content);
      dispatch(action);
    } catch (err) {
      console.log({ err });
    }
  };
};

export const getDatphongApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/dat-phong/lay-theo-nguoi-dung/${getStoreJSON(USER_LOGIN).user.id}`);
      console.log({ result });
    } catch (error) {
      console.log({ error });
    }
  };
};


// call api put user
export const putUseProfileApi = ( id: number, data: UpdateUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.put(`/users/${id}`, data);
      console.log({ result });
      //Chuyển về trang profile
      // history.push("/profile");
      let action = setUserLogin(result.data.content);
      dispatch(action);
    } catch (error) {
      console.log({ error });
    }
  };
};
