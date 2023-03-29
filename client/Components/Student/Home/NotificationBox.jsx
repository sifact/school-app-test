import { Box, Stack, styled, Typography } from "@mui/material";

import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useRouter } from "next/router";

const NotificationBox = () => {
    const router = useRouter();

    const NotificationBox = styled(Box)(({ theme }) => ({
        background:
            "linear-gradient(134.01deg, rgba(9, 198, 249, 0.5) -23.61%, rgba(4, 93, 233, 0.5) 103.79%)",
        borderRadius: 30,
        width: "100%",
        marginTop: 32,
    }));

    const Oval = styled(Box)(({ theme }) => ({
        height: 60,
        width: 60,
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.35)",

        display: "grid",
        placeItems: "center",
        marginLeft: 17,
    }));

    const BottomArrow = styled(Box)(({ theme }) => ({
        background: "rgba(255, 255, 255, 0.2)",
        width: 28,
        height: 28,
        borderRadius: "50%",
        display: "grid",
        placeItems: "center",
        position: "absolute",
        bottom: 14,
        right: 12,
    }));
    return (
        <Box sx={{ marginBottom: "20px" }}>
            <NotificationBox
                onClick={() => router.push("/student/notifications")}
                style={{ position: "relative", height: 157 }}
            >
                <NotificationBox
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: 151,
                    }}
                >
                    <NotificationBox
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            height: 145,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Oval>
                            <Box
                                sx={{
                                    background: "#FFFFFF",
                                    borderRadius: "50%",
                                    height: 48,
                                    width: 48,
                                    display: "Grid",
                                    placeItems: "center",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: 10,
                                        color: "#3377FF",
                                    }}
                                >
                                    Holiday
                                </Typography>
                            </Box>
                        </Oval>
                        <Stack
                            sx={{ ml: "18px", gap: "7px", color: "#ffffff" }}
                        >
                            <Typography
                                sx={{ fontWeight: 700, fontSize: 16.8 }}
                            >
                                Diwali Holiday
                            </Typography>
                            <Typography
                                varian="p"
                                sx={{ fontWeight: 500, fontSize: 12 }}
                            >
                                Lorem Ipsum is simply dummy <br /> text of the
                                printing.
                            </Typography>
                            <Typography
                                variant="span"
                                sx={{ fontWeight: 500, fontSize: 12 }}
                            >
                                Date: 26 Oct - 30 Oct
                            </Typography>
                        </Stack>
                        <BottomArrow>
                            <KeyboardDoubleArrowRightIcon
                                sx={{
                                    color: "#ffffff",
                                    width: "20px",
                                    height: "20px",
                                }}
                            />
                        </BottomArrow>
                    </NotificationBox>
                </NotificationBox>
            </NotificationBox>
        </Box>
    );
};

export default NotificationBox;
