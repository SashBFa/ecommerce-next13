import { Swiper, SwiperSlide } from "swiper/react";
import divan from "../../public/images/headSwiper/divan.jpg";
import lamp from "../../public/images/headSwiper/lamp.jpg";
import table from "../../public/images/headSwiper/table.jpg";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Image from "next/image";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const dataHead = [
  {
    title: "Oh, Hello Newness!",
    text: "Mid year sale",
    imgV: divan,
    imgH: "",
  },
  {
    title: "Best of the Best",
    text: "Mid year sale",
    imgV: lamp,
    imgH: "",
  },
  {
    title: "Now up to 70% off*",
    text: "Mid year sale",
    imgV: table,
    imgH: "",
  },
];

export default function HeadSwiper() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} loop className="h-96">
        {dataHead.map((swipe, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              src={swipe.imgV}
              alt="woman on screen"
              placeholder="blur"
              sizes="100%"
              fill
              className="object-cover -z-10"
            />
            <Box className="absolute w-full h-full bg-gradient-to-t from-dark/70 to-transparent -z-10" />
            <Box className="text-white flex flex-col items-center justify-center h-full w-full">
              <Typography variant="body1" className="text-3xl">
                {swipe.title}
              </Typography>
              <Typography variant="body1" className="text-2xl uppercase">
                {swipe.text}
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                className="hover:bg-primary hover:border-primary mt-8"
              >
                <b>Explore</b>
                <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-2" />
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
