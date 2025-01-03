import React from 'react'
import { BrowserRouter} from 'react-router-dom'


const Browse = () => {
  // const location=useLocation();
  // console.log(location)
  return (
    <div>
        <BrowserRouter>
        {/* mport {  Router, Route, Routes } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';

const App = () => {
    return ( */}
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
        </BrowserRouter>
      
    </div>
  )
}

export default Browse