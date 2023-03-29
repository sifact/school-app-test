import React from "react";
import { Badge, Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

const CustomBox = styled(Box)(({ theme }) => ({
    height: 125,
    display: "grid",
    placeItems: "center",
    borderRadius: 30,
    background: "#09090f",
    "& p": {
        fontWeight: 700,
        fontSize: 14,
        color: "#ffffff",
        textAlign: "center",
    },
    position: "relative",
    zIndex: 1,
}));
const Circle = styled(Box)(({ theme }) => ({
    height: 64,
    width: 64,
    borderRadius: "50%",
    background: "rgba(4, 93, 233, 0.087)",
    display: "grid",
    placeItems: "center",
    marginBottom: 9,
}));

const UpdateBox = ({ icon, text, width, endPoint }) => {
    const router = useRouter();

    return (
        <CustomBox
            style={{ width: width }}
            onClick={() => router.push(`/student/${endPoint}`)}
        >
            <Box sx={{ display: "grid", placeItems: "center" }}>
                <Circle>
                    <Image src={icon} alt={text} height={26.5} width={26.5} />
                </Circle>
                <Typography>{text}</Typography>
            </Box>
        </CustomBox>
    );
};

export default UpdateBox;
