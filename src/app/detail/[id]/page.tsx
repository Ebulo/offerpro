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
  if (!offer) return <p>Offer not found.</p>;

  return (
    <div className={styles.main}>
      <div className={styles.detail_top}>
        <DetailBanner offer={offer} />
        <DetailData offer={offer} />
      </div>
      {/* <div className={styles.bottom_container}>
        <Button className={styles.claim_button}>
          Start this Offer
        </Button>
      </div> */}
      {/* <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px 10px 10px 10px",
          height: "10vh",
          overflow: "hidden",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: "0",
          // background: "#2231",
          // backdropFilter: "blur(4px)",
        }}
      >
        <img
          src="/img/blur_bg.png"
          alt="bg_img"
          className={styles.bg_img_shadow}
        />
        <div
          style={{
            width: "100%",
            padding: "10px 10px 10px 10px",
            height: "11vh",
            alignItems: "center",
            bottom: "0",
            // background: "#2233",
            // backdropFilter: "blur(4px)",
            // filter: "blur(10px)",
            position: "absolute",
            zIndex: "-1",
          }}
        ></div>

        <Button
          style={{
            width: "90%",
            padding: "11px",
            borderRadius: "30px",
            background: "var(--primary-color)",
            color: "white",
          }}
          onClick={() => {
            if (offer?.offerLink) {
              window.open(offer.offerLink, "_blank"); // Opens in a new tab
            } else {
              console.warn("Offer link is missing!");
            }
          }}
        >
          Proceed To Offer
        </Button>
      </div> */}
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "10px",
          height: "12vh", // Restricts the height
          position: "fixed",
          bottom: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // Prevents overflow of the image
        }}
      >
        {/* Background Image Below the Button */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/blur_bg_btn.png"
          alt="bg_img"
          style={{
            position: "absolute",
            bottom: "0", // Ensures image starts from the bottom
            width: "100%",
            height: "100% + 20px",
            objectFit: "cover", // Ensures full coverage
            objectPosition: "top", // Aligns the top (blurred part) correctly
            zIndex: "-1",
            // opacity: "0.6",
            // backdropFilter: "blur(10px)",
          }}
        />

        <Button
          style={{
            width: "90%",
            padding: "14px",
            borderRadius: "30px",
            background: "var(--primary-color)",
            color: "white",
            position: "relative", // Keeps button above the background
            zIndex: "1",
          }}
          onClick={() => {
            if (offer?.offerLink) {
              window.open(offer.offerLink, "_blank"); // Opens in a new tab
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
