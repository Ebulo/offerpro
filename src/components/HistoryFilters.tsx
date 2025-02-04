import Chip from "@mui/material/Chip";
import { useState } from "react";

const HistoryFilter = ({ filtersList }: { filtersList: string[] }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const updateFilter = (item: string) => {
    console.log("tm: ", item);
    setSelectedFilter(item);
  };

  return (
    <div
      className="container"
      style={{
        width: "100%",
        padding: "15px 15px",
        //   height: "60px",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        className="container"
        style={{
          width: "100%",
          overflowY: "scroll",
          overflowX: "unset",
          scrollbarWidth: "none",
          //   height: "60px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {filtersList.map((item: string, index: number) => (
          <Chip
            label={item}
            key={index}
            sx={{
              background:
                selectedFilter == item ? "var(--primary-color)" : "transparent",
              color: "white",
              width: "fit-content",
              fontSize: "15px",
              height: "24px",
              borderRadius: "20px",
              border: "1px solid #fff",
              padding: "15px 5px",
              margin: "4px",

              "&:hover": {
                // background:
                //   selectedFilter == item ? "var(--primary-color)" : "#444",
                backgroundColor: "unset",
                border: "1px solid var(--primary-color)",
                color: "var(--primary-color)",
              },
            }}
            onClick={() => updateFilter(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryFilter;
