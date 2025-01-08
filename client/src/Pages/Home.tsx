import { useEffect, useState } from 'react'
import React from 'react'
import { Question_Card } from '../Components/Question_Card'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
export const Home = () =>{
    const [paperNo , setpaperNo] = useState({});
    const navigate = useNavigate();
    const {userid} = useParams();
    useEffect(()=>{
    async function getPapers(){
       const res = await axios.get(`http://localhost:4000/home/${userid}`);
       console.log(res.data);
       setpaperNo(res.data);
       console.log((res.data));
    };
    getPapers();
},[]);
    return(
        <div>
            <div className='border-b-2 w-full h-[10vh]'>
                <div className='min-h-[10vh] flex items-center '>
                    <button className='bg-myblue text-white p-2 rounded-md' onClick={()=>{
                        navigate(`/admin_landing/${userid}`);
                    }}>Create Paper</button>
                </div>
            </div>
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
        </div>
    )
}
