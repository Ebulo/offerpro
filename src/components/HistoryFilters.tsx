import Chip from "@mui/material/Chip";

const HistoryFilter = ({
  filtersList,
  selectedValue,
}: {
  filtersList: string[];
  selectedValue: string;
}) => {
  return (
    <>
      <div
        className="container"
        style={{
          width: "100vw",
          padding: "25px 10px",
          overflowY: "scroll",
          scrollbarWidth: "none",
          height: "60px",
          display: "flex",
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
              borderRadius: "12px",
              border: "1px solid #fff",
              padding: "10px 5px",
              margin: "4px",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HistoryFilter;
