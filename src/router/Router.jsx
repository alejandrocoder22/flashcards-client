import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import MyCards from '../pages/MyCards'
import CommunityCards from '../pages/CommunityCards'
import CreateCard from '../pages/CreateCard'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Deck from '../pages/Deck'

const Router = () => {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/deck/:deckId' element={<Deck />} />
            <Route path='/mis-tarjetas' element={<MyCards />} />
            <Route path='/comunidad' element={<CommunityCards />} />
            <Route path='/crear-tarjeta' element={<CreateCard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registrarse' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>

  )
}

export default Router
