import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'

import { Routes , Route } from 'react-router-dom'
import Add from './pages/Add/Add.jsx'
import List from './pages/List/List.jsx'
import Orders from './pages/Orders/Order.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>

      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
        </Routes>

        <Routes>
          <Route path="/list" element={<List/>}/>
        </Routes>

        <Routes>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
