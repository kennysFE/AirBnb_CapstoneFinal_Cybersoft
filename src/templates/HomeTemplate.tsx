import React from "react";
import { Outlet } from "react-router-dom";
import PageFooter from "../components/Footer/PageFooter";
import HeaderPage from "../components/Header/HeaderPage";

type Props = {};

export default function HomeTemplate({}: Props) {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <PageFooter />
    </>
  );
}
