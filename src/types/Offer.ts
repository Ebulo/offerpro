export type Offer = {
  id: number;
  name: string;
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

export const parseOfferType = (data: any): OfferType => {
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

export const parseOffer = (data: any): Offer => {
  return {
    id: data.id,
    name: data.name,
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
  };
};

export const parseOfferList = (data: any): Offer[] => {
  return data.results.map((offer: any) => parseOffer(offer));
};

export const toJsonOffer = (offer: Offer): any => {
  return {
    id: offer.id,
    name: offer.name,
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
  };
};
