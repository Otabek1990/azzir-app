import React from "react";
import Carousel from "react-material-ui-carousel";
import CarouselComponent from "../Carousel/Carousel";
import { carouselDatas } from "../../datas/carouselDatas";
function Banner(props) {

  return (
    <Carousel indicators={false} interval={2000}>
      {carouselDatas.map((item, i) => (
        <CarouselComponent key={i} item={item} />
      ))}
    </Carousel>
  );
}
export default Banner;
