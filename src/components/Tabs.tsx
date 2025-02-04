"use client";
import { useState } from "react";
import { Box, Tabs, Tab, Typography, Slide } from "@mui/material";
import DiscountIcon from "@mui/icons-material/LocalOffer"; // Offers Icon
import HistoryIcon from "@mui/icons-material/History"; // History Icon
import OfferFilter from "./OfferFilter";
import OfferList, { HistoryList } from "./OfferList";

import styles from "./components.module.css";
import HistoryFilter from "./HistoryFilters";

const TabsComponent: React.FC = () => {
  const [value, setValue] = useState(0);
  // const [historyFilter, setHistoryFilter] = useState("All");

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "var(--background-color)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Tabs Header */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          width: "100%",
          "& .MuiTabs-indicator": { backgroundColor: "var(--primary-color)" },
        }}
      >
        {/* Offers Tab */}
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <DiscountIcon
                sx={{
                  fontSize: 30,
                  color: value === 0 ? "var(--primary-color)" : "gray",
                }}
              />
              <Typography
                sx={{ color: value === 0 ? "white" : "gray", fontSize: 18 }}
              >
                Offers
              </Typography>
            </Box>
          }
          sx={{
            flex: 1,
            height: "7vh",
            textTransform: "none",
            bgcolor:
              value === 0 ? "var(--secondary-background)" : "transparent",
          }}
        />

        {/* History Tab */}
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <HistoryIcon
                sx={{
                  fontSize: 30,
                  color: value === 1 ? "var(--primary-color)" : "gray",
                }}
              />
              <Typography
                sx={{ color: value === 1 ? "white" : "gray", fontSize: 18 }}
              >
                History
              </Typography>
            </Box>
          }
          sx={{
            flex: 1,
            height: "7vh",
            textTransform: "none",
            bgcolor:
              value === 1 ? "var(--secondary-background)" : "transparent",
          }}
        />
      </Tabs>

      {/* Content Switching */}
      <Box
        sx={{
          width: "100%",
          height: "77vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {value === 0 ? (
          <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
            <Box sx={{ width: "100%", height: "100%" }}>
              {/* <Typography variant="h5" sx={{ color: "white" }}>Offers Page</Typography> */}
              {/* Insert your Offers content here */}
              <div className={styles.offer_list}>
                <OfferFilter />
                <OfferList />
              </div>
            </Box>
          </Slide>
        ) : (
          <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
            <div className={styles.offer_list}>
              <HistoryFilter
                filtersList={[
                  "All",
                  "Ongoing",
                  "Submitted",
                  "Completed",
                  "Declined",
                ]}
                // selectedValue={historyFilter}
                // setHistoryFilter={setHistoryFilter}
              />
              <HistoryList />
            </div>
            {/* </Box> */}
          </Slide>
        )}
      </Box>
    </Box>
  );
};

export default TabsComponent;
