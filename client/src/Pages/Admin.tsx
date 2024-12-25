import axios from "axios";
import {  useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
export const Admin = () => {
    const [question , setquestion] = useState("");
    const [option1 , setoption1] = useState("");
    const [option2 , setoption2] = useState("");
    const [option3 , setoption3] = useState("");
    const [option4 , setoption4] = useState("");
    const [answer , setanswer] = useState("");
    const [isDone , setisDone] = useState(false);
    const {paperId} = useParams();
    const navigate = useNavigate();
    const post_to_server = async(isDone : Boolean)=>{
        console.log("Paper ID in React:", paperId);
        const res = await axios.post(`http://localhost:4000/admin/${paperId}`,{
                question,
                option1,
                option2,
                option3,
                option4,
                answer
        });
        console.log(res.data);
        if(isDone == false){
            setoption1("");
            setoption2("");
            setoption3("");
            setoption4("");
            setquestion("");
            setanswer("");
        }
        else{
            setisDone(true);
            navigate("/");
        }
    }
    const createQuestion=()=>{
        return(
            <div className="py-4">
                <div className="flex flex-col rounded-md m-4 ">
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Question" className="w-full border-color-slate-500 border-2 rounded-md" value={question} onChange={(e)=>{
                            setquestion(e.target.value)
                        }}/>
                    </div>
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Option 1" className="w-full border-color-slate-500 border-2 rounded-md" value={option1} onChange={(e)=>{
                            setoption1(e.target.value)
                            }}/>
                    </div>
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Option 2" className="w-full border-color-slate-500 border-2 rounded-md" value={option2} onChange={(e)=>{
                            setoption2(e.target.value)
                        }}/>
                    </div>
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Option 3" className="w-full border-color-slate-500 border-2 rounded-md" value={option3} onChange={(e)=>{
                            setoption3(e.target.value)
                        }}/>
                    </div>
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Option 4" className="w-full border-color-slate-500 border-2 rounded-md" value={option4} onChange={(e)=>{
                            setoption4(e.target.value)
                        }}/>
                    </div>
                    <div className="py-2 w-full">
                        <input type="text" placeholder="Answer " className="w-full border-color-slate-500 border-2 rounded-md" value={answer} onChange={(e)=>{
                            setanswer(e.target.value)
                        }}/>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between px-4 py-2">
                        <button className="bg-blue-700 rounded-md text-white w-1/3" onClick={()=>{
                            setisDone(true);
                            post_to_server(isDone);
                        }}>Done</button>
                        <button className="bg-blue-700 rounded-md text-white w-2/5" onClick={()=>{
                            setisDone(false);
                            post_to_server(isDone);
                        }}>Add Question</button>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className="bg-myblue flex justify-center min-h-screen items-center-top">
            <div className="py-4 w-1/3 bg-rounded" >
                <div className="bg-white w-full rounded-md">
                    {createQuestion()}

                </div>
            </div>
        </div>
    )
}
