import { Offer } from "@/types/Offer";
import styles from "./details.module.css";
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
          src={offer.offerType.imageUrl ?? offer.offerImage}
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
            sx={{ color: "var(--secondary-color)", fontSize: "14px" }}
          >
            {offer.offerType.name}
          </Typography>
          <Typography
            sx={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
          >
            {/* Offer Name */}
            {offer.name}
          </Typography>
          <Chip
            label={offer.offerType.estTimeToComplete}
            sx={{
              bgcolor: "var(--primary-color)",
              border: "1px solid var(--primary-color)",
              color: "white",
              width: "fit-content",
              fontSize: "10px",
              height: "unset",
              // padding: "10px 10xp 10px 10px",
              paddingTop: "4px",
              paddingRight: "4px",
              paddingBottom: "4px",
              paddingLeft: "4px",
              borderRadius: "20px",
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
        <div className={styles.one_time}>
          <p>Available to First time users only</p>
        </div>
        <div className={styles.instructions}>
          <div className={styles.instruc_header}>
            <Typography
            // sx={{
            //   color: "var(--text-color)",
            //   fontSize: "17px",
            //   fontWeight: "bold",
            // }}
            >
              Instructions
            </Typography>
          </div>
          <div className={styles.instruc_steps}>
            {Object.keys(JSON.parse(offer.offerType.description)).map(
              (index, step) => {
                if (step != 0)
                  return (
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: "14px",
                        padding: "8px 10px",
                        background: "var(--card-bg)",
                        marginBottom: "6px",
                        borderRadius: "8px",
                      }}
                      key={index}
                    >
                      {step}. {JSON.parse(offer.offerType.description)[step]}
                    </Typography>
                  );
              }
            )}
          </div>
        </div>
      </Box>
      {/* </div> */}
    </div>
  );
};

export default DetailData;
