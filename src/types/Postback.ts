import { ApiOffer, Offer, parseOffer, toJsonOffer } from "./Offer";

export type Postback = {
  id: number;
  rewardUsd: string;
  rewardCurrency: number;
  userId: string;
  userEmail: string;
  advertisingId: string;
  fullPostbackUrl: string;
  createdOn: string;
  updatedAt: string;
  postbackDelivered: boolean;
  status: string;
  retries: number;
  declineReason: string | null;
  appId: number;
  offer: Offer;
  transactionId?: string;
};

type ApiPostback = {
  id: number;
  reward_usd: string;
  reward_currency: number;
  user_id: string;
  user_email: string;
  advertising_id: string;
  full_postback_url: string;
  created_on: string;
  updated_at: string;
  postback_delivered: boolean;
  status: string;
  retries: number;
  decline_reason: string | null;
  app_id: number;
  offer: ApiOffer;
  transaction_id?: string;
};

type ApiPostbackList = {
  results: ApiPostback[];
};

export const parsePostback = (data: ApiPostback): Postback => {
  return {
    id: data.id,
    rewardUsd: data.reward_usd,
    rewardCurrency: data.reward_currency,
    userId: data.user_id,
    userEmail: data.user_email,
    advertisingId: data.advertising_id,
    fullPostbackUrl: data.full_postback_url,
    createdOn: data.created_on,
    updatedAt: data.updated_at,
    postbackDelivered: data.postback_delivered,
    status: data.status,
    retries: data.retries,
    declineReason: data.decline_reason,
    appId: data.app_id,
    offer: parseOffer(data.offer),
    transactionId: data.transaction_id,
  };
};

export const parsePostbackList = (data: ApiPostbackList): Postback[] => {
  return data.results.map((postback) => parsePostback(postback));
};

export const toJsonPostback = (postback: Postback): ApiPostback => {
  return {
    id: postback.id,
    reward_usd: postback.rewardUsd,
    reward_currency: postback.rewardCurrency,
    user_id: postback.userId,
    user_email: postback.userEmail,
    advertising_id: postback.advertisingId,
    full_postback_url: postback.fullPostbackUrl,
    created_on: postback.createdOn,
    updated_at: postback.updatedAt,
    postback_delivered: postback.postbackDelivered,
    status: postback.status,
    retries: postback.retries,
    decline_reason: postback.declineReason,
    app_id: postback.appId,
    offer: toJsonOffer(postback.offer),
    transaction_id: postback.transactionId,
  };
};
