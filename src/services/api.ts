// http://localhost:3000/?uemail=admin@gmail.com&ad_id=123e4567-e89b-12d3-a456-426614174000&uid=huihi79h78ytfy&aid=1

import { QueryParams } from "@/hooks/useQueryParams";
import { parseOfferList } from "@/types/Offer";

const BASE_URL = "https://server.offerpro.io/api";

export const fetchTasks = async (params: QueryParams) => {
  const url = `${BASE_URL}/tasks/?ordering=cpc`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_email: params.userEmail,
      advertising_id: params.advertisingId,
      user_id: params.userId,
      app_id: params.appId,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  return parseOfferList(data);
};
