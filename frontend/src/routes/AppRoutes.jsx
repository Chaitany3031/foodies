import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/user/register" element={<div>user Register Page</div>} />
          <Route path="/user/login" element={<div>user Login Page</div>} /> 
          <Route path="/foodPartner/register" element={<div>fop Register Page</div>} />
          <Route path="/foodPartner/login" element={<div>Login fop Page</div>} /> 
        </Routes>
       </Router>
    </div>
  )
}

export default AppRoutes