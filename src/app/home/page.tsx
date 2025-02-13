"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchTasks } from "@/services/api";
import { Offer } from "@/types/Offer";
import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div className={styles.main_content}>
      <div className={styles.headers}>
        <Banner />
        <Suspense fallback={<p>Loading offers...</p>}>
          <OffersComponent />
        </Suspense>
      </div>
    </div>
  );
}

function OffersComponent() {
  const searchParams = useSearchParams();
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
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
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOffers();
  }, [searchParams]);

  return <Tabs offers={offers} />;
}
