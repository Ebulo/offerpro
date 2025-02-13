"use client";
import { useState } from "react";
import { Box, Tabs, Tab, Typography, Slide } from "@mui/material";
import DiscountIcon from "@mui/icons-material/LocalOffer"; // Offers Icon
import HistoryIcon from "@mui/icons-material/History"; // History Icon
import OfferFilter from "./OfferFilter";
import OfferList, { HistoryList } from "./OfferList";

import styles from "./components.module.css";
import HistoryFilter from "./HistoryFilters";
import { Offer } from "@/types/Offer";

const TabsComponent = ({ offers }: { offers: Offer[] }) => {
  const [value, setValue] = useState(0);

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
      {TabSelector(value, handleChange)}

      {/* Content Switching */}
      <Box
        sx={{
          width: "100%",
          height: "77vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {value === 0 ? OfferTab(value, offers) : HistoryTab(value)}
      </Box>
    </Box>
  );
};

export default TabsComponent;

function TabSelector(
  value: number,
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void
) {
  return (
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
          bgcolor: value === 0 ? "var(--secondary-background)" : "transparent",
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
          bgcolor: value === 1 ? "var(--secondary-background)" : "transparent",
        }}
      />
    </Tabs>
  );
}

function HistoryTab(value: number) {
  return (
    <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
      <div className={styles.offer_list}>
        <HistoryFilter
          filtersList={["All", "Ongoing", "Submitted", "Completed", "Declined"]}
        />
        <HistoryList />
      </div>
    </Slide>
  );
}

function OfferTab(value: number, offers: Offer[]) {
  return (
    <Slide direction="left" in={value === 0} mountOnEnter unmountOnExit>
      <Box sx={{ width: "100%", height: "100%" }}>
        <div className={styles.offer_list}>
          <OfferFilter />
          <OfferList offers={offers} />
        </div>
      </Box>
    </Slide>
  );
}
