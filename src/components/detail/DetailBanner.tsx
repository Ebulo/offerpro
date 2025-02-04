"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ArrowBackIosNew, ArrowBackRounded } from "@mui/icons-material";

const DetailBanner: React.FC = () => {
    const router = useRouter();

    return (
        <Box sx={{ width: "100%", height: "18vh", overflow: "hidden", position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div style={{
                borderRadius: "50px",
                background: "#4449",
                backdropFilter: "blur(1px)",
                padding: "10px",
                width: "40px",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                top: "10px",
                left: "10px",
                cursor: "pointer"
            }}
                onClick={() => { router.back(); }}
            >
                <ArrowBackRounded style={{ color: "#fff" }} />
            </div>
            <img
                src="https://i.pinimg.com/736x/8a/11/4c/8a114ceb9e7763d273e3144da7b65c07.jpg"
                alt="Offer Banner"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </Box>
    );
}

export default DetailBanner;