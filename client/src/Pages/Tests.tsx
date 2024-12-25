import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Question_Card } from '../Components/Question_Card';
export const Tests =() =>{
    const [option1 , setoption1] = useState("");
    const [option2 , setoption2] = useState("");
    const [option3 , setoption3] = useState("");
    const [option4 , setoption4] = useState("");
    const [question , setquestion] = useState("");
    const [iscorrect , setiscorrect] = useState();
    const [total_questions , settotal_questions] = useState(5);
    return (
        <div className = "bg-myblue  min-h-screen flex items-center-top justify-center " >
            {/* {for(let i=0;i<total_questions;i++)test_box(option1,option2,option3,option4,question,iscorrect)} */}
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
