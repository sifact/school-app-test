import React from "react";
import Format from "@/layout/format";
import {
    Box,
    Container,
    Divider,
    List,
    Stack,
    Typography,
} from "@mui/material";
import PageHeading from "@/Components/PageHeading";
import User from "@/Components/OTP/User";
import About from "@/Components/Student/Profile/About";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const profile = () => {
    const data = [
        { icon: "/icons/Profile.png", text: "About School" },
        { icon: "/icons/info.png", text: "About #school_app_project" },
        { icon: "/icons/info.png", text: "Terms & Conditions" },
        { icon: "/icons/info.png", text: "Privacy Policy" },
        { icon: "/icons/help.png", text: "Support" },
        { icon: "/icons/log-out.png", text: "Log Out" },
    ];
    return (
        <Container sx={{ mb: 12 }}>
            <Format>
                <PageHeading text={"My Account"} />
                <User />
                <Stack>
                    <Typography
                        sx={{
                            fontWeight: 500,
                            fontSize: "16px",
                            opacity: 0.5,
                            mb: 2,
                            mt: 2,
                        }}
                    >
                        General
                    </Typography>
                    <List>
                        {data.map((item, idx) => {
                            return (
                                <Box key={idx}>
                                    <About
                                        icon={item.icon}
                                        text={item.text}
                                        key={idx}
                                    />
                                    {idx !== 5 && (
                                        <Divider sx={{ mb: "10px" }} />
                                    )}
                                </Box>
                            );
                        })}
                    </List>
                </Stack>
            </Format>
        </Container>
    );
};

export default profile;
