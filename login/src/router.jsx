import React from 'react'
import {Route,Routes} from 'react-router-dom'


import HomePage from './homepage'
import AboutPage from './aboutpage'
//  import {About} from'./about'


const router = () => {
 
  return (
    <div>
      
      <Routes>
        <Route path="/"element={<HomePage/>}/>
        
        
        <Route path="/aboutpage"element={<AboutPage/>}/>
        {/* <Route path="/"element={<About/>}/> */}
       

      </Routes>
    </div>
  )
}

export default router