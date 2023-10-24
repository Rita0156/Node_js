
import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Blog } from './Blogs'
import { Login } from './Login'
import { Signup } from './signup'

export const Allroutes = () => {
  return (
      <Routes>
      <Route path='/signup' element={<Signup /> } />
      <Route path='/login' element={<Login /> } />
      <Route path='/blog' element={<Blog /> } />
          
    </Routes>
  )
}