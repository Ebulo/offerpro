import { Box, Typography } from "@mui/material";

const CoinButton: React.FC<{ mainText: string }> = ({ mainText }) => {
    return (
        <Box
            sx={{
                textAlign: "center",
                background: "var(--primary-color)",
                padding: "6px 12px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "right",
                justifyContent: "right",
                flexDirection: "column",
                color: "#fff"
            }}
        >
            <div style={{}}>
                <img src="/img/offercoin.png" alt="Rayole Software Offer Coin" />
            </div>
            <div>

                <Typography fontSize="0.7em">Up To</Typography>
                <Typography fontWeight="bold">
                    {mainText}
                </Typography>
            </div>
        </Box>
    )
}

export default CoinButton;