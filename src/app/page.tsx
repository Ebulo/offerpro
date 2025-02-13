"use client";

import styles from "./page.module.css";
import Home from "./home/page";
import { Suspense } from "react";

export default function Main() {
  return (
    <div className={styles.page}>
      <Suspense fallback={<p>Loading...</p>}>
        <Home />
      </Suspense>
    </div>
  );
}
