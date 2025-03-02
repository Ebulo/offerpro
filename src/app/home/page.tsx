"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { fetchOngoingOffers, fetchTasks } from "@/services/api";
import { Offer } from "@/types/Offer";
import styles from "./home.module.css";
import TopHeader from "@/components/TopHeader";
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
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);

  const updateQueryInLocalStorage = () => {
    const enc = searchParams.get("enc") ?? "";
    if (!enc) return;

    const newQuery = {
      enc: enc,
    };

    console.log("logginf");

    localStorage.setItem("queryParams", JSON.stringify(newQuery));
    // localStorage.setItem("enc", JSON.stringify(newQuery));
  };

  useEffect(() => {
    updateQueryInLocalStorage();
    const queryParams = getQueryParams();
    if (!queryParams) return;

    const fetchOffers = async () => {
      setLoading(true);
      try {
        const data = await fetchTasks({
          enc: queryParams.enc,
        });
        console.log("Data of Offers in Main: ", data);

        setOffers(data.results);
        setNextPageUrl(data.next);
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
          enc: queryParams.enc,
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

  const loadMoreOffers = async () => {
    if (!nextPageUrl) return;
    setLoadingMore(true);

    try {
      const urlParams = new URLSearchParams(new URL(nextPageUrl).search);
      const page = urlParams.get("page") ? parseInt(urlParams.get("page")!) : 1;

      const data = await fetchTasks({
        enc: getQueryParams()?.enc || "",
        page: page,
      });

      setOffers((prevOffers) => [...prevOffers, ...data.results]); // Append new offers
      setNextPageUrl(data.next); // Update next page URL
    } catch (error) {
      console.error("Failed to load more offers:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading) return <Loader />;

  if (!getQueryParams() && offers.length == 0 && ongoingOffers.length == 0)
    return (
      <NoOffersAvailable
        title="No Offers!"
        subtitle="It seems like you have completed all the available offers. Please check back later."
      />
    );

  return (
    <OfferMain
      offers={offers}
      ongoingOffers={ongoingOffers}
      loadMoreOffers={loadMoreOffers}
      loadingMore={loadingMore}
      nextPageUrl={nextPageUrl}
    />
  );
}

// function OffersComponent() {
//   const searchParams = useSearchParams();
//   const [offers, setOffers] = useState<Offer[]>([]);
//   const [ongoingOffers, setOngoingOffers] = useState<Offer[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [nextPageUrl, setNextPageUrl] = useState<string | null>(null);
//   const observerRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const queryParams = getQueryParams();
//     if (!queryParams) return;

//     const fetchOffers = async (pageUrl?: string) => {
//       setLoading(true);
//       try {
//         const { offers: newOffers, nextPageUrl } = await fetchTasks(
//           { enc: queryParams.enc },
//           pageUrl
//         );
//         setOffers((prev) => [...prev, ...newOffers]); // Append new offers
//         setNextPageUrl(nextPageUrl); // Update nextPage URL
//       } catch (error) {
//         console.error("Failed to fetch offers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     const fetchOngoing = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchOngoingOffers({
//           enc: queryParams.enc,
//         });
//         setOngoingOffers(data);
//       } catch (error) {
//         console.error("Failed to fetch offers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     setOffers([]); // Reset offers on new search
//     fetchOffers();
//     fetchOngoing();
//   }, [searchParams]);

//   // Scroll Observer for Infinite Scrolling
//   useEffect(() => {
//     if (!nextPageUrl || loading) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           fetchTasks({ enc: getQueryParams()?.enc ?? "" }, nextPageUrl).then(
//             ({ offers: newOffers, nextPageUrl }) => {
//               setOffers((prev) => [...prev, ...newOffers]);
//               setNextPageUrl(nextPageUrl);
//             }
//           );
//         }
//       },
//       { threshold: 1.0 }
//     );

//     if (observerRef.current) observer.observe(observerRef.current);

//     return () => {
//       if (observerRef.current) observer.unobserve(observerRef.current);
//     };
//   }, [nextPageUrl, loading]);

//   return (
//     <div>
//       <OfferMain offers={offers} ongoingOffers={ongoingOffers} />
//       {loading && <Loader />}
//       {/* Scroll Observer Target */}
//       <div ref={observerRef} style={{ height: "10px" }} />
//     </div>
//   );
// }
