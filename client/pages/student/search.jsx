import PageHeading from "@/Components/PageHeading";
import UpdateBox from "@/Components/Student/Home/UpdateBox";
import Format from "@/layout/format";
import { Container, Grid } from "@mui/material";
import React from "react";

const search = () => {
    const data = [
        {
            icon: "/icons/attendance.png",
            text: "Attendance",
            endPoint: "attendance",
        },
        {
            icon: "/icons/calendar-primary.png",
            text: "Calendar",
            endPoint: "calendar",
        },

        { icon: "/icons/fees.png", text: "Fees", endPoint: "fees" },
        { icon: "/icons/homework.png", text: "Homework", endPoint: "homework" },
        {
            icon: "/icons/multimedia.png",
            text: "Multimedia",
            endPoint: "multimedia",
        },
        {
            icon: "/icons/notice-board.png",
            text: "Notice Board",
            endPoint: "notifications",
        },
        { icon: "/icons/support.png", text: "Support", endPoint: "support" },
        { icon: "/icons/account.png", text: "My Account", endPoint: "profile" },
    ];

    return (
        <Container>
            <Format>
                <PageHeading text={"Search"} />
                <Grid container spacing={2} sx={{ mb: 12 }}>
                    {data.map((item, idx) => (
                        <Grid item xs={6} sm={6} md={4} key={idx}>
                            <UpdateBox
                                icon={item.icon}
                                text={item.text}
                                width={"100%"}
                                endPoint={item.endPoint}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Format>
        </Container>
    );
};

export default search;
