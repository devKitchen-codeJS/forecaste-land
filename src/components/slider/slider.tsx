"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Typography } from "@mui/material";
import styles from "./slider.module.scss";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import arrowR from './'
import { useRef } from "react";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}>
      <KeyboardArrowRightIcon />
    </div>
  );
}
interface SliderRef {
  slickNext(): void;
  slickPrev(): void;
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}>
      <KeyboardArrowLeftIcon />
    </div>
  );
}

const CustomSlider = () => {
  const slider = useRef<SliderRef | null>(null);

  let settings = {
    dots: true,
    infinite: true,
    speed: 650,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <Box sx={{ display: "block !important" }} className={styles.wrapper}>
      {/* <button onClick={() => slider?.current?.slickPrev()}>Prev</button> */}

      <Slider {...settings} className={styles.slider}>
        <div className={styles.slide1}>
          <Typography className={styles.text}>
            Juniper is a great app for checking the weather. It's easy to use
            and has a beautiful interface. I love how it shows me the cloud
            patterns and predicts the weather for the next few days. It's like
            having a personal meteorologist in my pocket.
          </Typography>
          <Box className={styles.customer}>
            <Avatar alt='Remy Sharp' />
            <Typography className={styles.customer_name}>Monica</Typography>
          </Box>
        </div>
        <div className={styles.slide1}>
          <Typography className={styles.text}>
            Juniper is a great app for checking the weather. It's easy to use
            and has a beautiful interface. I love how it shows me the cloud
            patterns and predicts the weather for the next few days. It's like
            having a personal meteorologist in my pocket.
          </Typography>
          <Box className={styles.customer}>
            <Avatar alt='Remy Sharp' />
            <Typography className={styles.customer_name}>Monica</Typography>
          </Box>
        </div>
        <div className={styles.slide1}>
          <Typography className={styles.text}>
            Juniper is a great app for checking the weather. It's easy to use
            and has a beautiful interface. I love how it shows me the cloud
            patterns and predicts the weather for the next few days. It's like
            having a personal meteorologist in my pocket.
          </Typography>
          <Box className={styles.customer}>
            <Avatar alt='Remy Sharp' />
            <Typography className={styles.customer_name}>Monica</Typography>
          </Box>
        </div>
      </Slider>
      {/* <button onClick={() => slider?.current?.slickNext()}>Next</button> */}
    </Box>
  );
};

export default CustomSlider;
