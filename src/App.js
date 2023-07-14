import React from 'react'
import Login from './pages/Login/Login'
import SignUp from './pages/createAccount/SignUp'
import { Route, Routes } from "react-router-dom"
import Card from "./components/Cards"
const App = () => {
  return (
    <Routes>
   <Route path='/login' element={<Login/>}/>
   <Route path='/sign' element={<SignUp/>}/>
   <Route path='/card' element={<Card/>}/>

    </Routes>
  )
}

export default App