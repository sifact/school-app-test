import { Alert, Box, Button, Container, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import EastIcon from "@mui/icons-material/East";

let currentOTPIndex = 0;
const VerifyForm = ({ confirmObj }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState(0);
    const [error, setError] = useState("");

    const router = useRouter();
    const inputRef = useRef(null);

    console.log(otp.join(""));

    const handleOnchange = ({ target }) => {
        const { value } = target;
        const val = value.substring(value.length - 1);
        const newOTP = [...otp];
        newOTP[currentOTPIndex] = val;

        if (!value) setActiveOTPIndex(currentOTPIndex - 1);
        else setActiveOTPIndex(currentOTPIndex + 1);

        setOtp(newOTP);
    };

    const handleOnKeyDown = ({ key }, index) => {
        currentOTPIndex = index;
        if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex]);

    const verifyOTP = async () => {
        if (otp === "" || otp === undefined) return;
        try {
            setError("");
            await confirmObj.confirm(otp.join(""));
            router.push("/termsPrivacy");
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <Box>
            <Stack sx={{ flexDirection: "row", gap: 2, mt: 2 }}>
                {otp.map((_, index) => (
                    <input
                        ref={index === activeOTPIndex ? inputRef : null}
                        key={index}
                        type="number"
                        style={{
                            width: 40,
                            height: 40,
                            background: "rgba(51, 119, 255, 0.5)",
                            borderRadius: 12,
                            border: "none",
                            outline: "none",
                            textAlign: "center",
                        }}
                        onKeyDown={(e) => handleOnKeyDown(e, index)}
                        onChange={handleOnchange}
                        value={otp[index]}
                    ></input>
                ))}
            </Stack>
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
                onClick={verifyOTP}
            >
                Next
            </Button>
        </Box>
    );
};

export default VerifyForm;
