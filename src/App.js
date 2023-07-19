import React,{useRef } from 'react'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { Route, Routes } from "react-router-dom"
import PricingCard from './pages/Pricing/PricingCardPage'
import Payment from './pages/paymentPage/Payment'
import OtpPage from './pages/paymentPage/Otppage'
import Processing from './pages/paymentPage/Processing'
import Homepage from './pages/Homepage/Homepage'
const App = () => {
  const inputRef = useRef(null);
  return (
   <Routes>
   <Route path='/' element={<Homepage/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/sign' element={<SignUp/>}/>
   <Route path='/pricing' element={<PricingCard/>}/>
   <Route path='/processing' element={<Processing/>}/>
   <Route path='/payment/:id' element={<Payment/>}/>
   <Route path='/account/:id' element={<OtpPage ref={inputRef}/>}/>



    </Routes>
  )
}

export default App