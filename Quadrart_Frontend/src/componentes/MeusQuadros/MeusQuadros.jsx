import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Typography, useMediaQuery } from '@mui/material'
import Item from '../Galeria/Props/Item'

const MeusQuadros = () => {
    const [quadros, setQuadros] = useState([]);
    const below1300 = useMediaQuery("(max-width:1300px)");
    const below870 = useMediaQuery("(max-width:870px)");
    const getQuadros = async () => {
        const response = await axios.get("http://localhost:8080/quadro/meusquadros",
            {
                withCredentials: "true"
            });

        setQuadros(response.data);
    }
    
    useEffect(() => {
        getQuadros();
    }, []);

    return (
        <Box width="100%" display="flex" flexDirection="column" marginTop="50px" rowGap="20px">
            <Box width="100%" display="flex" justifyContent="center">
                <Typography fontFamily="Acidic" fontSize="60px" color="white">Meus Quadros</Typography>
            </Box>
            <Box
                width="100%"
                display="grid"
                justifyItems="center"
                alignItems="center"
                sx={{
                    gridTemplateColumns: below870 ? "1fr" : below1300 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
                    columnGap: "20px",
                    rowGap: "20px"
                }}
            >
                {quadros.map(quadro => (
                    <Item key={quadro.id} quadro={quadro} nomeArtista={quadro.nomeArtista} nomeAlbum={quadro.nomeAlbum} ano={quadro.ano} genero={quadro.genero} duracao={quadro.duracao} />
                ))}
                {/* Mantendo os elementos Item no final do componente */}
            </Box>
        </Box>
    )
}

export default MeusQuadros