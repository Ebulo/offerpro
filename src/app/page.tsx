"use client";

import styles from "./page.module.css";
import Home from "./home/page";
import { Suspense } from "react";

export default function Main() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className={styles.page}>
        <Home />
      </div>
    </Suspense>
  );
}
