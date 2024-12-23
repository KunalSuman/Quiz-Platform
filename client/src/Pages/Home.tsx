import React from 'react'
import { Question_Card } from '../Components/Question_Card'
export const Home = () =>{
    return (
        <div className = "bg-myblue  min-h-screen flex items-center-top justify-center " >
           <div className = "w-1/2 rounded-md">
                <Question_Card/>
           </div>
        </div>
    )
}
