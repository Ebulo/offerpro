import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import OngoingOfferCard from "./OngoingOfferCard";
import { Offer } from "@/types/Offer";

// const offers = [
//   {
//     id: 101,
//     name: "Review XYZ App",
//     offerImage:
//       "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
//     enabled: true,
//     offerLink: "https://example.com/xyz_offer",
//     offerType: {
//       id: 1,
//       name: "Review and Earn",
//       description: `{
//       "1": "Click on the claim button at bottom to start the offer.",
//       "2": "You will be redirected to the creator's social media page.",
//       "3": "Follow the creator on social media.",
//       "4": "Take the screenshot to verify that you have followed the creator.",
//       "5": "Come back and click over upload button to upload the screenshot.",
//       "6": "Come back and click over upload button to upload the screenshot.",
//       "7": "Come back and click over upload button to upload the screenshot.",
//       "8": "Come back and click over upload button to upload the screenshot.",
//       "9": "Come back and click over upload button to upload the screenshot.",
//       "10": "Come back and click over upload button to upload the screenshot.",
//       "11": "Come back and click over upload button to upload the screenshot.",
//       "12": "Come back and click over upload button to upload the screenshot.",
//       "13": "Come back and click over upload button to upload the screenshot.",
//       "14": "Come back and click over upload button to upload the screenshot.",
//       "15": "Come back and click over upload button to upload the screenshot.",
//       "16": "Come back and click over upload button to upload the screenshot.",
//       "17": "Come back and click over upload button to upload the screenshot.",
//       "18": "Come back and click over upload button to upload the screenshot.",
//       "19": "Come back and click over upload button to upload the screenshot.",
//       "20": "Come back and click over upload button to upload the screenshot.",
//       "21": "Come back and click over upload button to upload the screenshot.",
//       "22": "Come back and click over upload button to upload the screenshot.",
//       "23": "Come back and click over upload button to upload the screenshot.",
//       "24": "Come back and click over upload button to upload the screenshot.",
//       "25": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "26": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "27": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "28": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "29": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "30": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "31": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
//       }`,
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2024/02/16/14/33/ai-generated-8577690_1280.jpg",
//       estTimeToComplete: "5 min",
//       createdOn: "2024-01-01T12:00:00Z",
//       updatedAt: "2024-01-10T12:00:00Z",
//     },
//     estTime: "5 min",
//     target: 500,
//     completion: 250,
//     cpc: "0.05",
//     rewardCoins: 50,
//     status: "active",
//   },
//   {
//     id: 101,
//     name: "Review XYZ App",
//     offerImage:
//       "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
//     enabled: true,
//     offerLink: "https://example.com/xyz_offer",
//     offerType: {
//       id: 1,
//       name: "Review and Earn",
//       description: `{
//       "1": "Click on the claim button at bottom to start the offer.",
//       "2": "You will be redirected to the creator's social media page.",
//       "3": "Follow the creator on social media.",
//       "4": "Take the screenshot to verify that you have followed the creator.",
//       "5": "Come back and click over upload button to upload the screenshot.",
//       "6": "Come back and click over upload button to upload the screenshot.",
//       "7": "Come back and click over upload button to upload the screenshot.",
//       "8": "Come back and click over upload button to upload the screenshot.",
//       "9": "Come back and click over upload button to upload the screenshot.",
//       "10": "Come back and click over upload button to upload the screenshot.",
//       "11": "Come back and click over upload button to upload the screenshot.",
//       "12": "Come back and click over upload button to upload the screenshot.",
//       "13": "Come back and click over upload button to upload the screenshot.",
//       "14": "Come back and click over upload button to upload the screenshot.",
//       "15": "Come back and click over upload button to upload the screenshot.",
//       "16": "Come back and click over upload button to upload the screenshot.",
//       "17": "Come back and click over upload button to upload the screenshot.",
//       "18": "Come back and click over upload button to upload the screenshot.",
//       "19": "Come back and click over upload button to upload the screenshot.",
//       "20": "Come back and click over upload button to upload the screenshot.",
//       "21": "Come back and click over upload button to upload the screenshot.",
//       "22": "Come back and click over upload button to upload the screenshot.",
//       "23": "Come back and click over upload button to upload the screenshot.",
//       "24": "Come back and click over upload button to upload the screenshot.",
//       "25": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "26": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "27": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "28": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "29": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "30": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "31": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
//       }`,
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2024/02/16/14/33/ai-generated-8577690_1280.jpg",
//       estTimeToComplete: "5 min",
//       createdOn: "2024-01-01T12:00:00Z",
//       updatedAt: "2024-01-10T12:00:00Z",
//     },
//     estTime: "5 min",
//     target: 500,
//     completion: 250,
//     cpc: "0.05",
//     rewardCoins: 50,
//     status: "active",
//   },
//   {
//     id: 101,
//     name: "Review XYZ App",
//     offerImage:
//       "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
//     enabled: true,
//     offerLink: "https://example.com/xyz_offer",
//     offerType: {
//       id: 1,
//       name: "Review and Earn",
//       description: `{
//       "1": "Click on the claim button at bottom to start the offer.",
//       "2": "You will be redirected to the creator's social media page.",
//       "3": "Follow the creator on social media.",
//       "4": "Take the screenshot to verify that you have followed the creator.",
//       "5": "Come back and click over upload button to upload the screenshot.",
//       "6": "Come back and click over upload button to upload the screenshot.",
//       "7": "Come back and click over upload button to upload the screenshot.",
//       "8": "Come back and click over upload button to upload the screenshot.",
//       "9": "Come back and click over upload button to upload the screenshot.",
//       "10": "Come back and click over upload button to upload the screenshot.",
//       "11": "Come back and click over upload button to upload the screenshot.",
//       "12": "Come back and click over upload button to upload the screenshot.",
//       "13": "Come back and click over upload button to upload the screenshot.",
//       "14": "Come back and click over upload button to upload the screenshot.",
//       "15": "Come back and click over upload button to upload the screenshot.",
//       "16": "Come back and click over upload button to upload the screenshot.",
//       "17": "Come back and click over upload button to upload the screenshot.",
//       "18": "Come back and click over upload button to upload the screenshot.",
//       "19": "Come back and click over upload button to upload the screenshot.",
//       "20": "Come back and click over upload button to upload the screenshot.",
//       "21": "Come back and click over upload button to upload the screenshot.",
//       "22": "Come back and click over upload button to upload the screenshot.",
//       "23": "Come back and click over upload button to upload the screenshot.",
//       "24": "Come back and click over upload button to upload the screenshot.",
//       "25": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "26": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "27": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "28": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "29": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "30": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
//       "31": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
//       }`,
//       imageUrl:
//         "https://cdn.pixabay.com/photo/2024/02/16/14/33/ai-generated-8577690_1280.jpg",
//       estTimeToComplete: "5 min",
//       createdOn: "2024-01-01T12:00:00Z",
//       updatedAt: "2024-01-10T12:00:00Z",
//     },
//     estTime: "5 min",
//     target: 500,
//     completion: 250,
//     cpc: "0.05",
//     rewardCoins: 50,
//     status: "active",
//   },
// ];

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
