"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTasks } from "@/services/api";
import { Offer } from "@/types/Offer";
// import Tabs from "@/components/Tabs";
import styles from "./history.module.css";
import TopHeader from "@/components/TopHeader";
// import OngoingOffersCarousel from "@/components/offer/OngoingOffer";
import BottomNavBar from "@/components/botomNavBar/BottomNavBar";
import Loader from "@/components/loader/Loader";
import HistoryMain from "@/components/history/HistoryMain";
import { getQueryParams } from "@/services/getQueryParams";
import NoOffersAvailable from "@/components/noOffers/NoOffer";

export default function History() {
  return (
    <div className={styles.main_content}>
      <div className={styles.headers}>
        <TopHeader />
      </div>
      <div className={styles.offers}>
        <Suspense fallback={<p>Loading offers...</p>}>
          <HistoryComponent />
        </Suspense>
      </div>
      <div className={styles.bottom_navbar}>
        <BottomNavBar defaultValue={1} />
      </div>
    </div>
  );
}

function HistoryComponent() {
  const searchParams = useSearchParams();
  const [history, setHistory] = useState<Offer[]>([]);

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

    const queryParams = getQueryParams();
    if (!queryParams) return;

    const fetchOffers = async () => {
      try {
        const data = await fetchTasks({
          userEmail: queryParams.userEmail,
          advertisingId: queryParams.advertisingId,
          userId: queryParams.userId,
          appId: queryParams.appId,
          // advertisingId,
          // userId,
          // appId,
        });
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOffers();
  }, [searchParams]);

  if (!getQueryParams()) return <NoOffersAvailable title="No History!" subtitle="It seems like you have not completed any offers. Check offers tab to check available offers." />

  if (history.length == 0) return <Loader />;
  // return <Tabs offers={offers} />;
  // return <OngoingOffersCarousel offers={offers} />;
  return <HistoryMain history={history} />;
}
