import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './styles/App.css'

import Register from './pags/Register'
import Login from './pags/Login'
import Home from './pags/Home'
import Publication from './pags/Publication'
import CreatePost from './pags/CreatePost'
import Template from './templates/Template'
import Profile from './pags/Profile'
import PrivateRoutes from './utils/PrivatesRoutes'

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>

            <Route path="/" element={<Template />}>
              <Route index element={<Home />} />
              <Route path="publication/:id" element={<Publication /> } />
              <Route path="profile/:id" element={<Profile />} />
            </Route>

            <Route element={<PrivateRoutes />} >
              <Route path="/" element={<Template />}>
                <Route path="createpost" element={<CreatePost /> } />
              </Route>
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
