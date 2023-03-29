import React, { useEffect, useState } from "react";

import {
    getAuth,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signOut,
} from "firebase/auth";
import Heading from "@/Components/OTP/Heading";
import { Alert, Box, Button, Container } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import EastIcon from "@mui/icons-material/East";
import VerifyForm from "@/Components/OTP/VerifyForm";
import { app } from "@/config/firebase.config";
import Image from "next/image";

const auth = getAuth(app);

const style = {
    width: "100vw",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
};

export default function Home() {
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [confirmObj, setConfirmObj] = useState("");
    const [error, setError] = useState("");
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLogo(false);
        }, 3000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

    const getOTP = async (e) => {
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid number");

        try {
            const response = await setUpRecaptcha(number);
            setConfirmObj(response);
            console.log(response);
            setFlag(true);
        } catch (err) {
            setError(err.message);
        }
        // console.log(number);
    };

    function setUpRecaptcha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {},
            auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }

    return (
        <>
            {/* logo */}
            {showLogo && (
                <Box sx={style}>
                    <Image
                        src={"/icons/Logo_small.png"}
                        width={142.34}
                        height={163}
                        alt={"icon"}
                    />
                </Box>
            )}
            {!showLogo && (
                <Container>
                    {/* Welcome page  */}
                    <Box sx={{ display: !flag ? "block" : "none" }}>
                        <Heading
                            text1="Welcome!"
                            text2="enter your registered no."
                            fontSize="24px"
                        />

                        <PhoneInput
                            defaultCountry="IN"
                            value={number}
                            onChange={setNumber}
                        />
                        <Box sx={{ my: 2 }} id="recaptcha-container"></Box>

                        {error && <Alert severity="error">{error}</Alert>}
                        <Button
                            className="nav_box"
                            sx={{
                                height: "58px",
                                borderRadius: "55px",
                                bottom: "31px",
                            }}
                            variant="contained"
                            endIcon={<EastIcon />}
                            onClick={getOTP}
                        >
                            Next
                        </Button>
                    </Box>
                    {/* verify page */}
                    <Box sx={{ display: flag ? "block" : "none" }}>
                        <Heading
                            text1="Verify your number!"
                            text2={`enter the otp sent to ${number}`}
                            fontSize={"18px"}
                        />
                        <VerifyForm confirmObj={confirmObj} />
                    </Box>
                </Container>
            )}
        </>
    );
}
