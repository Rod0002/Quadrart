import { Album } from '@mui/icons-material';
import { Box, Typography } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';
import React from 'react'

const Item = ({ quadro, nomeArtista, nomeAlbum, ano, genero, duracao }) => {
    const AlbumCoef = Math.ceil(3.2 * nomeAlbum.length / 40);
    const navigate = useNavigate()
    const { id } = useParams();
    return (
        <Box
            width="clamp(0px,86vw,400px)"
            height="clamp(0px,129vw,600px)"
            backgroundColor="#eceae7"
            padding="20px 0"
            display="flex"
            flexDirection="column"
            rowGap="clamp(0px, 4vw,30px)"
            border="1px solid black"
            sx={{
                transition: "ease all 0.3s",
                "&:hover":{
                    cursor: "pointer",
                    scale: "1.2"
                }
            }}
            onClick={() => {
                if (!id){
                    navigate(`/quadro/${quadro.id}`)
                }
            }}
        >
            <Box width="100%" display="flex" justifyContent="center">
                <Box display="flex" width="70%" borderBottom="1px solid black" justifyContent="space-between" alignItems="center">
                    <Box display="flex" width="80%" sx={{ wordBreak: "break-word" }}>
                        <Typography fontFamily="Inter" fontWeight="700" fontSize="clamp(0px, 4vw ,16px)">{nomeArtista}</Typography>
                    </Box>
                    <Box width="10%" display="flex" justifyContent="end" alignItems="end">
                        <Typography fontFamily="Inter" fontWeight="700" fontSize="clamp(0px, 4vw ,16px)">{duracao}</Typography>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    width="clamp(0px, calc(100vw/100*60) ,260px)"
                    height="clamp(0px, calc(100vw/100*60) ,260px)"
                    backgroundColor="grey" border="1.4px solid rgba(0,0,0,0.8)"
                >
                    <img
                        src={`http://localhost:8080/quadro/image/${quadro.id}`}
                        style={{
                            objectFit: "contain",
                            width: "100%",
                        }}
                    />

                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Box display="flex" flexDirection="column" alignItems="center" rowGap="clamp(0px, 2.6vw, 20px)">
                    <Typography fontFamily="Inria Serif" fontSize={`clamp(0px, calc(12vw/${AlbumCoef}), calc(50px/${AlbumCoef}))`} fontWeight="700"
                        sx={{
                            textShadow: "rgba(0,0,0,0.52) 1px 0px 0px, rgba(0,0,0,0.52) 0.540302px 0.841471px 0px, rgba(0,0,0,0.52) -0.416147px 0.909297px 0px, rgba(0,0,0,0.52) -0.989992px 0.14112px 0px, rgba(0,0,0,0.52) -0.653644px -0.756802px 0px, rgba(0,0,0,0.52) 0.283662px -0.958924px 0px, rgba(0,0,0,0.52) 0.96017px -0.279415px 0px",
                        }}
                    >
                        {nomeAlbum}
                    </Typography>
                    <Typography fontFamily="Inknut Antiqua" fontSize="clamp(0px, calc(12vw/3) , calc(50px/3))" fontWeight="800" sx={{ borderBottom: "1px solid black" }}>{genero}</Typography>
                    <Typography fontFamily="Ider" fontSize="clamp(0px,calc(12vw/6*5),calc(50px/6*5))" fontWeight="400">{ano}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Item