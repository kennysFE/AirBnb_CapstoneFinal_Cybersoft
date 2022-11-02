import { SiAdguard } from "react-icons/si";
import { BsCheck } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/configStore";
import dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  getUserProfileAPi,
  setUserBooking,
  Updateavatar,
} from "../../redux/Reducers/userReducer";
import ModalProfile from "../../HOC/ModalProfile";
import { Col } from "antd";
import RoomItem from "./RoomProfile/RoomItem";
import roomReducer, { roomActionAdmin } from "../../redux/Reducers/roomReducer";
import { getRoomBookingApiID } from "../../redux/Reducers/bookingRoomReducer";
import {
  ACCESS_TOKEN,
  getStoreJSON,
  http,
  setStore,
  setStoreJSON,
  TOKEN_CYBERSOFT,
  USER_LOGIN,
} from "../../utils/setting";

type Props = {};

export default function Profile({}: Props) {
  const fileRef:any = useRef();
  const [avatar, setAvatar] = useState(getStoreJSON(USER_LOGIN).user.avatar);

  const { user } = getStoreJSON(USER_LOGIN);

  const handleChangeAvatar = (e: any) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = (e: any) => {
      const url = e.target.result;
      setAvatar(url);
      const formData = new FormData();
      formData.append("avatar", file);
      // dispatch(Updateavatar(formData));
      // window.location.reload
      useEffect(() => {
        dispatch(Updateavatar(formData));
      }, []);
    };
  };
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  console.log({ userProfile });

  useEffect(() => {
    dispatch(getUserProfileAPi());
  }, []);

  return (
    <div>
      <div className="2 xl:max-w-7xl mx-auto py-24 pt-28 flex justify-center">
        <div className="border-solid border-[5px] w-1/4 pt-10 rounded-xl">
          <div className="flex flex-col  items-center">
            <div className=" mt-10   mx-auto">
              <img
                className="h-36 w-36 rounded-full"
                src={avatar || userLogin?.avatar}
                alt=""
              />
            </div>
            <input accept="image/png,image/jpeg,image/gif" 
             ref={fileRef}
              type="file"
              name=""
              onChange={handleChangeAvatar}
              className="hidden"
              id=""
            />
            <p
              onClick={() => fileRef.current.click()}
              className="text-white rounded-md text-center mt-3 hover:bg-red-400 transition-all duration-300 cursor-pointer  p-3 inline-block mx-auto"
              style={{ border: "1px solid #ff385c" }}
            >
              Đổi ảnh đại diện
            </p>
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
              <h1>{userProfile?.email} - Đã xác nhận</h1>
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
              Xin Chào, tôi là {userProfile?.name}
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
                  <span>{userProfile?.name}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Giới tính :{" "}
                  </span>
                  <span>{userProfile?.gender ? "Nam" : "Nữ"}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Ngày sinh :
                  </span>
                  <span>
                    {dayjs(userProfile?.birthday).format("DD/MM/YYYY")}
                  </span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Email :
                  </span>
                  <span>{userProfile?.email}</span>
                </p>
                <p className="text-base">
                  <span
                    className=" font-medium inline-block"
                    style={{ width: "100px" }}
                  >
                    Điện thoại :
                  </span>
                  <span>{userProfile?.phone}</span>
                </p>
              </div>
            </div>
            <ModalProfile />
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
          <RoomItem />
        </div>
      </div>
    </div>
  );
}
