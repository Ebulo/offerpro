import Chip from "@mui/material/Chip";

const HistoryFilter = ({
  filtersList,
  selectedValue,
}: {
  filtersList: string[];
  selectedValue: string;
}) => {
  return (
    <div
      className="container"
      style={{
        width: "100%",
        padding: "25px 10px",
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
            bgcolor:
              selectedValue == item ? "var(--primary-color)" : "transparent",
            color: "white",
            width: "fit-content",
            fontSize: "15px",
            height: "24px",
            borderRadius: "20px",
            border: "1px solid #fff",
            padding: "15px 5px",
            margin: "4px",
          }}
        />
      ))}
    </div>
  );
};

export default HistoryFilter;
