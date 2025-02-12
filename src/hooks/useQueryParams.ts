"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export type QueryParams = {
  userEmail: string;
  advertisingId: string;
  userId: string;
  appId: number;
};

export const useQueryParams = (): QueryParams | null => {
  const searchParams = useSearchParams();
  const [params, setParams] = useState<QueryParams | null>(null);

  useEffect(() => {
    const userEmail = searchParams.get("uemail") ?? "";
    const advertisingId = searchParams.get("ad_id") ?? "";
    const userId = searchParams.get("uid") ?? "";
    const appId = Number(searchParams.get("aid")) || 1;

    if (userEmail && advertisingId && userId) {
      const storedParams: QueryParams = {
        userEmail,
        advertisingId,
        userId,
        appId,
      };
      localStorage.setItem("queryParams", JSON.stringify(storedParams));
      setParams(storedParams);
    } else {
      const stored = localStorage.getItem("queryParams");
      if (stored) setParams(JSON.parse(stored));
    }
  }, [searchParams]);

  return params;
};
