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
          <Route path="/admin/dashboard" element={<DashBoard />}></Route>
        </Routes>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
