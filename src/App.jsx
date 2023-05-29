import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './components/pages/home'
import Noticias from './components/pages/noticias'
import Esports from './components/pages/esports'
import Pop from './components/pages/pop'
import Geek from './components/pages/geek'
import Artigos from './components/pages/artigos'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'

function App() {

  return (
    <Router>
      <Container>
        <Navbar/>
        <Routes>
          <Route path= '/home' element={<Home/>}/>
          <Route path= '/' element={<Noticias/>}/>
          <Route path= '/esports' element={<Esports/>}/>
          <Route path= '/pop' element={<Pop/>}/>
          <Route path= '/geek' element={<Geek/>}/>
          <Route path= '/artigos' element={<Artigos/>}/>
        </Routes>
      </Container>
    </Router>
  )
}

export default App
