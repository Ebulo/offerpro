// "use client";

// import Banner from "@/components/Banner";
// import Tabs from "@/components/Tabs";
// import styles from "./home.module.css";
// import { Offer } from "@/types/Offer";

// const Home = (offers: Offer[]) => {
// return (
//   <>
//     <div className={styles.main_content}>
//       <div className={styles.headers}>
//         <Banner />
//         <Tabs offers={offers} />
//       </div>
//     </div>
//   </>
// );
// };

// export default Home;
"use client";

import styles from "./home.module.css";
import { useQueryParams } from "@/hooks/useQueryParams";
// import { useFetchTasks } from "@/hooks/useFetchTasks";
import { Offer } from "@/types/Offer";
import { Suspense, useEffect, useState } from "react";
import { fetchTasks } from "@/services/api";
import Banner from "@/components/Banner";
import Tabs from "@/components/Tabs";

export default function Home() {
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

  // return (
  //   <div className={styles.page}>
  //     <Home offers={offers} />
  //   </div>
  // );
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <div className={styles.main_content}>
          <div className={styles.headers}>
            <Banner />
            <Tabs offers={offers} />
          </div>
        </div>
      </Suspense>
    </>
  );
}
