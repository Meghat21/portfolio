import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import Project from './Pages/Projects'
import Contact from './Pages/Contact'
import About from './Pages/About'

const App = () => {
  return (
    <main>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='about' element={<About/>}/>

            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
