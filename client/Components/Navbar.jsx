import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const navItems = [
        {
            label: "Home",
            icon: <HomeOutlinedIcon />,

            route: "/student",
        },
        {
            label: "Search",

            icon: <SearchOutlinedIcon />,
            route: "/student/search",
        },
        {
            label: "Notifications",

            icon: <NotificationsNoneOutlinedIcon />,
            route: "/student/notifications",
        },
        {
            label: "Account",

            icon: <PersonOutlineOutlinedIcon />,
            route: "/student/profile",
        },
    ];

    const currentNavItem = navItems.find(
        (item) => item.route === router.pathname
    );

    const handleClick = (event, newValue) => {
        const selectedItem = navItems.find((item) => item.route === newValue);
        router.push(selectedItem.route);
    };

    return (
        <div className="nav_box">
            <BottomNavigation
                value={currentNavItem ? currentNavItem.route : ""}
                onChange={handleClick}
                className="nav"
                sx={{ width: 500 }}
            >
                {navItems.map((item) => (
                    <BottomNavigationAction
                        key={item.route}
                        label={item.label}
                        value={item.route}
                        icon={item.icon}
                    />
                ))}
            </BottomNavigation>
        </div>
    );
};

export default Navbar;
