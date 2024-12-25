import react from "react";
import { useState ,useEffect } from "react";
import { Navigate,useNavigate } from "react-router-dom";
import { Admin } from "./Admin";
import axios from "axios";



export const Admin_landing=()=>{
    const navigate = useNavigate();
    const [paperId, setpaperId] = useState("");
    const [title ,settitle] = useState("");
    
    const send_data = async ()=>{
        const res = await axios.post('http://localhost:4000/admin/',{ title})
        setpaperId(res.data.paperId);
        console.log(res.data.paperId);
        navigate(`/admin/${res.data.paperId}`);
    }
    return(
        <div className="bg-myblue flex justify-center items-center min-h-screen">
            <div className="flex flex-col justify-center items-center bg-white w-1/2 min-h-[50vh] justify-around rounded-md py-[10vh]">
                <input type="text" placeholder="Paper Title" className="border-2 rounded-md w-2/3 p-4" onChange={(e)=>{
                    settitle(e.target.value);
                }}/>
                <button className="bg-blue-700 text-white w-1/3 h-[5vh] rounded-md" onClick={(e)=>{
                    send_data();
                }}>Create Paper</button>
            </div>
        </div>
    )
}
