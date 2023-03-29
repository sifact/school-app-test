import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Square = styled(Box)(({ theme }) => ({
    background: "#3377FF",
    borderRadius: "12px",
    width: 45,
    height: 43,
    marginBottom: 37,
}));
const Heading = ({ text1, text2, fontSize }) => {
    return (
        <Box sx={{ mt: "93px", mb: "37px" }}>
            <Square></Square>
            <Typography variant="h1" sx={{ fontWeight: 700, fontSize: "22px" }}>
                {text1}
            </Typography>
            <Typography
                variant="h1"
                sx={{ fontWeight: 400, fontSize: { fontSize } }}
            >
                {text2}
            </Typography>
        </Box>
    );
};

export default Heading;
