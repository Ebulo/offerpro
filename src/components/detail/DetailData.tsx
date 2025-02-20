import { Offer } from "@/types/Offer";
import styles from "./details.module.css";
import { Box, Chip, Typography } from "@mui/material";
import GuidelinesSection from "./Guidelines";

const DetailData = ({ offer }: { offer: Offer }) => {
  // console.log("Offerrr: ", offer);

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
          <Typography sx={{ color: "var(--primary-color)", fontSize: "14px" }}>
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
      <Typography
        sx={{ color: "#fffa", fontSize: "15px", fontWeight: "normal", padding: "10px 15px" }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto fugiat expedita repudiandae distinctio dolor neque sunt voluptate accusantium iste et.
      </Typography>
      <hr
        style={{
          backgroundColor: "#fff2",
          border: "none",
          height: "1px",
          margin: "10px 0",
          boxShadow: "0 10px 20px #4444",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "left",
          flexDirection: "column",
          gap: 2,
          padding: "10px",
        }}
      >
        {/* <div className={styles.one_time}>
          <p>Available to first time users only</p>
        </div> */}
        <div className={styles.instructions}>
          <div className={styles.instruc_header}>
            <Typography>Steps</Typography>
          </div>
          <div className={styles.instruc_steps}>
            {Object.keys(JSON.parse(offer.offerType.description)).map(
              (index, step) => {
                // console.log(JSON.parse(offer.offerType.description));
                // if (step != 0)
                return (
                  <div
                    key={index}
                    style={{
                      color: "#fff",
                      fontSize: "14px",
                      padding: "10px 15px",
                      background: "var(--card-bg)",
                      marginBottom: "8px",
                      margin: "0 2px 8px 2px",
                      borderRadius: "8px",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        background: "var(--card-bg)",
                        borderRadius: "8px",
                        textAlign: "left",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          borderRadius: "50px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "2.1px solid var(--secondary-step-border)",
                          background: "var(--secondary-step-bg)",
                          width: "25px",
                          height: "25px",
                          marginRight: "8px",
                        }}
                      >
                        {step + 1}
                      </div>
                    </div>
                    <div>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "14px",
                          background: "var(--card-bg)",
                          borderRadius: "8px",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                        }}
                        key={index + 1}
                      >
                        {JSON.parse(offer.offerType.description)[step + 1]}
                      </Typography>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>

        <GuidelinesSection />
      </Box>
      {/* </div> */}
    </div>
  );
};

export default DetailData;
