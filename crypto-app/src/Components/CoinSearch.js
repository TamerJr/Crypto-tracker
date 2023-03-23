import React, { useState } from 'react'
import CoinData from "./CoinData"
export const CoinSearch = ({coins}) => {
    const [search,setSearch]=useState("")
    const handleSearch =(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div className='rounded-div my-4 '>
        <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
            <h1 className=' text-2xl font-bold my-2'>Search a Coin</h1>
            <form>
                <input className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
                    onChange={handleSearch} 
                    type="text" placeholder='Search'/>
            </form>
        </div>
        <table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th>Follow</th> 
                    <th className='px-4'>Rank</th>
                    <th>Name</th>
                    <th> </th>
                    <th>Price </th>
                    <th>24h</th>
                    <th className='hidden md:table-cell'>24h Volume</th>
                    <th className='hidden md:table-cell'>Mkt</th>
                    <th className='hidden md:table-cell'>Last 7 Days</th>
                </tr>
            </thead>
            <tbody>
                {coins.filter(value=>{
                    if(search===""){
                        return value
                    }else if(
                        value?.name?.toLowerCase().includes(search.toLowerCase())
                    ){return value; }
                }).map(coin=>
                    <CoinData key={coin?.id} coin={coin}/>
                )}
            </tbody>
        </table>
        
    </div>
  )
}