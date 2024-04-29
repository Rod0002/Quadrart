import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Box } from '@mui/material';

import Item from '../Galeria/Props/Item'

const Quadro = () => {
    const navigate = useNavigate();
    const [quadro, setQuadro] = useState();
    let { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/quadro/${id}`)
            .then(response => {
                setQuadro(response.data);
                console.log("");
            })
            .catch(error => {
                navigate("/naoexiste")
            });
    }, []);

    return (
        quadro && 
            <Box display="flex" justifyContent="center" height="80vh" alignItems="center">
                <Item quadro={quadro} nomeArtista={quadro.nomeArtista} nomeAlbum={quadro.nomeAlbum} ano={quadro.ano} genero={quadro.genero} duracao={quadro.duracao} />
            </Box>
    )
}

export default Quadro