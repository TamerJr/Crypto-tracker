import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Toggeler from './Toggeler'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { AuthUser } from '../Context/AuthContext'
import { FaPersonBooth } from 'react-icons/fa'
const NavBar = () => {
    const {user,logOut}=AuthUser()
    const navigate=useNavigate()
    const [nav,setNav]=useState(false)
    const handleNav=()=>{
        setNav(!nav)
    }
    const handleSignOut=async()=>{
        try{
          await logOut()
          navigate("/signin")
        }catch(e){
          alert(e.message)
        }
      }
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to="/">
            <h1 className='text-3xl font-semibold'>
                Catch-Crypto
            </h1>
        </Link>
        <div className='hidden md:block'>
            <Toggeler/>
        </div>
        {user?.email ?(
            <div className=' w-[100px] hidden md:flex justify-between items-center'>
                <Link to="/account" className=' text-xl'><FaPersonBooth/> </Link>
                <button onClick={handleSignOut}>Log Out</button>
            </div>
        ):(
            <div className='hidden md:block'>
                <Link to="/signin" className='p-4 hover:text-accent'>Sign In</Link>
                <Link to="/signup" className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'>Sign Up</Link>
            </div>
        )}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
            {nav ? <AiOutlineClose size={25}/>:<AiOutlineMenu size={25}/>}
        </div>
        
        {/* Mobile Menu */}
        <div className={nav ? "md-hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10" 
        :" fixed left-[100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in-out duration-300"}>
            <ul  className='w-full p-4 '>
                <li onClick={handleNav} className='border-b py-6'>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={handleNav} className='border-b py-6'>
                    <Link to="/account"><FaPersonBooth className='text-xl'/> </Link>
                </li>
                <li className='border-b py-6'>
                    <Toggeler/>
                </li>
            </ul>
            <div className=' flex flex-col w-full p-4 '>
                <Link to="/signin">
                    <button className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'> Sign In</button>
                </Link>
                
                <Link to="/signup">
                    <button onClick={handleNav} className='w-full my-2 p-3 bg-button text-btnText border-2xl  shadow-xl'> Sign Up</button>
                </Link>
                <Link to="/signin">
                    <button onClick={handleNav} className='w-full my-2 p-3 bg-red-500 text-btnText border-2xl  shadow-xl'> Log Out</button>
                </Link>              
            </div>
        </div>
    </div>
  )
}

export default NavBar