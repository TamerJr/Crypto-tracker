import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {ThemeProvider} from "./Context/ThemeContext"
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import axios from "axios"
import CoinPage from "./Pages/CoinPage";
import Footer from "./Components/Footer";
import { AuthContextProvider } from "./Context/AuthContext";
import NavBar from "./Components/NavBar";
function App() {
  const [coins ,setCoins]=useState([]);
  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true"
  
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setCoins(res.data)
      })
    },[url])

  return (
    <ThemeProvider>   
      <AuthContextProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home coins={coins}/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<Account/>}/>
          <Route path="/coin/:coinId" element={<CoinPage/>}>
            <Route path=":coinId"/>
          </Route> 
        </Routes>
        <Footer/>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;