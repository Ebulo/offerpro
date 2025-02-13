// import styles from "./page.module.css";
// import Home from "./home/page";

// export default function Main() {
//   return (
// <div className={styles.page}>
//   <Home />
// </div>
//   );
// }

"use client";

import styles from "./page.module.css";
// import { useQueryParams } from "@/hooks/useQueryParams";
// import { useFetchTasks } from "@/hooks/useFetchTasks";
// import { Offer } from "@/types/Offer";
// import { useEffect, useState } from "react";
// import { fetchTasks } from "@/services/api";
import Home from "./home/page";

export default function Main() {
  // const queryParams = useQueryParams();
  // // const { data: offers, isLoading, error } = useFetchTasks(queryParams);
  // const [offers, setOffers] = useState<Offer[]>([]);

  // const fetchOffers = async () => {
  //   // offers = await useFetchTasks(queryParams);
  //   console.log("Offers Data: ", { ...queryParams });
  //   if (!queryParams) return;
  //   const data = await fetchTasks(queryParams);
  //   console.log("Offers Data: ", data);
  //   if (data) setOffers(data);
  // };

  // fetchOffers();

  // useEffect(() => {
  //   if (offers.length == 0) fetchOffers();
  // }, []);

  // if (isLoading) return <p>Loading offers...</p>;
  // if (error) return <p>Error fetching offers</p>;
  // console.log(offers, "OFFERS[][][][]");

  return (
    <div className={styles.page}>
        <Home />
    </div>
  );
}
