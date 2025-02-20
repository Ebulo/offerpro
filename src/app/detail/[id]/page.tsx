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
