import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import{AiOutlineClose} from "react-icons/ai"
import{doc,onSnapshot,updateDoc} from"firebase/firestore"
import {db} from"../firebase"
import { AuthUser } from '../Context/AuthContext'
const SavedCoin = () => {
    const [coins,setCoins]=useState([])
    const {user}=AuthUser()
    const mainPath=doc(db,"user",`${user?.email}`)

    useEffect(()=>{
        onSnapshot(mainPath,(doc)=>{
            setCoins(doc.data()?.watchList)
        })
    },[user?.email])

    const deleteElement=async(passedId)=>{
         try{
            const  result=coins.filter(item=> item?.id !==passedId )
            await updateDoc (mainPath,{
                watchList:result
            })
         }catch(err){
            alert(err.message)
         }
    }
  return (
    <div>
        {coins?.length===0 ?(<p> You are not following any coin !!.. 
            <Link to="/"> Click me to search coins .</Link>
        </p>):(<table className='w-full border-collapse text-center'>
            <thead>
                <tr className='border-b'>
                    <th className='px-4'>Rak #</th>
                    <th className='text-left'>Coin</th>
                    <th className='text-left'>Remove </th>
                </tr>
            </thead>
            <tbody>
                {coins?.map(coin=>(
                    <tr key={coin?.id} className="h-[60px] overflow-hidden">
                        <td>{coin?.rank}</td>
                        <td>
                            <Link to={`/coin/${coin?.id}`}>
                                <div className='flex items-center'>
                                    <img className= "w-8 mr-8" src={coin?.image} alt="/"/>
                                    <div>
                                        <p className='hidden sm:table-cell'>
                                            {coin?.name}
                                        </p>
                                        <p className='text-gray-500 text-left text-sm'>{coin?.symbol?.toUpperCase()}</p>
                                    </div>
                                </div>
                            </Link>
                        </td>
                        <td className='pl-8'>
                            <AiOutlineClose onClick= {()=>deleteElement(coin?.id)}className="cursor-pointer"/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>)}
    </div>
  )
}

export default SavedCoin