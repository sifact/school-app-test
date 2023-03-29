import Heading from "@/Components/OTP/Heading";
import User from "@/Components/OTP/User";
import { Box, Button, Container, Typography } from "@mui/material";

import EastIcon from "@mui/icons-material/East";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const style = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
};

const termsPrivacy = () => {
    const [flag, setFlag] = useState(true);
    const router = useRouter();

    const handleOnClick = () => {
        setFlag(false);

        const timeoutId = setTimeout(() => {
            router.push("/student");
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    };

    return (
        <>
            {flag && (
                <Container>
                    <Box>
                        <Heading
                            text1={"Choose the account"}
                            text2={"confirm your id"}
                            fontSize={"24px"}
                        />

                        <User />

                        <Typography
                            sx={{
                                fontWeight: 400,
                                fontSize: 12,
                                textAlign: "center",
                                mt: 14,
                            }}
                        >
                            By continuing, you agree to the #school_app_project{" "}
                            <span style={{ color: "#045DE9" }}>
                                Terms of Service
                            </span>{" "}
                            &{" "}
                            <span style={{ color: "#045DE9" }}>
                                Privacy Policy
                            </span>
                            .
                        </Typography>

                        <Button
                            className="nav_box"
                            sx={{
                                height: "58px",
                                borderRadius: "55px",
                                bottom: "31px",
                            }}
                            variant="contained"
                            endIcon={<EastIcon />}
                            onClick={handleOnClick}
                        >
                            Accept & Continue
                        </Button>
                    </Box>

                    {/* success page */}
                </Container>
            )}
            {!flag && (
                <Box sx={style}>
                    <Box>
                        <Image
                            src={"/icons/success.png"}
                            width={164}
                            height={164}
                            alt={"icon"}
                        />
                        <Typography
                            sx={{
                                fontWeight: 500,
                                fontSize: "16px",
                                mt: "20px",
                            }}
                        >
                            Successfully verified
                        </Typography>
                    </Box>
                </Box>
            )}
        </>
    );
};

export default termsPrivacy;
