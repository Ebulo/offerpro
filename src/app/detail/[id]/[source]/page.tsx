"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailData from "@/components/detail/DetailData";
import { Button } from "@mui/material";
import styles from "../detail.module.css";
import { Offer } from "@/types/Offer";
import {
  checkPostback,
  claimPostback,
  // createPostback,
  fetchTaskById,
} from "@/services/api";
import Loader from "@/components/loader/Loader";
import NoOffersAvailable from "@/components/noOffers/NoOffer";
import { Send, Upload } from "@mui/icons-material";
import { getQueryParams } from "@/services/getQueryParams";
import { toast } from "react-toastify";

// import { fetchOfferById } from "@/services/api"; // Create an API function

const OfferDetail = () => {
  const { id, source } = useParams();
  const router = useRouter();
  const [offer, setOffer] = useState<Offer | null>(null);

  const [loading, setLoading] = useState(true);
  const [offerStatus, setOfferStatus] = useState<string | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      // console.warn("No file selected!");
      toast.warning("You must attach a screenshot of task", {
        position: "top-center",
      });
      return;
    }
    try {
      const queryParams = getQueryParams();
      const claim = await claimPostback(
        queryParams,
        parseInt(id as string),
        selectedFile
      );
      if (!claim) {
        return;
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to submit postback:", error);
    }
  };

  const getOfferDetails = async () => {
    // setLoading(true);
    const queryParams = getQueryParams();

    try {
      const data = await fetchTaskById(
        parseInt(id as string),
        queryParams,
        (source as string) ?? ""
      );
      setOffer(data);
    } catch (error) {
      console.error("Failed to fetch offer details:", error);
    } finally {
      setLoading(false);
    }
  };

  const checkPostbackDetails = async () => {
    // setLoading(true);
    const queryParams = getQueryParams();

    try {
      const data = await checkPostback(queryParams, parseInt(id as string));
      console.log("Here is the data of postbacks: ", data);
      setOfferStatus(data ? data.status : null);
      // setOffer(data);
      // setLoading(false);
    } catch (error) {
      console.error("Failed to fetch postback Details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleProceedToOffer = async () => {
    console.log("Offer: ", offer);
    if (!offer?.offerLink) {
      console.warn("Offer link is missing!");
      toast.error("Offer Link is invalid, please check other offers", {
        position: "top-center",
      });
      return;
    }
    // if (!offerStatus) {
    //   try {
    //     const queryParams = getQueryParams();
    //     const pb = await createPostback(queryParams, parseInt(id as string));

    //     if (pb) setOfferStatus("ONGOING");
    //   } catch (error) {
    //     console.warn("Failed to create postback:", error);
    //     return;
    //   }
    // }
    window.open(offer.offerLink, "_blank");
  };

  const callFromUseEffect = async () => {
    setLoading(true);
    await getOfferDetails();
    await checkPostbackDetails();
    setLoading(false);
  };

  useEffect(() => {
    if (!id) return;
    callFromUseEffect();
  }, [id]);

  if (loading) return <Loader />;

  if (!offer)
    if (!loading)
      return (
        <NoOffersAvailable
          title={"Offer not found"}
          subtitle={"This is not a valid offer, please check and confirm"}
        />
      );

  return (
    <div className={styles.main}>
      <div className={styles.detail_top}>
        <DetailBanner offer={offer!} />
        <DetailData offer={offer!} extras={{ beta: true }} />
      </div>
      {proceedToOfferBtn()}
    </div>
  );

  function proceedToOfferBtn() {
    return (
      <div className={styles.fixed_bottom_container}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/blur_bg_btn.png"
          alt="bg_img"
          className={styles.bg_img}
        />

        <Button
          style={{
            width: "95%",
            padding: "14px",
            borderRadius: "30px",
            background: "var(--primary-color)",
            color: "white",
            position: "relative",
            zIndex: "1",
          }}
          onClick={handleProceedToOffer}
        >
          Proceed To Offer
        </Button>
        {offerStatus == "ONGOING" ? submitButtonGroup() : ""}
      </div>
    );
  }

  function submitButtonGroup() {
    return (
      <div className={styles.submit_btn_cont}>
        <input
          type="file"
          onChange={handleFileUpload}
          className={styles.hidden_input}
        />
        <Button
          startIcon={<Upload />}
          style={{
            width: "85%",
            padding: "14px",
            borderRadius: "30px",
            border: selectedFile == null ? "none" : "1px solid #fff",
            background: "#4442",
            color: "white",
            position: "relative",
            zIndex: "1",
          }}
          onClick={() =>
            (
              document.querySelector(
                `.${styles.hidden_input}`
              ) as HTMLInputElement | null
            )?.click()
          }
        >
          {selectedFile == null ? "Upload" : "Reupload"}
        </Button>
        <Button
          startIcon={<Send />}
          style={{
            width: "60%",
            padding: "14px",
            borderRadius: "30px",
            background: "var(--text-color)",
            color: "var(--primary-color)",
            position: "relative",
            zIndex: "1",
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    );
  }
};

export default OfferDetail;
