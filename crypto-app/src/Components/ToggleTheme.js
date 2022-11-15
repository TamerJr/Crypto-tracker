import React, { useContext } from 'react'
import {HiMoon, HiSun} from "react-icons/hi"
import { ThemeContext } from '../Context/ThemeContext'
const ToggleTheme = () => {
    const{theme,setTheme}=useContext(ThemeContext)
  return (
    <div className='p-2 '>
        {theme ==="dark"? 
           (<div className='flex item-center cursor-pointer' onClick={()=>setTheme(theme==="dark"? "light" :"dark")}>
                <HiSun className='text-primary text-2xl mr-2'/>Light Mode 
            </div>)
           :
           (<div className='flex item-center cursor-pointer' onClick={()=>setTheme(theme==="dark"? "light" :"dark")}>
                <HiMoon className='text-primary text-2xl mr-2'/>Dark Mode
            </div>)
        }
    </div>
  )
}

export default ToggleTheme