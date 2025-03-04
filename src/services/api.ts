// http://localhost:3000/?uemail=admin@gmail.com&ad_id=123e4567-e89b-12d3-a456-426614174000&uid=huihi79h78ytfy&aid=1
// http://192.168.216.198:3000/?uemail=admin@gmail.com&ad_id=123e4567-e89b-12d3-a456-426614174000&uid=huihi79h78ytfy&aid=1

import {
  fetchOffersFromPostbckList,
  parseApiOfferList,
  parseOffer,
  // parseOfferList,
  QueryParams,
} from "@/types/Offer";
import { ApiBaseUrl } from "./config";
import { parsePostback, parsePostbackList } from "@/types/Postback";
import { toast } from "react-toastify";

const BASE_URL = ApiBaseUrl;
const VALIDATION_ERROR_TEXT =
  "Could not validate data, relaunch the link from source";
const UNDEFINED_ERROR = "Something went wrong";

// export const fetchTasks = async (params: QueryParams) => {
//   const url = `${BASE_URL}/tasks/list_tasks/?ordering=cpc&no_pagination=true`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       enc: params.enc,
//     }),
//   });

//   if (!response.ok) {
//     toast.error(UNDEFINED_ERROR);
//     throw new Error(`Failed to fetch tasks: ${response.statusText}`);
//   }

//   const data = await response.json();
//   // return parseOfferList(data);
//   return data;
// };

export const fetchTasks = async (params: QueryParams & { page?: number }) => {
  const url = `${BASE_URL}/tasks/list_tasks/?ordering=cpc&no_pagination=false&page=${
    params.page || 1
  }`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      enc: params.enc,
    }),
  });

  if (!response.ok) {
    toast.error(UNDEFINED_ERROR);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  return parseApiOfferList(data); // Returning full response to access `next`
};

// export const fetchTasks = async (params: QueryParams, nextPageUrl?: string) => {
//   const url =
//     nextPageUrl ??
//     `${BASE_URL}/tasks/list_tasks/?ordering=cpc&no_pagination=false`;

//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       enc: params.enc,
//     }),
//   });

//   if (!response.ok) {
//     toast.error(UNDEFINED_ERROR);
//     throw new Error(`Failed to fetch tasks: ${response.statusText}`);
//   }

//   const data = await response.json();
//   return {
//     offers: parseOfferList(data),
//     nextPageUrl: data.next, // Store the next page URL for pagination
//   };
// };

export const fetchTaskById = async (
  id: number,
  params: QueryParams,
  source?: string
) => {
  // const url = `${BASE_URL}/tasks/${id}/?app_id=${appId}`;
  const url =
    source == "offer18"
      ? `${BASE_URL}/tasks/offer18-detail/${id}/`
      : `${BASE_URL}/tasks/${id}/?enc=${params.enc}`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    toast.error(UNDEFINED_ERROR);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  return parseOffer(data);
};

export const fetchInitialisedOffers = async (
  params: QueryParams,
  status: string
) => {
  const url = `${BASE_URL}/postbacks/list_postback/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // user_id: params.userId,
      // app_id: params.appId,
      enc: params.enc,
      status: status,
    }),
  });

  // console.log("RESPONSE = ", response);

  if (!response.ok) {
    toast.error(VALIDATION_ERROR_TEXT);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("dtt: ", data);
  const postbacks = parsePostbackList(data);
  return fetchOffersFromPostbckList(postbacks);
};

export const fetchHistory = async (params: QueryParams, status: string) => {
  const url = `${BASE_URL}/postbacks/list_postback/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // user_id: params.userId,
      // app_id: params.appId,
      enc: params.enc,
      status: status,
    }),
  });

  if (!response.ok) {
    toast.error(VALIDATION_ERROR_TEXT);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  console.log("dtt: ", data);
  const postbacks = parsePostbackList(data);
  return postbacks;
};

export const fetchOngoingOffers = async (params: QueryParams) => {
  const url = `${BASE_URL}/postbacks/list_postback/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // user_id: params.userId,
      // app_id: params.appId,
      enc: params.enc,
      status: "ONGOING",
    }),
  });

  if (!response.ok) {
    toast.error(VALIDATION_ERROR_TEXT);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  const postbacks = parsePostbackList(data);
  return fetchOffersFromPostbckList(postbacks);
};

export const checkPostback = async (params: QueryParams, offerId: number) => {
  const url = `${BASE_URL}/postbacks/retrieve_postback/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // user_id: params.userId,
      // app_id: params.appId,
      enc: params.enc,
      offer_id: offerId,
    }),
  });

  if (response.status == 404) {
    return false;
  } else if (!response.ok) {
    toast.error(VALIDATION_ERROR_TEXT);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const data = await response.json();
  const postback = parsePostback(data);
  // console.log("RESPONSE = ", response, data, postback);
  return postback;
};

export const createPostback = async (
  params: QueryParams,
  offerId: number,
  offer18Details?: { is_offer18: boolean; offer18_cpc: string }
) => {
  const url = `${BASE_URL}/postbacks/claim/`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: !offer18Details
      ? JSON.stringify({
          offer: offerId,
          enc: params.enc,
        })
      : JSON.stringify({
          offer: offerId,
          enc: params.enc,
          is_offer18: offer18Details.is_offer18,
          offer18_cpc: parseFloat(offer18Details.offer18_cpc),
        }),
  });

  if (response.status == 201) return true;

  if (!response.ok) {
    toast.error(VALIDATION_ERROR_TEXT);
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  return false;
};

export const claimPostback = async (
  params: QueryParams,
  offerId: number,
  evidenceImage: File
) => {
  const url = `${BASE_URL}/postbacks/claim/`;
  const formData = new FormData();

  // Append fields
  formData.append("offer", offerId.toString());
  // formData.append("app_id", params.appId.toString());
  // formData.append("user_id", params.userId);
  // formData.append("user_email", params.userEmail);
  // formData.append("advertising_id", params.advertisingId);
  formData.append("enc", params.enc);

  // Append the image file
  formData.append("evidence_image", evidenceImage);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      toast.error(VALIDATION_ERROR_TEXT);
      throw new Error(`Failed to claim postback: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log("RESPONSE = ", data);
    return data;
  } catch (error) {
    toast.error(VALIDATION_ERROR_TEXT);
    console.error("Error submitting claim postback:", error);
    throw error;
  }
};
