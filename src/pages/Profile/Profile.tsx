import { SiAdguard } from "react-icons/si";
import { BsCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getUserProfileAPi } from "../../redux/Reducers/userReducer";
import ModalProfile from "../../HOC/ModalProfile";
import { Col } from "antd";

type Props = {};

export default function Profile({}: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { userLogin } = useSelector((state: RootState) => state.userReducer);

  // useEffect((id: number) => {
  //     dispatch(getUserProfileAPi(id));
  // }, []);

  return (
    <div>
      <div className="2 xl:max-w-7xl mx-auto py-24 pt-28 flex justify-center">
        <div className="border-solid border-[5px] w-1/4 pt-10 rounded-xl">
          <div className="flex flex-col  items-center">
            <img
              src={
                userLogin.user.avatar ||
                "https://a0.muscache.com/defaults/user_pic-225x225.png?v=3"
              }
              alt={userLogin.user.name}
              className="rounded-full w-36 h-36"
            />
            <span className="underline pt-2 font-medium">Cập nhật ảnh</span>
          </div>
          <div className="px-5 pt-10 leading-10">
            <div>
              <SiAdguard />
            </div>
            <div className="border-solid border-b-[1px]">
              <h3 className="font-medium">Xác minh danh tính</h3>
              <p className="leading-5 pb-5">
                Xác thực danh tính của bạn với huy hiệu xác minh danh tính
              </p>
              <button className="border-solid border-[1px] border-black px-5 rounded-xl font-medium mb-5">
                Nhận Huy Hiệu
              </button>
            </div>
            <div>
              <h1>{userLogin.user.email} - Đã xác nhận</h1>
              <div className="flex items-center">
                <BsCheck className="text-2xl" />
                <span className="pl-1">Địa chỉ email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-20 w-3/5">
          <div className="leading-8 mx-auto">
            <h1 className="text-3xl font-semibold">
              Xin Chào, tôi là {userLogin.user.name}
            </h1>
            <span>Bắt đầu tham gia vào 2022</span>
            <div
              className="w-4/6 p-6 rounded-2xl py-4"
              style={{ border: "2px solid #ff385c" }}
            >
              <div className="">
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Họ và tên :
                  </span>
                  <span>{userLogin.user?.name}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Giới tính :{" "}
                  </span>
                  <span>{userLogin.user?.gender ? "Nam" : "Nữ"}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Ngày sinh :
                  </span>
                  <span>
                    {dayjs(userLogin.user?.birthday).format("DD/MM/YYYY")}
                  </span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Email :
                  </span>
                  <span>{userLogin.user?.email}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Điện thoại :
                  </span>
                  <span>{userLogin.user?.phone}</span>
                </p>
              </div>
            </div>
            <p className="underline font-semibold text-xl cursor-pointer pt-4">
              Chỉnh sửa hồ sơ
            </p>
          </div>

          <div className="flex my-5 border-solid border-b-[1px]">
            <div className="pb-7 items-center flex">
              <AiFillStar className="text-center" />
              <span className="pl-1 font-medium">0 Đánh giá</span>
            </div>
          </div>
          <div className="border-solid border-b-[1px]">
            <p className="pb-7 font-medium">Đánh giá của bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
}