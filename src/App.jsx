import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './styles/App.css'

import Register from './pags/Register'
import Login from './pags/Login'
import Home from './pags/Home'
import Publication from './pags/Publication'
import CreatePost from './pags/CreatePost'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="publication/:id" element={<Publication /> } />
            <Route path="createpost" element={<CreatePost /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
