import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
export const Login=()=>{

    const navigate = useNavigate();
    return(
        <div className="bg-myblue flex justify-center items-center min-h-screen">
            <div className="flex justify-center bg-white w-1/2 min-h-[50vh] rounded-md">
                <div className="w-2/3 min-h-[50vh] flex flex-col justify-around items-center">
                    <h1 className="font-bold text-2xl font-sans-serif"> SignUP</h1>
                    <input type =" text" placeholder="Username" className="border-2 rounded-md p-4 w-full"/>
                    <input type ="password" placeholder="Password" className="border-2 rounded-md p-4 w-full"/>
                    <button className="bg-blue-500 rounded-md text-white w-1/3 h-[5vh]">Login</button>
                </div>
            </div>
        </div>
    )
}
