import React from 'react'
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import Registation from "./components/Register/Registation";
import Contact from "./components/Contact/Contact";
import LegalDis from "./components/LegalDis/LegalDis";
import Terms from "./components/Terms&Condition/Terms_condition";
import CreditCard from "./components/Credit/Credit";
import PrepaidCard from "./components/Prepaid/Prepaid";
import DebitCard from "./components/Debit/Debit";
import FixedDeposit from "./components/Fixed/Fixed";
import Receipt from "./components/Receipt/Receipt";
import NetBanking from "./components/Netbanking/Netbanking";
import {Route, Routes} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import PrivateRouter from './components/Context/Private_Router';
const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route
        path="/"
        element={
          <PrivateRouter>
            <Home />
          </PrivateRouter>
        }
      />

        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/registration" element={<Registation/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/legaldis" element={<LegalDis/>}/>
        <Route path="/terms" element={<Terms/>}/>

        <Route path="/credit" element={<PrivateRouter><CreditCard/></PrivateRouter>}/>
        <Route path="/prepaid" element={<PrivateRouter><PrepaidCard/></PrivateRouter>}/>
        <Route path="/debit" element={<PrivateRouter><DebitCard/></PrivateRouter>}/>
        <Route path="/fixed" element={<PrivateRouter><FixedDeposit /></PrivateRouter>}/>
        <Route path="/receipt" element={<PrivateRouter><Receipt /></PrivateRouter>}/>
        <Route path="/netbanking" element={<PrivateRouter><NetBanking /></PrivateRouter>}/>


       </Routes>
       </AnimatePresence>
  )
}

export default AnimatedRoutes