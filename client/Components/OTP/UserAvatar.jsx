import { Box, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const Button = styled("span")(({ theme }) => ({
    background: "#3377FF",
    borderRadius: 12,
    boxShadow: "0px 2px 4px rgba(15, 218, 137, 0.3)",
    height: 18,
    width: 88,
    fontWeight: 700,
    fontSize: 8,
    color: "#FFFFFF",
    display: "grid",
    placeItems: "center",
}));

const Circle = styled(Box)(({ theme }) => ({
    borderRadius: "50%",
    width: 40,
    height: 42,

    border: "1.5px solid rgba(51, 51, 51, 0.1)",
    display: "grid",
    placeItems: "center",
}));
const UserAvatar = ({ flag, setFlag }) => {
    return (
        <Stack
            sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                p: "21px 7px",
                alignItems: "center",
            }}
        >
            <Stack
                sx={{
                    flexDirection: "row",
                    gap: "21px",
                    alignItems: "center",
                }}
            >
                <Image
                    src={"/img/Avatar.png"}
                    alt="avatar"
                    width={40}
                    height={40}
                />
                <Stack>
                    <Typography sx={{ fontWeight: 500, fontSize: "18px" }}>
                        Pratibha Yadav
                    </Typography>
                    <Button>Class VIII A</Button>
                </Stack>
            </Stack>
            <Circle>
                <KeyboardArrowUp
                    sx={{ display: !flag ? "block" : "none" }}
                    onClick={() => setFlag(!flag)}
                />
                <KeyboardArrowDown
                    sx={{ display: flag ? "block" : "none" }}
                    onClick={() => setFlag(!flag)}
                />
            </Circle>
        </Stack>
    );
};

export default UserAvatar;
