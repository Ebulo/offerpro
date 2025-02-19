// import styles from "./detail.module.css";
// import DetailBanner from "@/components/detail/DetailBanner";
// import DetailData from "@/components/detail/DetailData";
// import { Button } from "@mui/material";

// const offerDummy = {
//   id: 101,
//   name: "Review XYZ App",
//   offerImage:
//     "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
//   enabled: true,
//   offerLink: "https://example.com/xyz_offer",
//   offerType: {
//     id: 1,
//     name: "Review and Earn",
//     description: `{
// "1": "Click on the claim button at bottom to start the offer.",
// "2": "You will be redirected to the creator's social media page.",
// "3": "Follow the creator on social media.",
// "4": "Take the screenshot to verify that you have followed the creator.",
// "5": "Come back and click over upload button to upload the screenshot.",
// "6": "Come back and click over upload button to upload the screenshot.",
// "7": "Come back and click over upload button to upload the screenshot.",
// "8": "Come back and click over upload button to upload the screenshot.",
// "9": "Come back and click over upload button to upload the screenshot.",
// "10": "Come back and click over upload button to upload the screenshot.",
// "11": "Come back and click over upload button to upload the screenshot.",
// "12": "Come back and click over upload button to upload the screenshot.",
// "13": "Come back and click over upload button to upload the screenshot.",
// "14": "Come back and click over upload button to upload the screenshot.",
// "15": "Come back and click over upload button to upload the screenshot.",
// "16": "Come back and click over upload button to upload the screenshot.",
// "17": "Come back and click over upload button to upload the screenshot.",
// "18": "Come back and click over upload button to upload the screenshot.",
// "19": "Come back and click over upload button to upload the screenshot.",
// "20": "Come back and click over upload button to upload the screenshot.",
// "21": "Come back and click over upload button to upload the screenshot.",
// "22": "Come back and click over upload button to upload the screenshot.",
// "23": "Come back and click over upload button to upload the screenshot.",
// "24": "Come back and click over upload button to upload the screenshot.",
// "25": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "26": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "27": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "28": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "29": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "30": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account.",
// "31": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
// }`,
//     imageUrl:
//       "https://cdn.pixabay.com/photo/2024/02/16/14/33/ai-generated-8577690_1280.jpg",
//     estTimeToComplete: "5 min",
//     createdOn: "2024-01-01T12:00:00Z",
//     updatedAt: "2024-01-10T12:00:00Z",
//   },
//   estTime: "5 min",
//   target: 500,
//   completion: 250,
//   cpc: "0.05",
//   rewardCoins: 50,
//   status: "active",
// };

// const OfferDetail = () => {
//   const offer = offerDummy;
//   console.log("Offer: ", offer);

//   return (
//     <div className={styles.main}>
//       <div className={styles.detail_top}>
//         <DetailBanner />
//         <DetailData offer={offer} />
//       </div>
// <div
//   style={{
//     width: "100%",
//     padding: "10px 10px 25px 10px",
//     height: "10vh",
//     position: "absolute",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     bottom: "0",
//     background: "#4442",
//     backdropFilter: "blur(1)",
//   }}
// >
//   <Button
//     style={{
//       width: "90%",
//       borderRadius: "10px",
//       background: "var(--primary-color)",
//       color: "var(--text-color)",
//     }}
//   >
//     Get 10000 Coins
//   </Button>
// </div>
//     </div>
//   );
// };

// export default OfferDetail;

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailData from "@/components/detail/DetailData";
import { Button } from "@mui/material";
import styles from "./detail.module.css";
import { Offer } from "@/types/Offer";
import { fetchTaskById } from "@/services/api";
import Loader from "@/components/loader/Loader";
import NoOffersAvailable from "@/components/noOffers/NoOffer";
// import { fetchOfferById } from "@/services/api"; // Create an API function

const OfferDetail = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<Offer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getOfferDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchTaskById(parseInt(id as string));
        setOffer(data);
        // setLoading(false);
      } catch (error) {
        console.error("Failed to fetch offer details:", error);
      } finally {
        setLoading(false);
      }
    };

    getOfferDetails();
  }, [id]);

  if (loading) return <Loader />;
  if (!offer) return <NoOffersAvailable />;

  return (
    <div className={styles.main}>
      <div className={styles.detail_top}>
        <DetailBanner offer={offer} />
        <DetailData offer={offer} />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          height: "12vh",
          position: "fixed",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/blur_bg_btn.png"
          alt="bg_img"
          style={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            height: "100% + 20px",
            objectFit: "cover",
            objectPosition: "top",
            zIndex: "-1",
          }}
        />

        <Button
          style={{
            width: "90%",
            padding: "14px",
            borderRadius: "30px",
            background: "var(--primary-color)",
            color: "white",
            position: "relative",
            zIndex: "1",
          }}
          onClick={() => {
            if (offer?.offerLink) {
              window.open(offer.offerLink, "_blank");
            } else {
              console.warn("Offer link is missing!");
            }
          }}
        >
          Proceed To Offer
        </Button>
      </div>
    </div>
  );
};

export default OfferDetail;
