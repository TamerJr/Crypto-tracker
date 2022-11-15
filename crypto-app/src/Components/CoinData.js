import React, { useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines'
import { AuthUser } from '../Context/context'
import {db} from "../firebase"
import { arrayUnion ,doc,updateDoc} from 'firebase/firestore'
const CoinData = ({coin}) => {
    const [savedCoin,setSavedCoin]=useState(false)
    const {user}=AuthUser();
    const coinPath=doc(db,"user",`${user?.email}`)
    const SaveCoin=async()=>{
        if(user?.email){
            setSavedCoin(true)
            await updateDoc(coinPath,{
                watchList:arrayUnion({
                    id:coin.id,
                    name:coin.name,
                    image:coin.image,
                    rank:coin.market_cap_rank,
                    symbol:coin.symbol
                })
            })
        }else{
            alert("Please Sign in to follow your interests")
        }
    }
  return (
    <> 
        <tr className='h-[80px] border-b overflow-hidden'>
            <td onClick={SaveCoin}><p className='flex justify-center'>{savedCoin?<AiFillStar/>:<AiOutlineStar/>}</p></td>
            <td>{coin?.market_cap_rank}</td>
            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div className='flex items-center justify-center'>
                        <img className='w-6 mr-4 rounded-full' src={coin?.image} alt={coin.name}/>
                        <p className='hidden sm:table-cell'>{coin?.name}</p>
                    </div>
                </Link>
            </td>
            <td>{coin?.symbol.toUpperCase()}</td>
            <td>${coin?.current_price.toLocaleString()}</td>
            <td>
                {coin?.price_change_percentage_24h > 0 ? 
                 (<p className='text-green-600'>{coin?.price_change_percentage_24h.toFixed(2)}%</p>):
                 (<p className='text-red-600'>{coin?.price_change_percentage_24h.toFixed(2)}%</p>)
                }
            </td>
            <td className='w-[180px] hidden sm:table-cell'>${coin?.market_cap.toLocaleString()}</td>
            <td className='w-[180px] hidden md:table-cell'>${coin?.total_volume.toLocaleString()}</td>
            <td>
                <Sparklines data={coin?.sparkline_in_7d.price}>
                    <SparklinesLine color={coin?.price_change_percentage_24h >0? 'green':"#ff5733"} />
                </Sparklines>
            </td>
        </tr>          
    </>
  )
}

export default CoinData