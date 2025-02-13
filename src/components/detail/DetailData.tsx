import { Offer } from "@/types/Offer";
// import styles from "./details.module.css";
import { Box, Chip, Typography } from "@mui/material";

const DetailData = ({ offer }: { offer: Offer }) => {
  console.log("Offerrr: ", offer);

  return (
    <div>
      {/* <div style={{ height: "10%" }}> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: "10px",
          marginTop: "6px",
        }}
      >
        <Box
          component="img"
          src={offer.offerImage}
          alt="Offer"
          sx={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <Box sx={{ width: "80%", display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ color: "white", fontSize: "18px", fontWeight: "bold" }}
          >
            {/* Offer Name */}
            {offer.name}
          </Typography>
          <Typography sx={{ color: "gray", fontSize: "14px" }}>
            {offer.offerType.name}
          </Typography>
          <Chip
            label={offer.offerType.estTimeToComplete}
            sx={{
              bgcolor: "transparent",
              border: "1px solid var(--primary-color)",
              color: "var(--primary-color)",
              width: "fit-content",
              fontSize: "12px",
              height: "24px",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>
      <hr
        style={{
          backgroundColor: "#fff2",
          border: "none",
          height: "1px",
          margin: "10px 0",
          boxShadow: "0 10px 20px #4444",
        }}
      />
      {/* </div> */}
      {/* <div
        style={{ height: "60%", overflowX: "scroll", scrollbarWidth: "none" }}
      > */}
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          gap: 2,
          padding: "10px",
        }}
      >
        <Typography
          sx={{ color: "#fff", fontSize: "17px", fontWeight: "bold" }}
        >
          How to claim this offer?
        </Typography>
        <div>
          {Object.keys(JSON.parse(offer.offerType.description)).map(
            (index, step) => {
              if (step != 0)
                return (
                  <Typography
                    sx={{ color: "#fff", fontSize: "14px" }}
                    key={index}
                  >
                    {step}. {JSON.parse(offer.offerType.description)[step]}
                  </Typography>
                );
            }
          )}
        </div>
      </Box>
      {/* </div> */}
    </div>
  );
};

export default DetailData;
