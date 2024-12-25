import React from "react";
import { Navigate,useNavigate } from "react-router-dom";
export const Login=()=>{

    const navigate = useNavigate();
    return(
        <div className="bg-myblue flex justify-center items-center min-h-screen">
            <div className="flex justify-center bg-white w-1/2 min-h-[50vh] rounded-md">
                <div className="w-2/3 min-h-[50vh] flex justify-around items-center">
                    <button className="bg-blue-700 rounded-md w-1/3 h-[10vh] text-white" onClick={()=>{
                        navigate("/admin_landing")
                    }}>Admin</button>
                    <button className="bg-blue-700 rounded-md w-1/3 h-[10vh] text-white" onClick={()=>{
                        navigate("/home")
                    }}>User</button>
                </div>
            </div>
        </div>
    )
}
