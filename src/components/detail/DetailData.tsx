import { Offer } from "@/types/Offer";
import styles from "./details.module.css";
import { Box, Chip, Typography } from "@mui/material";
import GuidelinesSection from "./Guidelines";
import CoinButton from "../buttons/CoinButton";

const DetailData = ({ offer }: { offer: Offer }) => {
  console.log("Offerrr: ", offer);

  function checkJSON(text: unknown) {
    if (typeof text !== "string") {
      return false;
    }
    try {
      JSON.parse(text);
      return true;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return false;
    }
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
          padding: "10px",
          marginTop: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "65%",
          }}
        >
          <Box
            component="img"
            src={offer.offerImage ?? offer.offerType.imageUrl}
            alt="Offer"
            sx={{
              width: "70px",
              height: "70px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          <Box
            sx={{
              width: "70%",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "10px",
            }}
          >
            <Typography
              sx={{ color: "var(--primary-color)", fontSize: "14px" }}
            >
              {offer.offerType.name}
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: "15px", fontWeight: "bold" }}
            >
              {/* Offer Name */}
              {offer.name}
            </Typography>
            <div>
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
              <Chip
                label={"Beta Release"}
                color="warning"
                sx={{
                  // bgcolor: "yellow",
                  // border: "1px solid yellow",
                  color: "white",
                  width: "fit-content",
                  fontSize: "10px",
                  height: "unset",
                  // padding: "10px 10xp 10px 10px",
                  margin: "5px",
                  paddingTop: "4px",
                  paddingRight: "4px",
                  paddingBottom: "4px",
                  paddingLeft: "4px",
                  borderRadius: "20px",
                }}
              />
            </div>
          </Box>
        </div>

        <CoinButton
          mainText={offer.rewardCoins ? offer.rewardCoins.toString() : "0"}
        />
      </Box>
      <Typography
        sx={{
          color: "#fffa",
          fontSize: "15px",
          fontWeight: "normal",
          padding: "10px 15px",
        }}
      >
        {offer.description ?? "Super Offer"}
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
        <div className={styles.instructions}>
          <div className={styles.instruc_header}>
            <Typography>Steps</Typography>
          </div>
          <div className={styles.instruc_steps}>
            {!checkJSON(offer.offerType.description) && (
              <Typography
                sx={{
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
                {offer.offerType.description}
              </Typography>
            )}
            {checkJSON(offer.offerType.description) &&
              Object.keys(JSON.parse(offer.offerType.description)).map(
                (index, step) => {
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
    </div>
  );
};

export default DetailData;
