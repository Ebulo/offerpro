// http://localhost:3000/?uemail=admin@gmail.com&ad_id=123e4567-e89b-12d3-a456-426614174000&uid=huihi79h78ytfy&aid=1
// http://192.168.216.198:3000/?uemail=admin@gmail.com&ad_id=123e4567-e89b-12d3-a456-426614174000&uid=huihi79h78ytfy&aid=1

import { parseOffer, parseOfferList, QueryParams } from "@/types/Offer";
import { ApiBaseUrl } from "./config";

const BASE_URL = ApiBaseUrl;

export const fetchTasks = async (params: QueryParams) => {
  const url = `${BASE_URL}/tasks/list_tasks/?ordering=cpc&no_pagination=false`;

  console.log("Hey iuhcuishiuce", {
    user_email: params.userEmail,
    advertising_id: params.advertisingId,
    user_id: params.userId,
    app_id: params.appId,
  });

  const response = await fetch(url, {
    method: "POST",
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

  console.log("RESPONSE = ", response);

  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  return parseOfferList(data);
};

export const fetchTaskById = async (id: number) => {
  const url = `${BASE_URL}/tasks/${id}/`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log("RESPONSE = ", response);

  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  return parseOffer(data);
};
