import { useEffect, useState } from 'react'
import React from 'react'
import { Question_Card } from '../Components/Question_Card'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export const Home = () =>{
    const [paperNo , setpaperNo] = useState({});
    const navigate = useNavigate();
    useEffect(()=>{
    async function getPapers(){
       const res = await axios.get('http://localhost:4000/home');
       console.log(res.data);
       setpaperNo(res.data);
       console.log((res.data));
    };
    getPapers();
},[]);

    return(
        <div className='bg-myblue min-h-screen flex flex-col items-center '>
            {Object.keys(paperNo).map((data)=>{
                const paper = paperNo[data];
                return(
                <div className='m-4 bg-white rounded-md h-[10vh] w-3/4 p-4 ' onClick={()=>{
                    navigate(`/test/${paper.id}`);
                }}>
                    <h1>
                        {paper.title}
                    </h1>
                    <h3>
                        {paper.id}
                    </h3>
                </div>
                );
            })}

        </div>
    )
}
