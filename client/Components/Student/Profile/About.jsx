import {
    Box,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const About = ({ icon, text }) => {
    return (
        <Stack
            sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Image src={icon} alt={text} width={18} height={18} />
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                        sx={{
                            "& .css-1fg13to-MuiTypography-root": {
                                fontWeight: 700,
                                fontSize: "16px",
                            },
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ArrowForwardIosIcon sx={{ width: "16px", height: "16px" }} />
        </Stack>
    );
};

export default About;
