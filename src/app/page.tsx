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
import { useQueryParams } from "@/hooks/useQueryParams";
// import { useFetchTasks } from "@/hooks/useFetchTasks";
import { Offer } from "@/types/Offer";
import { useEffect, useState } from "react";
import { fetchTasks } from "@/services/api";
import Home from "./home/page";

export default function Main() {
  const queryParams = useQueryParams();
  // const { data: offers, isLoading, error } = useFetchTasks(queryParams);
  const [offers, setOffers] = useState<Offer[]>([]);

  const fetchOffers = async () => {
    // offers = await useFetchTasks(queryParams);
    console.log("Offers Data: ", { ...queryParams });
    if (!queryParams) return;
    const data = await fetchTasks(queryParams);
    console.log("Offers Data: ", data);
    if (data) setOffers(data);
  };

  fetchOffers();

  useEffect(() => {
    if (offers.length == 0) fetchOffers();
  }, []);

  // if (isLoading) return <p>Loading offers...</p>;
  // if (error) return <p>Error fetching offers</p>;
  console.log(offers, "OFFERS[][][][]");

  return (
    // <div>
    //   <h1>Offer Wall</h1>
    //   {offers?.length ? (
    //     offers.map((offer: Offer) => (
    //       <div
    //         key={offer.id}
    //         style={{
    //           border: "1px solid #ccc",
    //           padding: "10px",
    //           marginBottom: "10px",
    //         }}
    //       >
    //         <h3>{offer.name}</h3>
    //         <img src={offer.offerImage} alt={offer.name} width={150} />
    //         <p>CPC: {offer.cpc}</p>
    //         <a href={offer.offerLink} target="_blank" rel="noopener noreferrer">
    //           View Offer
    //         </a>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No offers available.</p>
    //   )}
    // </div>
    <div className={styles.page}>
      <Home offers={offers} />
    </div>
  );
}
