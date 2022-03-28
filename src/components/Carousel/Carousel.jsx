import React from "react";
import { Paper} from "@mui/material";
import "./Carousel.css";

function CarouselComponent(props) {
  return (
    <Paper className="carousel_paper" >
   <img className="banner_img" src={props.item.image} alt={"banner"}/>

    </Paper>
  );
}

export default CarouselComponent;

// {/* <video className='videoTag' width={"100%"} autoPlay loop muted>
//     <source src={props.item.video} type='video/mp4' />
// </video> */}