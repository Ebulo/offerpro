import { Box } from "@mui/material";

const TopHeader: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "10vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px",
        background: "#1F2031",
      }}
    >
      <div style={{ width: "30%", paddingTop: "15px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element    */}
        <img
          src={"/img/logo_og.png"}
          alt="Offer Logo"
          style={{ width: "100%", objectFit: "contain" }}
        />
      </div>
      <div style={{}}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={"/img/cog_icon.png"}
          alt="Offer Logo"
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
        />
      </div>
    </Box>
  );
};

export default TopHeader;
