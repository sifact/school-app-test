import Navbar from "@/Components/Navbar";
import { useRouter } from "next/router";
import React from "react";
import Format from "@/layout/format";

import NotificationBox from "@/Components/Student/Home/NotificationBox";
import TopBar from "@/Components/Student/Home/TopBar";
import LiveUpdates from "@/Components/Student/Home/LiveUpdates";
import { Container } from "@mui/material";

const index = () => {
    return (
        <Container>
            <Format>
                <TopBar />
                <NotificationBox />
                <LiveUpdates />
            </Format>
        </Container>
    );
};

export default index;
