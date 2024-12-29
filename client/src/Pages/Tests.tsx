import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Question_Card } from '../Components/Question_Card';
import axios from 'axios';
export const Tests =() =>{
    const [iscorrect , setiscorrect] = useState("");
    const [total_questions , settotal_questions] = useState({});
    const [counter , setcounter ] = useState(0);
    const [color , setcolor] = useState(0);
    const {paperId} = useParams();
    async function colorcheck(){
        if(color == 1){
            return(
                'bg-green-500'
            )
        }
        else if(color == 2){
            return(
                'bg-red-500'
            )
        }
        else {
            return(
                'bg-white'
            )
        }
    }
    async function checkanswer(answer:string, option : string){
        if(answer == option){
            console.log("Correct Answer");
            setcolor(1);
        }
        else{
            console.log("Wrong Answer");
            setcolor(2);
        }
    }
    useEffect(()=>{
        async function getquestions(){
            const res = await axios.get(`http://localhost:4000/test/${paperId}`);
            console.log(res.data);
            settotal_questions(res.data);
        }
        getquestions();
    },[]);
    return (
        <div className = "bg-myblue min-h-screen flex flex-col items-center-top" >
            {Object.keys(total_questions).map((data)=>{
               return(
                <div className='bg-white rounded-md m-4 p-4'>
                    <div className='px-2 text-2xl font-bold'>
                        {total_questions[data].question}
                    </div>
                    <div className = 'py-4'>
                        <div className={`text-lg m-4 font-semibold border-2 border-slate-500 rounded-md p-4 ${colorcheck()}`} onClick={()=>{
                            checkanswer(total_questions[data].answer , total_questions[data].option1);
                        }}>
                            {total_questions[data].option1}
                        </div>
                        <div className='text-lg m-4 font-semibold border-2 border-slate-500 rounded-md p-4' onClick={()=>{
                            checkanswer(total_questions[data].answer , total_questions[data].option2);
                        }}>
                            {total_questions[data].option2}
                        </div>
                        <div className='text-lg m-4 font-semibold border-2 border-slate-500 rounded-md p-4' onClick={()=>{
                            checkanswer(total_questions[data].answer , total_questions[data].option3);
                        }}>
                            {total_questions[data].option3}
                        </div>
                        <div className='text-lg m-4 font-semibold border-2 border-slate-500 rounded-md p-4' onClick={()=>{
                            checkanswer(total_questions[data].answer , total_questions[data].option4);
                        }}>
                            {total_questions[data].option4}
                        </div>
                    </div>
                </div>
               )
            })
            }
        </div>
    )
}

function test_box(option1:string,oprion2:string,option3:string,option4:string,question:string,iscorrect:boolean){
    return(
        <div className = "w-1/3 rounded-md">
                <Question_Card/>
        </div>
    )
}
