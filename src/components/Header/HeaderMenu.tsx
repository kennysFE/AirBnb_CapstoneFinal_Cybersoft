import React, { useState } from "react";
import { Dropdown, Menu } from "antd";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function HeaderMenu({}: Props) {
  const navigate = useNavigate();
  // usestate responsive
  const [isHidden, setIsHidden] = useState(true);

  const menu = (
    <Menu
      className="w-60 rounded-xl py-2.5 mt-2.5 shadow-b-3"
      items={[
        {
          key: "1",
          label: (
            <p
              className="text-base font-medium m-0"
              onClick={() => navigate("/register")}
            >
              Đăng ký
            </p>
          ),
        },
        {
          key: "2",
          label: (
            <p
              onClick={() => navigate("/login")}
              className="text-base m-0 py-1 border-r"
              // style={{ borderBottom: "1px solid #ccc" }}
            >
              Đăng nhập
            </p>
          ),
        },
        {
          key: "3",
          label: <p className="text-base m-0 py-1">Đi đến trang quản trị</p>,
        },
        {
          key: "4",
          label: <p className="text-base m-0 py-1">Cho thuê nhà</p>,
        },

        {
          key: "5",
          label: <p className="text-base m-0 py-1">Tổ chức trải nhiệm</p>,
        },
        {
          key: "6",
          label: <p className="text-base m-0 py-1">Trợ giúp</p>,
        },
      ]}
    />
  );
  return (
    <>
      <div className="userDropDown hidden sm:block">
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="flex text-gray-500 items-center py-1 px-3">
            <FaBars className="text-lg mr-3" />
            <div>
              {/* {" "} */}
              <img
                className="rounded-full w-8 h-8"
                src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
            <div
              className="absolute top-t-113 z-10"
              // style={{ top: "113%", zIndex: "2" }}
            ></div>
          </div>
        </Dropdown>

        {/* <div>
                      <FaBars className="text-primary"/>
                    </div> */}
      </div>
    </>
  );
}
