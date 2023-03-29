import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";

const TopBar = () => {
    const router = useRouter();
    return (
        <Stack
            sx={{
                flexDirection: "row",

                justifyContent: "space-between",
                mt: 3,
            }}
        >
            <Box
                style={{
                    width: 54,
                    height: 54,
                    border: "1.5px solid #E5E5E5",
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                }}
                onClick={() => router.push("/student/calendar")}
            >
                <Image
                    src="/icons/calendar.png"
                    alt="calender"
                    width={18}
                    height={20}
                />
            </Box>
            <Stack onClick={() => router.push("/student/calendar")}>
                <Typography
                    sx={{ fontWeight: 700, fontSize: 14, color: "#7F7F7F" }}
                >
                    Monday
                </Typography>
                <Typography
                    sx={{ fontWeight: 700, fontSize: 24, color: "#0D0D0D" }}
                >
                    25 October
                </Typography>
            </Stack>

            <Image
                src="/img/Avatar.png"
                alt="calender"
                width={56}
                height={56}
                onClick={() => router.push("/student/profile")}
            />
        </Stack>
    );
};

export default TopBar;
