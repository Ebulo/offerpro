import Image from "next/image";
import React from "react";

const Banner: React.FC = () => {
    return (
        <div style={{}}>
            <img style={{ height: "15vh", width: "100%", objectFit: "cover" }} alt={"Home banner Rayole Apps"} src={"https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"} />
        </div>
    )
}

export default Banner;