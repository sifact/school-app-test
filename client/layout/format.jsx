import Navbar from "@/Components/Navbar";
import React from "react";

export default function ({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
