import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Packages from'./Construction/Packages.jsx'



function Router() {
  return (
    <div>
      <BrowserRouter>
  <Routes>
            
<Route path='/' element={<><Packages/></>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default Router
