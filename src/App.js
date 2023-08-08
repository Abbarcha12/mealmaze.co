import React, { useRef } from "react";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import PricingCard from "./pages/Pricing/PricingCardPage";
import Payment from "./pages/paymentPage/Payment";
import OtpPage from "./pages/paymentPage/Otppage";
import Processing from "./pages/paymentPage/Processing";
import Homepage from "./pages/Homepage/Homepage";
import CreateMeal from "./pages/createMeal/CreateMeal";
import CreateMealHangUp from "./pages/createMeal/CreateMealHangUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Faq from "./components/Faq";
import WeeklyIngredients from "./components/dashboardCompoents/WeeklyIngredients";
const App = () => {
  const inputRef = useRef(null);
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/meal' element={<CreateMealHangUp />} />
      <Route path='/weekly' element={<WeeklyIngredients />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign' element={<SignUp />} />
      <Route path='/pricing' element={<PricingCard />} />
      <Route path='/processing' element={<Processing />} />
      <Route path='/createMeal' element={<CreateMeal />} />
      <Route path='/payment/:id' element={<Payment />} />
      <Route path='/account/:id' element={<OtpPage ref={inputRef} />} />
    </Routes>
  );
};

export default App;
