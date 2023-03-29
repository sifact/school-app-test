import React, { useState } from "react";

import UserModal from "./UserModal";
import UserAvatar from "./UserAvatar";

const User = () => {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <UserAvatar flag={flag} setFlag={setFlag} />
            <UserModal flag={flag} setFlag={setFlag} />
        </>
    );
};

export default User;
