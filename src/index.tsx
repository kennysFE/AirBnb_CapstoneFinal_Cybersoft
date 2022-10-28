import React from "react";
import ReactDOM from "react-dom/client";
import { Navigate, Route, Routes } from "react-router-dom";

//Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

//cai history npm install --save history
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

//ant design
import "antd/dist/antd.css";

// css slick-slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//scss
import "../src/assets/scss/style.scss";

//Cấu hình react router dom
export const history = createBrowserHistory({ window });

//pages

import PageFooter from "./components/Footer/PageFooter";
import Home from "./pages/Home/Home";
import HomeTemplate from "./templates/HomeTemplate";
import Login from "./pages/Login/Login";
import DetailRoom from "./pages/DetailRoom/DetailRoom";
import DashBoard from "./pages/AdminPages/Dashboard/DashBoard";
import Register from "./pages/Register/Register";
import RoomManagement from "./pages/AdminPages/TestPage/RoomManage";
import UserManagement from "./pages/AdminPages/TestPage/UserManage";
import ThemNguoiDung from "./pages/AdminPages/TestPage/TesTCreateUser";
import UpdateUser from "./pages/AdminPages/TestPage/TestUpdateUser";
import CreateRoom from "./pages/AdminPages/TestPage/TesTCreateRoom";
import UpdateRoom from "./pages/AdminPages/TestPage/TesTUpdateRoom";
// import HomeTemplate from "./templates/HomeTemplate";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* thay BrowserRouter thanh historyRouter */}
      <HistoryRouter history={history}>
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route path="/" element={<HomeTemplate />}>
            <Route index element={<Home />} />

            <Route path="detailRoom">
              <Route path=":id" element={<DetailRoom />} />
            </Route>

            <Route path="*" element={<Navigate to="" />} />
          </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Testing page admin  */}

          <Route path="/admin/dashboard" element={<DashBoard />}>
            <Route path="userAdmin" element={<UserManagement />} />
            <Route path="roomAdmin" element={<RoomManagement />} />
            <Route path="userAdmin/createuser" element={<ThemNguoiDung />} />
            <Route path="userAdmin/updateuser/:id" element={<UpdateUser />} />
            <Route path="roomAdmin/createroom" element={<CreateRoom />} />
            <Route path="roomAdmin/updateroom/:id" element={<UpdateRoom />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
