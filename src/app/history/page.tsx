"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchHistory } from "@/services/api";
// import Tabs from "@/components/Tabs";
import styles from "./history.module.css";
import TopHeader from "@/components/TopHeader";
// import OngoingOffersCarousel from "@/components/offer/OngoingOffer";
import BottomNavBar from "@/components/botomNavBar/BottomNavBar";
import Loader from "@/components/loader/Loader";
import HistoryMain from "@/components/history/HistoryMain";
import { getQueryParams } from "@/services/getQueryParams";
import NoOffersAvailable from "@/components/noOffers/NoOffer";
import { Postback } from "@/types/Postback";

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
  const [history, setHistory] = useState<Postback[]>([]);
  const [loading, setLoading] = useState(false);

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

    const getHistory = async () => {
      setLoading(true);
      try {
        const data = await fetchHistory(queryParams, "");
        setHistory(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      } finally {
        setLoading(false);
      }
    };

    getHistory();
  }, [searchParams]);

  if (loading) return <Loader />;

  if (!getQueryParams() || history.length == 0)
    return (
      <NoOffersAvailable
        title="No History!"
        subtitle="It seems like you have not completed any offers. Check offers tab to check available offers."
      />
    );

  // return <Tabs offers={offers} />;
  // return <OngoingOffersCarousel offers={offers} />;
  return <HistoryMain history={history} />;
}
