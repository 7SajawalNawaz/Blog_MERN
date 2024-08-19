import React from 'react'

import {BrowserRouter as Router , Route , Routes } from "react-router-dom"

import Home from './Pages/Home'
import About from './Pages/About'
import Article from './Pages/Article'
import ArticleList from './Pages/ArticleList'
import Navbar from './Components/Navbar'
import Notfound from './Pages/Notfound'

const App = () => {
  return (
    <Router>

      <Navbar/>


    <div className='max-w-screen-md mx-auto pt-20'>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/article/:name' element={<Article />}/>
        <Route path='/article-list' element={<ArticleList />}/>
        <Route path='*' element={<Notfound />}/>
      </Routes>
   

    </div>

    </Router>
  )
}

export default App