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
        <BottomNavBar />
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
    const userEmail = searchParams.get("uemail") ?? "";
    const advertisingId = searchParams.get("ad_id") ?? "";
    const userId = searchParams.get("uid") ?? "";
    const appId = Number(searchParams.get("aid")) || 1;

    if (!userEmail || !advertisingId || !userId) return;

    const fetchOffers = async () => {
      try {
        const data = await fetchTasks({
          userEmail,
          advertisingId,
          userId,
          appId,
        });
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOffers();
  }, [searchParams]);

  if (history.length == 0) return <Loader />;
  // return <Tabs offers={offers} />;
  // return <OngoingOffersCarousel offers={offers} />;
  return <HistoryMain history={history} />;
}
