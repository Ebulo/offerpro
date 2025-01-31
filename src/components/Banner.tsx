import { Box } from "@mui/material";

const Banner: React.FC = () => {
    return (
        <Box sx={{ width: "100%", height: "15vh", overflow: "hidden" }}>
            <img
                src="https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                alt="Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </Box>
    );
};

export default Banner;