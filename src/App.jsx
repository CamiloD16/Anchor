import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './styles/App.css'

import Register from './pags/Register'
import Login from './pags/Login'
import Home from './pags/Home'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
