import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import OngoingOfferCard from "./OngoingOfferCard";
import { Offer } from "@/types/Offer";

const OngoingOffersCarousel: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Adjust to fit layout
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ padding: "20px 5px", margin: "0 auto" }}>
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <OngoingOfferCard key={index} offer={offer} />
        ))}
      </Slider>
    </Box>
  );
};

export default OngoingOffersCarousel;
