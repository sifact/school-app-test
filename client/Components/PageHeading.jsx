import { Box, Typography } from "@mui/material";
import React from "react";

import { KeyboardArrowLeft } from "@mui/icons-material";
import { useRouter } from "next/router";

const PageHeading = ({ text }) => {
    const router = useRouter();

    return (
        <Box sx={{ position: "relative" }}>
            <KeyboardArrowLeft
                sx={{
                    position: "absolute",
                    top: 40,
                    left: 30,
                    color: "rgba(13, 13, 13, 0.5)",
                }}
                onClick={() => router.back()}
            />
            <Typography
                sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#0D0D0D",
                    pt: "40px",
                    pb: "45px",
                }}
            >
                {text}
            </Typography>
        </Box>
    );
};

export default PageHeading;
