// "use client";
// "use client";

// import styles from "./home.module.css";
// import { useQueryParams } from "@/hooks/useQueryParams";
// // import { useFetchTasks } from "@/hooks/useFetchTasks";
// import { Offer } from "@/types/Offer";
// import { Suspense, useEffect, useState } from "react";
// import { fetchTasks } from "@/services/api";
// import Banner from "@/components/Banner";
// import Tabs from "@/components/Tabs";

// export default function Home() {
//   const queryParams = useQueryParams();
//   // const { data: offers, isLoading, error } = useFetchTasks(queryParams);
//   const [offers, setOffers] = useState<Offer[]>([]);

//   const fetchOffers = async () => {
//     // offers = await useFetchTasks(queryParams);
//     console.log("Offers Data: ", { ...queryParams });
//     if (!queryParams) return;
//     const data = await fetchTasks(queryParams);
//     console.log("Offers Data: ", data);
//     if (data) setOffers(data);
//   };

//   fetchOffers();

//   useEffect(() => {
//     if (offers.length == 0) fetchOffers();
//   }, []);

//   // if (isLoading) return <p>Loading offers...</p>;
//   // if (error) return <p>Error fetching offers</p>;
//   console.log(offers, "OFFERS[][][][]");

//   return (
//     <>
//       <Suspense fallback={<p>Loading...</p>}>
//         <div className={styles.main_content}>
//           <div className={styles.headers}>
//             <Banner />
//             <Tabs offers={offers} />
//           </div>
//         </div>
//       </Suspense>
//     </>
//   );
// }
// "use client";

// import { useSearchParams } from "next/navigation";
// import { Suspense, useEffect, useState } from "react";
// import { fetchTasks } from "@/services/api";
// import { Offer } from "@/types/Offer";
// import Banner from "@/components/Banner";
// import Tabs from "@/components/Tabs";
// import styles from "./home.module.css";

// export default function Home() {
//   const searchParams = useSearchParams();
//   const [offers, setOffers] = useState<Offer[]>([]);

//   useEffect(() => {
//     const userEmail = searchParams.get("uemail") ?? "";
//     const advertisingId = searchParams.get("ad_id") ?? "";
//     const userId = searchParams.get("uid") ?? "";
//     const appId = Number(searchParams.get("aid")) || 1;

//     if (!userEmail || !advertisingId || !userId) return;

//     const fetchOffers = async () => {
//       try {
//         const data = await fetchTasks({
//           userEmail,
//           advertisingId,
//           userId,
//           appId,
//         });
//         setOffers(data);
//       } catch (error) {
//         console.error("Failed to fetch offers:", error);
//       }
//     };

//     fetchOffers();
//   }, [searchParams]);

//   return (
//     <Suspense>
//       <div className={styles.main_content}>
//         <div className={styles.headers}>
//           <Banner />
//           <Tabs offers={offers} />
//         </div>
//       </div>
//     </Suspense>
//   );
// }

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
        {/* ✅ Wrapping OffersComponent inside Suspense */}
        <Suspense fallback={<p>Loading offers...</p>}>
          <OffersComponent />
        </Suspense>
      </div>
    </div>
  );
}

// ✅ Move useSearchParams into a separate component
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
