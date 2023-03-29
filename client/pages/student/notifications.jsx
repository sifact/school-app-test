import PageHeading from "@/Components/PageHeading";
import NoticeBox from "@/Components/Student/Notifications/NoticeBox";
import Format from "@/layout/format";
import { Container, Stack } from "@mui/material";
import React from "react";

const notifications = () => {
    return (
        <Container>
            <Format>
                <PageHeading text={"Notice Board"} />
                <Stack sx={{ gap: 2, mb: 12 }}>
                    <NoticeBox />
                    <NoticeBox />
                    <NoticeBox />
                    <NoticeBox />
                    <NoticeBox />
                </Stack>
            </Format>
        </Container>
    );
};

export default notifications;
