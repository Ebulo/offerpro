import { Box } from "@mui/material";
import OfferCard, { HistoryCard } from "./OfferCard";
// import { Router } from "next/router";
import { useRouter } from "next/navigation";
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
// "1": "Click on the claim button at bottom to start the offer.",
// "2": "You will be redirected to the creator's social media page.",
// "3": "Follow the creator on social media.",
// "4": "Take the screenshot to verify that you have followed the creator.",
// "5": "Come back and click over upload button to upload the screenshot.",
// "6": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
// }`,
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
//     id: 102,
//     name: "Watch ABC Video",
//     offerImage:
//       "https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?w=1024",
//     enabled: true,
//     offerLink: "https://example.com/abc_offer",
//     offerType: {
//       id: 2,
//       name: "Watch and Earn",
//       description: `{
// "1": "Click on the claim button at bottom to start the offer.",
// "2": "You will be redirected to the creator's social media page.",
// "3": "Follow the creator on social media.",
// "4": "Take the screenshot to verify that you have followed the creator.",
// "5": "Come back and click over upload button to upload the screenshot.",
// "6": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
// }`,
//       imageUrl:
//         "https://images.nightcafe.studio/jobs/QOIBpmgO1h2gtkqR0N2U/QOIBpmgO1h2gtkqR0N2U--1--jyu5l.jpg?tr=w-1600,c-at_max",
//       estTimeToComplete: "10 min",
//       createdOn: "2024-01-02T12:00:00Z",
//       updatedAt: "2024-01-12T12:00:00Z",
//     },
//     estTime: "10 min",
//     target: 300,
//     completion: 150,
//     cpc: "0.08",
//     rewardCoins: 80,
//     status: "active",
//   },
//   {
//     id: 102,
//     name: "Watch ABC Video",
//     offerImage:
//       "https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?w=1024",
//     enabled: true,
//     offerLink: "https://example.com/abc_offer",
//     offerType: {
//       id: 2,
//       name: "Watch and Earn",
//       description: `{
// "1": "Click on the claim button at bottom to start the offer.",
// "2": "You will be redirected to the creator's social media page.",
// "3": "Follow the creator on social media.",
// "4": "Take the screenshot to verify that you have followed the creator.",
// "5": "Come back and click over upload button to upload the screenshot.",
// "6": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
// }`,
//       imageUrl:
//         "https://images.nightcafe.studio/jobs/QOIBpmgO1h2gtkqR0N2U/QOIBpmgO1h2gtkqR0N2U--1--jyu5l.jpg?tr=w-1600,c-at_max",
//       estTimeToComplete: "10 min",
//       createdOn: "2024-01-02T12:00:00Z",
//       updatedAt: "2024-01-12T12:00:00Z",
//     },
//     estTime: "10 min",
//     target: 300,
//     completion: 150,
//     cpc: "0.08",
//     rewardCoins: 80,
//     status: "active",
//   },
//   {
//     id: 102,
//     name: "Watch ABC Video",
//     offerImage:
//       "https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?w=1024",
//     enabled: true,
//     offerLink: "https://example.com/abc_offer",
//     offerType: {
//       id: 2,
//       name: "Watch and Earn",
//       description: `{
// "1": "Click on the claim button at bottom to start the offer.",
// "2": "You will be redirected to the creator's social media page.",
// "3": "Follow the creator on social media.",
// "4": "Take the screenshot to verify that you have followed the creator.",
// "5": "Come back and click over upload button to upload the screenshot.",
// "6": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
// }`,
//       imageUrl:
//         "https://images.nightcafe.studio/jobs/QOIBpmgO1h2gtkqR0N2U/QOIBpmgO1h2gtkqR0N2U--1--jyu5l.jpg?tr=w-1600,c-at_max",
//       estTimeToComplete: "10 min",
//       createdOn: "2024-01-02T12:00:00Z",
//       updatedAt: "2024-01-12T12:00:00Z",
//     },
//     estTime: "10 min",
//     target: 300,
//     completion: 150,
//     cpc: "0.08",
//     rewardCoins: 80,
//     status: "active",
//   },
// ];

const history = [
  {
    id: 101,
    name: "Review XYZ App",
    offerImage:
      "https://cdn.shopify.com/s/files/1/2316/3287/articles/crystal_castle_copy_480x540_crop_center.jpg?v=1615922870",
    enabled: true,
    offerLink: "https://example.com/xyz_offer",
    offerType: {
      id: 1,
      name: "Review and Earn",
      description:
        "Download an app, use it, review it with a 5-star rating, and upload a screenshot.",
      imageUrl:
        "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
      estTimeToComplete: "5 min",
      createdOn: "2024-01-01T12:00:00Z",
      updatedAt: "2024-01-10T12:00:00Z",
    },
    estTime: "5 min",
    target: 500,
    completion: 250,
    cpc: "0.05",
    rewardCoins: 5000,
    status: "active",
  },
  {
    id: 102,
    name: "Watch ABC Video",
    offerImage:
      "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
    enabled: true,
    offerLink:
      "https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?w=1024",
    offerType: {
      id: 2,
      name: "Watch and Earn",
      description:
        "Watch a YouTube video for a specified duration and like it.",
      imageUrl:
        "https://www.pcworld.com/wp-content/uploads/2022/09/mhachman_a_castle_on_an_asteroid_floating_through_space_2315526d-252b-40df-9a6d-eeb00aed612f.png?w=1024",
      estTimeToComplete: "10 min",
      createdOn: "2024-01-02T12:00:00Z",
      updatedAt: "2024-01-12T12:00:00Z",
    },
    estTime: "10 min",
    target: 300,
    completion: 150,
    cpc: "0.08",
    rewardCoins: 80000,
    status: "active",
  },
];

const OfferList = ({ offers }: { offers: Offer[] }) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {offers.map((offer, index) => (
        <OfferCard
          key={index}
          offerDetails={offer}
          onClick={() => {
            console.log("hey aayyyyyyyyyyyy");
            router.push(`/detail/${offer.id}/`);
          }}
        />
      ))}
    </Box>
  );
};
export default OfferList;

export const HistoryList: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {history.map((offer, index) => (
        <HistoryCard key={index} offerDetails={offer} />
      ))}
    </Box>
  );
};
