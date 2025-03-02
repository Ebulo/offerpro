import { Postback } from "./Postback";

export type Offer = {
  id: number;
  name: string;
  description?: string;
  offerImage: string;
  enabled: boolean;
  offerLink: string;
  offerType: OfferType;
  estTime: string;
  target: number;
  completion: number;
  cpc: string;
  rewardCoins: number;
  status?: string;
  source?: string;
};

export type OfferType = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  estTimeToComplete: string;
  createdOn: string;
  updatedAt: string;
};

export type QueryParams = {
  // userEmail: string;
  // advertisingId: string;
  // userId: string;
  // appId: number;
  enc: string;
};

export type ApiOfferType = {
  id: number;
  name: string;
  description: string;
  image_url: string;
  est_time_to_complete: string;
  created_on: string;
  updated_at: string;
};

export type ApiOffer = {
  id: number;
  name: string;
  description?: string;
  offer_image: string;
  enabled: boolean;
  offer_link: string;
  task_type: ApiOfferType;
  est_time: string;
  target: number;
  completion: number;
  cpc: string;
  reward_coins: number;
  status?: string;
  source?: string;
};

type ApiOfferList = {
  count?: number;
  results: ApiOffer[];
  next?: string;
  previous?: string;
};

export const parseOfferType = (data: ApiOfferType): OfferType => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    imageUrl: data.image_url,
    estTimeToComplete: data.est_time_to_complete,
    createdOn: data.created_on,
    updatedAt: data.updated_at,
  };
};

export const parseOffer = (data: ApiOffer): Offer => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    offerImage: data.offer_image,
    enabled: data.enabled,
    offerLink: data.offer_link,
    offerType: parseOfferType(data.task_type), // Mapping task_type to offerType
    estTime: data.est_time,
    target: data.target,
    completion: data.completion,
    cpc: data.cpc,
    rewardCoins: data.reward_coins,
    status: data.status ?? "Active", // Defaulting status if not present
    source: data.source ?? "offerpro",
  };
};

// export const parseOfferList = (data: ApiOfferList): Offer[] => {
//   return data.results.map((offer) => parseOffer(offer));
// };
export const parseOfferList = (data: ApiOfferList | ApiOffer[]): Offer[] => {
  if ("results" in data) {
    return data.results.map((offer) => parseOffer(offer));
  }
  return data.map((offer) => parseOffer(offer));
};

export const parseApiOfferList = (
  data: ApiOfferList | ApiOffer[]
): {
  count: number;
  results: Offer[];
  next: string | null;
  previous: string | null;
} => {
  if (Array.isArray(data)) {
    return {
      count: data.length,
      results: data.map((offer) => parseOffer(offer)), // Convert to Offer[]
      next: null,
      previous: null,
    };
  }

  return {
    count: data.count ?? 0,
    results: data.results.map((offer) => parseOffer(offer)), // Convert to Offer[]
    next: data.next ?? null,
    previous: data.previous ?? null,
  };
};

export const toJsonOffer = (offer: Offer): ApiOffer => {
  return {
    id: offer.id,
    name: offer.name,
    description: offer.description,
    offer_image: offer.offerImage,
    enabled: offer.enabled,
    offer_link: offer.offerLink,
    task_type: {
      id: offer.offerType.id,
      name: offer.offerType.name,
      description: offer.offerType.description,
      est_time_to_complete: offer.offerType.estTimeToComplete,
      image_url: offer.offerType.imageUrl,
      created_on: offer.offerType.createdOn,
      updated_at: offer.offerType.updatedAt,
    },
    est_time: offer.estTime,
    target: offer.target,
    completion: offer.completion,
    cpc: offer.cpc,
    reward_coins: offer.rewardCoins,
    status: offer.status,
    source: offer.source,
  };
};

export const fetchOffersFromPostbckList = (postbacks: Postback[]): Offer[] => {
  // Create a Set to store unique offer IDs and avoid duplicates
  const uniqueOffers = new Map<number, Offer>();

  postbacks.forEach((postback) => {
    if (!uniqueOffers.has(postback.offer.id)) {
      uniqueOffers.set(postback.offer.id, postback.offer);
    }
  });

  return Array.from(uniqueOffers.values());
};
