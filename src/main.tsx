//Importar React
import React from 'react'
import ReactDOM from 'react-dom/client'
//Importar React/React-Dom/React-Router
import { Route, Routes, BrowserRouter } from 'react-router-dom'
//Importar Componentes
import Header from './components/Header'
import Footer from './components/Footer'
//Importar CSS
import './index.css'
//Importar Pages
import MinhasDoacoes from './pages/MinhasDoacoes'
import AgendarColeta from './pages/AgendarColeta'
import BuscarPublicacoes from './pages/BuscarPublicacoes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter> 
      <Header />
      <Routes>
        <Route path='/minhasdoacoes' element={ <MinhasDoacoes /> } />
        <Route path='/agendarcoleta' element={ <AgendarColeta/> }/>
        <Route path='/buscarpublicacoes' element={ <BuscarPublicacoes /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)