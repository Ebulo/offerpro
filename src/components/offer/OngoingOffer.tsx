// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Box } from "@mui/material";
// import OngoingOfferCard from "./OngoingOfferCard";
// import { Offer } from "@/types/Offer";

// const OngoingOffersCarousel: React.FC<{ offers: Offer[] }> = ({ offers }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1.01, // Adjust to fit layout
//     slidesToScroll: 1,
//     arrows: false,
//     autoPlay: true,
//     autoPlaySpeed: 2,
//     rows: 1,
//     center: true,
//   };

//   return (
//     <Box sx={{ padding: "20px 5px", margin: "0 auto" }}>
//       <Slider {...settings}>
//         {offers.map((offer, index) => (
//           <OngoingOfferCard key={index} offer={offer} />
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default OngoingOffersCarousel;

import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import OngoingOfferCard from "./OngoingOfferCard";
import { Offer } from "@/types/Offer";

const OngoingOffersCarousel: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  return (
    <Box sx={{ padding: "20px 0px", margin: "0 auto", maxWidth: "100%" }}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10} // Show part of next/previous cards
        slidesPerView={1.0} // Adjusts how much of the next slide is visible
        centeredSlides={true} // Keeps the active slide in the center
        autoplay={{
          delay: 3000, // 4 seconds per slide
          disableOnInteraction: false,
        }}
        // pagination={{ clickable: true }}
        loop={true} // Infinite loop
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <OngoingOfferCard offer={offer} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default OngoingOffersCarousel;
