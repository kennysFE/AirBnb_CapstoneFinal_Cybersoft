import classNames from "classnames";
import React, { useState } from "react";
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { MdHotelClass } from "react-icons/md";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import "./HeaderLocationItem.scss"


type Props = {
  location: any;
};

export default function HeaderLocationItem({ location }: Props) {
  const [isHeart, setIsHeart] = useState(false);
  const dispatch = useDispatch<AppDispatch>();


  return (
    <div
      onClick={() => {
      }}
      className="my-10 homeCard hover:-translate-y-2 hoverDn rounded-xl relative cursor-pointer h-full "
    >
      <div className="image">
      <img
          src={location.hinhAnh || `https://picsum.photos/300/300`}
          alt=""
          className="w-full h-full rounded-xl"
        />
      </div>
      <span style={{ position: "absolute", top: "4%", right: "4%" }}>
        <AiOutlineHeart
          onClick={() => {
            setIsHeart(!isHeart);
          }}
          className={classNames("text-xl text-rose-400", {
            hidden: isHeart,
          })}
        />
        <AiFillHeart
          onClick={() => {
            setIsHeart(!isHeart);
          }}
          className={classNames("text-xl text-rose-400", {
            hidden: !isHeart,
          })}
        />
      </span>
      <div className="" >
        <div className="flex justify-between mt-2 ">
          <h2 className="font-semibold text-base inline-block m-0">
            Khu du lịch {location.tenViTri || "Khu du lịch"} <MdHotelClass />
          </h2>
          <span>
            <AiTwotoneStar className='inline-block' />
            {location.id / 2 || 5}</span>
        </div>
        <p className="m-0 text-gray-500">Tỉnh {location.tinhThanh || " Tinh Thanh"}</p>
        <p className="m-0 text-gray-500">{location.quocGia || " Quoc Gia "}</p>
        <p className="mt-4">
          <span
            className="py-2 px-6 font-medium hoverDn hover:bg-rose-400 text-rose-500 hover:text-yellow-50 text-center text-primary rounded-md"
            style={{ border: "2px solid rgb(251 113 133)" }}
          >
            Xem phòng
          </span>
        </p>
      </div>
    </div>
  );
}
