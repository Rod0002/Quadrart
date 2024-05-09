import React, { lazy, Suspense } from 'react'
import { Box } from '@mui/material'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

/* Website Props */


import Loading from "./componentes/Loading";

import CriarQuadro from './componentes/CriarQuadro/CriarQuadro'

import Galeria from "./componentes/Galeria/Galeria"

import Quadro from './componentes/Quadro_Page/Quadro';

import { PrivateRoutes } from './utils/PrivateRoutes';

import PaginaNaoExiste from './componentes/PaginaNaoExiste/PaginaNaoExiste';

import { OpenRoutes } from "./utils/OpenRoutes";

import MeusQuadros from './componentes/MeusQuadros/MeusQuadros';

const MainBackground = lazy(() => import('./componentes/MainBackground'));

const Navbar = lazy(() => import("./componentes/Navbar"));

const Home = lazy(() => import('./componentes/Home/Home'));

const Registro = lazy(() => import('./componentes/Registro/Registro'));

const Login = lazy(() => import('./componentes/Login/Login'));

const Footer = lazy(() => import('./componentes/Footer'));




const App = () => {
  return (
    <Box overflow="hidden">
      <Suspense fallback={<Loading />}>
        <MainBackground />
        <ToastContainer />
        <Navbar />
        <Box margin="40px 0">
          <Routes>
            
            <Route element={<PrivateRoutes to="/login"  />}>
              <Route path="/upload-quadro" element={<CriarQuadro />}></Route>
              <Route path="/meus-quadros" element={<MeusQuadros />}></Route>
            </Route>
            <Route element={<OpenRoutes to="/home"/>}>
              <Route path="/registro" element={<Registro />}></Route>
              <Route path="/login" element={<Login />}></Route>
            </Route>
            <Route path="/" element={<Navigate to="/home"/>}/>
            <Route path="/galeria" element={<Galeria />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/quadro/:id" element={<Quadro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/meus-quadros" element={<MeusQuadros />}></Route>
            <Route path="*" element={<PaginaNaoExiste />}></Route>
          </Routes>
        </Box>
        <Footer />
      </Suspense>
    </Box>
  )
}

export default App