"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Chip } from "@mui/material";
import HistoryCard from "./HistoryCard";
import { Postback } from "@/types/Postback";
import NoOffersAvailable from "../noOffers/NoOffer";

// const filters = ["All", "Ongoing", "Submitted", "Completed", "Declined"];
const filters = ["Submitted", "Completed", "Declined"];

const HistoryList: React.FC<{ postbacks: Postback[] }> = ({ postbacks }) => {
  const [selectedFilter, setSelectedFilter] = useState("Submitted");
  const [filteredHistory, setFilteredHistory] = useState<Postback[]>([]);

  // Function to filter the history list based on selectedFilter
  const updateFilteredHistory = () => {
    if (selectedFilter === "All") {
      setFilteredHistory(postbacks);
    } else {
      setFilteredHistory(
        postbacks.filter(
          (history) =>
            history.status?.toUpperCase() === selectedFilter.toUpperCase()
        )
      );
    }
  };

  // Recalculate the filtered history when postbacks or selectedFilter changes
  useEffect(() => {
    updateFilteredHistory();
  }, [selectedFilter, postbacks]);

  return (
    <Box
      sx={{
        width: "95%",
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
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          width: "100%",
          overflow: "scroll",
          scrollbarWidth: "none",
        }}
      >
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
              border: "1px solid var(--card-bg)",
            }}
          />
        ))}
      </Box>

      {/* History List */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {filteredHistory.length > 0 ? (
          filteredHistory.map((postback) => (
            <HistoryCard key={postback.id} offer={postback.offer} />
          ))
        ) : (
          <NoOffersAvailable
            title="No History"
            subtitle={`No History was found in ${selectedFilter} category`}
          />
        )}
      </Box>
    </Box>
  );
};

export default HistoryList;
