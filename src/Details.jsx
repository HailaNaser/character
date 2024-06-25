import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';

function Details() {
const {id} = useParams();
const [data , setData] = useState([])

    useEffect(()=> {
        axios.get(`https://finalspaceapi.com/api/v0/character/${id}`).then((res)=> {
            console.log(res.data)
            setData(res.data)
        })
    },[id])
// const data = 

  return (
    <div className='content'>
        <div><img src={data.img_url} alt="" /></div>
        <div className='text text-[#777] p-[10] ml-10px'>
        <h2 className='thename'>Name: {data.name}</h2>
        <div>{data.status}</div>
        <div>{data.gender}</div>
        <div>{data.origin}</div>
        <div>{data.species}</div>
        <div>{data.abilities && data.abilities.slice(0,2).map((el , index)=> {
            return <div key={index}>{el}</div>
        })}
        </div>
  </div>
        
    </div>
  )
}

export default Details