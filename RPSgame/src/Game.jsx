/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from './Pages/Game/Main.jsx'
import Lobby from './Pages/Lobby/Lobby.jsx'


const routes = (
  <Router>
    <Routes>
      <Route path="/Game" element={<Main/>} />
      <Route path="/Lobby" element={<Lobby />} />
    </Routes>
  </Router>
);

const Game = () => {
  return (
    <div className='bg'>
      <div>
        {routes}
      </div>
    </div>
  )
}

export default Game
