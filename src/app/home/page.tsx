"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchOngoingOffers, fetchTasks } from "@/services/api";
import { Offer } from "@/types/Offer";
// import Tabs from "@/components/Tabs";
import styles from "./home.module.css";
import TopHeader from "@/components/TopHeader";
// import OngoingOffersCarousel from "@/components/offer/OngoingOffer";
import OfferMain from "@/components/offer/OfferMain";
import BottomNavBar from "@/components/botomNavBar/BottomNavBar";
import Loader from "@/components/loader/Loader";
import { getQueryParams } from "@/services/getQueryParams";

export default function Home() {
  return (
    <div className={styles.main_content}>
      <div className={styles.headers}>
        <TopHeader />
      </div>
      <div className={styles.offers}>
        <Suspense fallback={<p>Loading offers...</p>}>
          <OffersComponent />
        </Suspense>
      </div>
      <div className={styles.bottom_navbar}>
        <BottomNavBar defaultValue={0} />
      </div>
    </div>
  );
}

function OffersComponent() {
  const searchParams = useSearchParams();
  const [offers, setOffers] = useState<Offer[]>([]);
  const [ongoingOffers, setOngoingOffers] = useState<Offer[]>([]);

  const updateQueryInLocalStorage = () => {
    const userEmail = searchParams.get("uemail") ?? "";
    const advertisingId = searchParams.get("ad_id") ?? "";
    const userId = searchParams.get("uid") ?? "";
    const appId = Number(searchParams.get("aid")) || null;

    if (!userEmail || !advertisingId || !userId || !appId) return;

    const newQuery = {
      userEmail: userEmail,
      advertisingId: advertisingId,
      userId: userId,
      appId: appId,
    };

    console.log("logginf");

    localStorage.setItem("queryParams", JSON.stringify(newQuery));
  };

  useEffect(() => {
    updateQueryInLocalStorage();
    // const userEmail = searchParams.get("uemail") ?? "";
    // const advertisingId = searchParams.get("ad_id") ?? "";
    // const userId = searchParams.get("uid") ?? "";
    // const appId = Number(searchParams.get("aid")) || 1;

    // if (!userEmail || !advertisingId || !userId) return;
    const queryParams = getQueryParams();
    if (!queryParams) return;

    const fetchOffers = async () => {
      try {
        const data = await fetchTasks({
          // userEmail,
          // advertisingId,
          // userId,
          // appId,
          userEmail: queryParams.userEmail,
          advertisingId: queryParams.advertisingId,
          userId: queryParams.userId,
          appId: queryParams.appId,
        });
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    const fetchOngoing = async () => {
      try {
        const data = await fetchOngoingOffers({
          userEmail: queryParams.userEmail,
          advertisingId: queryParams.advertisingId,
          userId: queryParams.userId,
          appId: queryParams.appId,
        });
        setOngoingOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOngoing();
    fetchOffers();
  }, [searchParams]);

  if (offers.length == 0 || ongoingOffers.length == 0) return <Loader />;
  // return <Tabs offers={offers} />;
  // return <OngoingOffersCarousel offers={offers} />;
  return <OfferMain offers={offers} ongoingOffers={ongoingOffers} />;
}
