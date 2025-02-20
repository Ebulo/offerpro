// import HistoryCard from "./HistoryCard";

// const HistoryList: React.FC = () => {
//   return (
//     <>
//       List
//       <HistoryCard />
//     </>
//   );
// };

// export default HistoryList;

import React, { useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import HistoryCard from "./HistoryCard";
import { Offer } from "@/types/Offer";

// const historyData = [
//   {
//     id: 1,
//     image: "/offer.png",
//     offerType: "Multi-Reward",
//     offerName: "Offer Name",
//     reward: 28156,
//     status: "Complete",
//   },
//   {
//     id: 2,
//     image: "/offer.png",
//     offerType: "Multi-Reward",
//     offerName: "Offer Name",
//     reward: 28156,
//     status: "Complete",
//   },
//   {
//     id: 3,
//     image: "/offer.png",
//     offerType: "Multi-Reward",
//     offerName: "Offer Name",
//     reward: 12500,
//     status: "Ongoing",
//   },
// ];

const filters = ["Submitted", "Completed", "Declined"];

const HistoryList: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  const [selectedFilter, setSelectedFilter] = useState("Complete");

  const filteredHistory = offers.filter(
    // (offer) => offer.status === selectedFilter
    () => true
  );

  return (
    <Box
      sx={{
        width: "90%",
        // textAlign: "center",
        marginTop: "10px",
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
        paddingBottom: "90px",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          color: "var(--text-color)",
          fontSize: "18px",
          fontWeight: "bold",
          marginBottom: "12px",
          marginTop: "15px",
        }}
      >
        History
      </Typography>

      {/* Filter Chips */}
      <Box sx={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        {filters.map((filter) => (
          <Chip
            key={filter}
            label={filter}
            clickable
            onClick={() => setSelectedFilter(filter)}
            sx={{
              backgroundColor:
                selectedFilter === filter
                  ? "var(--primary-color)"
                  : "transparent",
              color: selectedFilter === filter ? "white" : "var(--text-color)",
              // border: "1px solid var(--primary-color)",
              border: "1px solid var(--card-bg)",
            }}
          />
        ))}
      </Box>

      {/* History List */}
      <Box>
        {filteredHistory.length > 0 ? (
          filteredHistory.map((offer) => (
            <HistoryCard key={offer.id} offer={offer} />
          ))
        ) : (
          <Typography sx={{ color: "var(--text-color)", textAlign: "center" }}>
            No offers found
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default HistoryList;
