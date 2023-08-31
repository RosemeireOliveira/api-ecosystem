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
import ColetasConfirmada from './pages/ColetasConfirmada'

ReactDOM.createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<BrowserRouter>
<Header />
<Routes>
{/* <Route path='/' element={ <Home /> } /> */}
<Route path='/coletasconfirmada' element={ <ColetasConfirmada /> } />
</Routes>
<Footer />
</BrowserRouter>
</React.StrictMode>,
)