import { Box, Stack, styled, Typography } from "@mui/material";
import React from "react";
import UpdateBox from "./UpdateBox";

const LiveUpdates = () => {
    return (
        <Box sx={{ mb: 12, with: "100%" }}>
            <Typography sx={{ fontWeight: 300, fontSize: 16, mb: "11px" }}>
                Live Updates
            </Typography>
            <Stack
                sx={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    mb: "19px",
                }}
            >
                <UpdateBox
                    endPoint={"homework"}
                    width={125}
                    icon={"/icons/homework.png"}
                    text={"Homework"}
                />
                <UpdateBox
                    endPoint={"fees"}
                    width={175}
                    icon={"/icons/fees.png"}
                    text={"Fees"}
                />
            </Stack>
            <UpdateBox
                endPoint={"multimedia"}
                width={"100%"}
                icon={"/icons/multimedia.png"}
                text={"Multimedia"}
            />
        </Box>
    );
};

export default LiveUpdates;
