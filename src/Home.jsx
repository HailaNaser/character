import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Nav from './Nav';


 function Home() {
    const [element , setElement] = useState([]);
    const [search , setSearch] = useState([]);

    useEffect(()=> {
        axios.get('https://finalspaceapi.com/api/v0/character').then((res)=> {
            setElement(res.data)
            // console.log(res.data)
        })
    },[])

    const handleClick =(id)=> {
            setElement(element.filter(el => el.id !== id));
    }

    return (
        <>
        <Nav></Nav>
        {/* <input type="text"  placeholder='Search' onChange={(e)=> {setSearch(e.target.value)}}/> */}
        <div className='container flex flex-wrap justify-center mt-[20px]'>
            {element.map((item)=> {
                return<div key={item.id} className="card box bg-base-100 w-[220px] h-[300px] ml-[15px] mb-[20px]">
                <figure>
                <img src={item.img_url} />
                </figure>
                <div className="card-body bg-[#eee] ">
                  <h2 className="card-title">{item.name}</h2>
                </div>
                <div className="card-actions justify-end align-item mt-[-30px] mr-[5px]">
                     <Link to={`/Details/${item.id}`}>
                    <button className="badge det badge-outline mb-[1px]">Details</button>
                    </Link>
                    <button className="badge det badge-outline mt-[3px]" onClick={()=>handleClick(item.id)}>Delete</button>
                </div>
              </div>
            })}
                

        </div>
        </>
    )
}

export default Home