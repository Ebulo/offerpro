import { Offer } from "@/types/Offer";
import styles from "./detail.module.css";
import DetailBanner from "@/components/detail/DetailBanner";
import DetailData from "@/components/detail/DetailData";

const offerDummy = {
  id: 101,
  name: "Review XYZ App",
  offerImage:
    "https://img.freepik.com/premium-photo/cute-tiny-robot-reading-illustration_899263-1681.jpg",
  enabled: true,
  offerLink: "https://example.com/xyz_offer",
  offerType: {
    id: 1,
    name: "Review and Earn",
    description: `{
"1": "Click on the claim button at bottom to start the offer.",
"2": "You will be redirected to the creator's social media page.",
"3": "Follow the creator on social media.",
"4": "Take the screenshot to verify that you have followed the creator.",
"5": "Come back and click over upload button to upload the screenshot.",
"6": "Click on Submit button. And wait for the offer to be approved. Once approved coins will be credited to your account."
}`,
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/02/16/14/33/ai-generated-8577690_1280.jpg",
    estTimeToComplete: "5 min",
    createdOn: "2024-01-01T12:00:00Z",
    updatedAt: "2024-01-10T12:00:00Z",
  },
  estTime: "5 min",
  target: 500,
  completion: 250,
  cpc: "0.05",
  rewardCoins: 50,
  status: "active",
};

const OfferDetail = ({ offer }: { offer: Offer }) => {
  offer = offerDummy;
  console.log("Offer: ", offer);

  return (
    <div className={styles.main}>
      <DetailBanner />
      <DetailData offer={offer} />
    </div>
  );
};

export default OfferDetail;
