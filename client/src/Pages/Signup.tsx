import axios from "axios";
import React, { useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";
export const SignUp=()=>{
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();
    async function buttonClick(){

        const res = await axios.post('http://localhost:4000/signup',{
            username,
            password,
            email
        });
        console.log(res.data);
        navigate(`/home/${res.data}`);
    }
    return(
        <div className="bg-myblue flex justify-center items-center min-h-screen">
            <div className="flex justify-center bg-white w-1/2 min-h-[50vh] rounded-md">
                <div className="w-2/3 min-h-[50vh] flex flex-col justify-around items-center">
                    <h1 className="font-bold text-2xl font-sans-serif"> SignUP</h1>
                    <input type =" text" placeholder="Username" className="border-2 rounded-md p-4 w-full" onChange={(e)=>{
                        setusername(e.target.value);
                    }}/>
                    <input type ="password" placeholder="Email" className="border-2 rounded-md p-4 w-full" onChange={(e)=>{
                        setemail(e.target.value);
                    }}/>
                    <input type ="password" placeholder="Password" className="border-2 rounded-md p-4 w-full" onChange={(e)=>{
                        setpassword(e.target.value);
                    }}/>
                    <button className="bg-blue-500 rounded-md text-white w-1/3 h-[5vh]" onClick={()=>{
                        buttonClick();
                    }}>Login</button>
                </div>
            </div>
        </div>
    )
}
