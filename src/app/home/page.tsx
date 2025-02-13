"use client";
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

import styles from "./home.module.css";
import { useQueryParams } from "@/hooks/useQueryParams";
import { Offer } from "@/types/Offer";
import { useEffect, useState } from "react";
import { fetchTasks } from "@/services/api";
import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";

export default function Home() {
  const queryParams = useQueryParams();
  const [offers, setOffers] = useState<Offer[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      if (!queryParams) return;
      try {
        const data = await fetchTasks(queryParams);
        console.log("Offers Data:", data);
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    fetchOffers();
  }, [queryParams]); // Fetch when queryParams is available

  return (
    <div className={styles.main_content}>
      <div className={styles.headers}>
        <Banner />
        <Tabs offers={offers} />
      </div>
    </div>
  );
}
