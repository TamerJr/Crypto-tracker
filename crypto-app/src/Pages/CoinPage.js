import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Sparklines,SparklinesLine } from 'react-sparklines'
import {FaTwitter,FaGithub,FaFacebook,FaReddit} from "react-icons/fa"
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom'
const CoinPage = () => {
    const [coinInfo ,setCoinInfo]=useState([])
    const params=useParams()
    const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`
    useEffect(()=>{
        axios.get(url).then(res=>{
            setCoinInfo(res.data)
        })
    },[url])
  return (
    <div className='rounded-div my-12 py-8'>
        <div className='flex py-8'>
            <img className='w-20 mr-8' src={coinInfo.image?.large} alt="/"/>
            <div>
                <p className='text-3xl font-bold'> {coinInfo?.price} price</p>
                <p>({coinInfo.symbol?.toUpperCase()} /USD)</p>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-8'>
            <div>
                <div className='flex justify-between'>
                    {coinInfo.market_data?.current_price ? 
                    (<p className='text-3xl font-bold'>$ {coinInfo.market_data?.current_price.usd.toLocaleString()}</p>):
                    null}
                    <p>7 Day</p>
                </div>
                <div>
                    <Sparklines data={coinInfo.market_data?.sparkline_7d.price}>
                        <SparklinesLine color='teal'/>
                    </Sparklines>
                </div>
                <div className="flex justify-between py-4">
                    <div>
                        <p className='text-gray-500 text-sm'>Market Cap</p>
                        {coinInfo.market_data?.market_cap?(<p>${coinInfo.market_data.market_cap.usd.toLocaleString()}</p>):null}
                    </div>
                    <div>
                        <p className='text-gray-500 text-sm'>volume(24)</p>
                        {coinInfo.market_data?.total_volume?(<p>${coinInfo.market_data.total_volume.usd.toLocaleString()}</p>):null}
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-gray-500 text-sm'>24h High</p>
                        {coinInfo.market_data?.high_24h?(<p>${coinInfo.market_data.high_24h.usd.toLocaleString()}</p>):null}

                    </div>
                    <div>
                        <p className="text-gray-500 text-sm">24h low</p>
                        {coinInfo.market_data?.low_24h?(<p>${coinInfo.market_data.low_24h.usd.toLocaleString()}</p>):null}

                    </div>
                </div>
            </div>
            <div>    
                <p className='text-xl font-bold'>Market Stats</p>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-sm text-gray-500'>Market Rank</p>
                        {coinInfo.market_cap_rank}
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>
                            Hashing Algorithm
                        </p>
                        {coinInfo.hashing_algorithm ?(<p>{coinInfo.hashing_algorithm}</p>):null}
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'>Trust Score</p>
                        {coinInfo.tickers ? <p>{coinInfo.liquidity_score.toFixed(2)}</p> :null}
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div >
                        <p className='text-sm text-gray-500'> Price Change (24h)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_24h.toFixed(2)}</p>):null}
                    </div>
                    <div className='text-sm text-gray-500'>
                        <p> Price Change (7d)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_7d.toFixed(2)}</p>):null}
                    </div>
                    <div className='text-sm text-gray-500'>
                        <p> Price Change (14d)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_14d.toFixed(2)}</p>):null}
                    </div>
                </div>
                <div className='flex justify-between py-4'>
                    <div>
                        <p className='text-sm text-gray-500'> Price Change (30d)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_30d.toFixed(2)}</p>):null}
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'> Price Change (60d)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_60d.toFixed(2)}</p>):null}
                    </div>
                    <div>
                        <p className='text-sm text-gray-500'> Price Change (1y)</p>
                        {coinInfo.market_data ? (<p>{coinInfo.market_data.price_change_percentage_1y.toFixed(2)}</p>):null}
                    </div>
                </div>
                <div className='flex justify-around p-8 text-amber-500 text-lg '>
                    <FaTwitter className='hover:scale-150 hover:text-blue-400 ease-in-out duration-500'/>
                    <FaFacebook className='hover:scale-150 hover:text-blue-700 ease-in-out duration-500'/>
                    <FaReddit className='hover:scale-150 hover:text-red-600 ease-in-out duration-500'/>
                    <FaGithub className='hover:scale-150 hover:text-teal-700 ease-in-out duration-500'/> 
                </div>
            </div>
        </div>
        <div className='py-4'>
            <p className=' text-xl font-bold'>About {coinInfo?.name}</p>
            <p dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(coinInfo.description ?coinInfo.description.en:"" ),}}></p>
        </div>
    </div>
  )
}

export default CoinPage