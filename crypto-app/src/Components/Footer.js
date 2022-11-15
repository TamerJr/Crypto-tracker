import React from 'react'
import {AiOutlineInstagram} from "react-icons/ai"
import ToggeleTheme from './ToggeleTheme'
import {FaTwitter,FaGithub,FaFacebook,FaReddit, FaTiktok} from "react-icons/fa"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='rounded-div mt-8 pt-8 text-primary'>
        <div className='grid md:grid-cols-2'>
            <div className='flex justify-evenly w-full md:max-w-[300px] uppercase'>
                <div>
                    <h2 className='font-bold'>Support</h2>
                    <ul>
                        <li className='text-sm py-2'>Help Center</li>
                        <li className='text-sm py-2'>Contact Us</li>
                        <li className='text-sm py-2'>API Status</li>
                        <li className='text-sm py-2'>Documentation</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold'>Info</h2>
                    <ul>
                        <li className='text-sm py-2'>About Us</li>
                        <li className='text-sm py-2'>Careers</li>
                        <li className='text-sm py-2'>Invest</li>
                        <li className='text-sm py-2'>Legal</li>
                    </ul>
                </div>
            </div>
            <div className='text-right'>
                <div className='w-full flex justify-end'>
                    <div className='w-full md:w-[300px] py-4 relative'>
                        <div className='flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]'>
                            <ToggeleTheme/>
                        </div>
                        <p className='text-center md:text-right'><Link to="/signup"><span className='text-blue-400 font-semibold'>Sign up</span></Link> to catch crypto news </p>
                    
                        <div className='flex py-4 justify-between text-accent'>
                            <AiOutlineInstagram/>
                            <FaTiktok/>
                            <FaTwitter/>
                            <FaFacebook/>
                            <FaGithub/>
                            <FaReddit/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p  className='text-center py-4'> Tamer Products</p>
        <p className='text-center py-4'>Powered by Coin Gecko</p>
    </div>
  )
}

export default Footer