import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, IconButton, useMediaQuery, Divider } from '@mui/material'
import { Menu, Close } from "@mui/icons-material"
import { styled } from "@mui/system"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

import {
    logout
} from "../state/UserState";


const MenuBar = ({ setOpen }) => {
    const navigate = useNavigate();

    const UnderlinedTypography = styled(Typography)`
    text-decoration: underline;
    transition: all 0.3s ease;
    font-family: Acidic;
    color: rgba(255,255,255,0.7);


    &:hover {
        text-decoration: underline;
        color: rgba(255,255,255,1);
        cursor: pointer;
        scale: 1.2;
    }
    `;


    return (
        <Box width="100%" height="100%" position="fixed" display="flex" alignItems="center" backgroundColor="rgba(0,0,0,0.95)" top="0" right="0" zIndex="3" flexDirection="column">
            <IconButton sx={{ color: "white" }} onClick={() => { setOpen(false) }}>
                <Close />
            </IconButton>
            <Box display="flex" width="100%" flexDirection="column" alignItems="center" justifyItems="center" rowGap="3vh" padding="6vw">
                <UnderlinedTypography onClick={() => { setOpen(false); navigate("/registro"); }}>Registro</UnderlinedTypography>
                <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.6)" }} />
                <UnderlinedTypography onClick={() => { setOpen(false); navigate("/login"); }}>Login</UnderlinedTypography>
                <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.6)" }} />
                <UnderlinedTypography onClick={() => { setOpen(false); navigate("/galeria"); }}>Galeria</UnderlinedTypography>
                <Divider flexItem sx={{ borderColor: "rgba(255,255,255,0.6)" }} />
                <UnderlinedTypography onClick={() => { setOpen(false); navigate("/upload-quadro") }}>Fazer Quadro</UnderlinedTypography>
            </Box>
        </Box>
    )
}

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);
    const below420 = useMediaQuery("(max-width:420px)");
    const [isOpen, setOpen] = useState(false);



    const UnderlinedTypography = styled(Typography)`
    text-decoration: underline;
    transition: all 0.3s ease;
    font-family: Acidic;

    &:hover {
        text-decoration: underline;
        color: rgba(255,255,255,1);
        cursor: pointer;
        scale: 1.2;
    }
    `;

    const Logo = styled(Typography)`
    transition: all 0.3s ease;
    import { useNavigate } from 'react-router-dom'
        scale: 1.2;
    }
    `;

    const submitLogout = () => {
        dispatch(logout());
    }


    return (
        <Box width="100%" display="flex" height="60px" padding="10px 0" justifyContent="center" flexDirection="column" alignItems="center">
            {below420 ?

                <>
                    <Box width="90%" display="flex" justifyContent="space-between">
                        <IconButton sx={{ color: "white" }} onClick={() => { setOpen(true) }}><Menu /></IconButton>
                        {isOpen && <MenuBar setOpen={setOpen} />}
                        <Logo onClick={() => navigate("/home")} fontFamily="Brushot" color="white" fontSize="23px">Quadrart</Logo>
                    </Box>
                </>

                :


                <>
                    <Box>
                        <Logo onClick={() => navigate("/home")} fontFamily="Brushot" color="white" fontSize="23px">Quadrart</Logo>
                    </Box>
                    <Box display="flex" columnGap="20px" color="rgba(255,255,255,0.85)">

                        <UnderlinedTypography onClick={() => navigate("/galeria")}>Galeria</UnderlinedTypography>

                        {user ? (
                            <>
                                <UnderlinedTypography onClick={() => navigate("/meus-quadros")}>Meus Quadros</UnderlinedTypography>
                                <UnderlinedTypography onClick={() => navigate("/upload-quadro")}>Fazer Quadros</UnderlinedTypography>
                                <UnderlinedTypography onClick={submitLogout}>Sair</UnderlinedTypography>
                            </>


                        ) :
                            (<>
                                <UnderlinedTypography onClick={() => navigate("/registro")}>Registro</UnderlinedTypography>
                                <UnderlinedTypography onClick={() => navigate("/login")}>Login</UnderlinedTypography>
                            </>
                            )
                        }

                    </Box>
                </>


            }
        </Box>
    )
}

export default Navbar