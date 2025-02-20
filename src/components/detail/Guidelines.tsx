import styles from "./details.module.css";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const guidelines = [
  "Use a genuine device: Emulators are not allowed. Avoid using VPNs or proxies to ensure accurate location tracking and the best user experience.",
  "Stick with one device and location: Completing tasks on the same device and location helps track your progress.",
  "Time limit: Most offers have a 30-day completion window unless stated otherwise, but also pay attention to specified time limits for offer completion.",
  "New users: If you're new you will be able to enjoy the offers. Existing users may not be eligible unless specifically mentioned in the offer details.",
  "Reward delivery: Rewards are usually prompt, but there may be up to a 24-hour delay in some cases.",
  "Mobile app tips: Open the app immediately after installation for a smooth experience and higher completion chances.",
];

const GuidelinesSection = () => {
  return (
    <Box
      className={styles.guidelines}
      sx={{
        // backgroundColor: "#0d0d16",
        color: "white",
        // padding: "10px 10px 20px 20px",
        padding: "10px 10px 30px 10px",
        borderRadius: "10px",
        textAlign: "left",
      }}
    >
      <Typography variant="h6" gutterBottom>
        To enjoy our offer-wall, please remember:
      </Typography>
      <List sx={{ paddingLeft: "5px" }}>
        {guidelines.map((text, index) => (
          <ListItem
            key={index}
            sx={{ alignItems: "flex-start", padding: "5px 0" }}
          >
            <ListItemText
              primary={
                <Typography
                  variant="body1"
                  style={{ fontSize: "0.8em", color: "#555" }}
                >
                  <strong>{index + 1}. </strong>
                  {text}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>

      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          width: "120px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/logo_grey.png"
          alt="Logo of Offer Pro"
          style={{ width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default GuidelinesSection;
