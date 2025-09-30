import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'
import Calendar from './pages/calendary/calendary.jsx'
import CriarGrupo from './pages/criarGrupo/criarGrupo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/calendary' element={<Calendar/>}/>
      <Route path='/criarGrupo' element={<CriarGrupo/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)