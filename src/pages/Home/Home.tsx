import React from "react";
import { CarouselHeader } from "../../components/Carousel/Carousel";
import CarouselSlick from "../../components/Carousel/CarouselSlick";


type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <CarouselHeader />
      <CarouselSlick />
    </>
  );
}
