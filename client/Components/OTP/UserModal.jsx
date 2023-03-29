import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Divider } from "@mui/material";

import UserAvatar from "./UserAvatar";
import styled from "styled-components";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",

    transform: "translate(-50%, -50%)",
    width: "91%",

    border: "none",
    background: "#FFFFFF",
    boxShadow: "0px 80px 80px 1000px rgba(13, 13, 13, 0.12)",
    borderRadius: "12px",
    outline: "none",
    marginBottom: "2rem",
};

const TextWrapper = styled(Box)(({ theme }) => ({
    "& p": {
        fontWeight: 400,
        fontSize: "12px",
        marginBottom: "11px",
    },
}));

export default function UserModal({ flag, setFlag }) {
    const containerRef = React.useRef(null);

    return (
        <Container>
            {/* <Button onClick={handleOpen}>Open modal</Button> */}
            <Box ref={containerRef}>
                <Modal
                    open={flag}
                    // onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <UserAvatar flag={flag} setFlag={setFlag} />
                        <Divider />
                        <TextWrapper style={{ padding: "21px" }}>
                            <Typography>Roll no. : 04</Typography>
                            <Typography>
                                Father’s name : Mr. Vimal Chandra Yadav
                            </Typography>
                            <Typography>
                                Mother’s name : Mrs. Pramila Devi
                            </Typography>
                            <Typography>
                                Address : 33 K.V. Power House Colony Sandila,
                                Hardoi
                            </Typography>
                            <Typography>Blood Group : O (+ve)</Typography>
                            <Typography>Admission no. : 0918</Typography>
                            <Typography>
                                Contact no. : (+91)-99368-77715
                            </Typography>
                        </TextWrapper>
                    </Box>
                </Modal>
            </Box>
        </Container>
    );
}
