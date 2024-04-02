import React from 'react'
import Preview from './Components/Preview'
import Home from './Components/Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Task from './Components/Task'
import Header from './Components/Header'
const App = () => {
  return (
    <div>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Preview /> } />
            <Route path='/Home' element={<Home /> } />
            <Route path='/Task' element={<Task /> } />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
