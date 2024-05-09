import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import axios from 'axios';
import Item from "./Props/Item";

const Galeria = () => {
  const [quadros, setQuadros] = useState([]);
  const below1300 = useMediaQuery("(max-width:1300px)");
  const below870 = useMediaQuery("(max-width:870px)");

  useEffect(() => {
    axios.get('http://localhost:8080/quadro', {withCredentials: true})
      .then(response => {
        setQuadros(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar quadros:', error);
      });
  }, []);

  return (
    <Box width="100%" display="flex" flexDirection="column" marginTop="50px" rowGap="20px">
      <Box width="100%" display="flex" justifyContent="center">
        <Typography fontFamily="Acidic" fontSize="60px" color="white">Galeria</Typography>
      </Box>
      <Box
        width="100%"
        display="grid"
        justifyItems="center"
        alignItems="center"
        sx={{
          gridTemplateColumns: below870 ? "1fr" : below1300 ? "repeat(2, 1fr)": "repeat(3, 1fr)",
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
  );
}

export default Galeria;
