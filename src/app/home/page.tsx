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
import NoOffersAvailable from "@/components/noOffers/NoOffer";

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
    // const userEmail = searchParams.get("uemail") ?? "";
    // const advertisingId = searchParams.get("ad_id") ?? "";
    // const userId = searchParams.get("uid") ?? "";
    // const appId = Number(searchParams.get("aid")) || 1;

    // if (!userEmail || !advertisingId || !userId) return;
    const queryParams = getQueryParams();
    if (!queryParams) return;

    const fetchOffers = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({
          userEmail: queryParams.userEmail,
          advertisingId: queryParams.advertisingId,
          userId: queryParams.userId,
          appId: queryParams.appId,
        });
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchOngoing = async () => {
      setLoading(true);
      try {
        const data = await fetchOngoingOffers({
          userEmail: queryParams.userEmail,
          advertisingId: queryParams.advertisingId,
          userId: queryParams.userId,
          appId: queryParams.appId,
        });
        console.log("Dataa: ", data);
        setOngoingOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOngoing();
    fetchOffers();
  }, [searchParams]);

  if (loading) return <Loader />;

  // if (!getQueryParams() && offers.length == 0 && ongoingOffers.length == 0)
  //   return (
  //     <NoOffersAvailable
  //       title="No Offers!"
  //       subtitle="It seems like you have completed all the available offers. Please check back later."
  //     />
  //   );

  return <OfferMain offers={offers} ongoingOffers={ongoingOffers} />;
}
