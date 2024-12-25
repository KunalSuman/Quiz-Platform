import React, { useState } from "react";

export const Question_Card = () => {
    const [option1 , setoption1] = useState("1000");
    const [option2 , setoption2] = useState("2000");
    const [option3 , setoption3] = useState("3000");
    const [option4 , setoption4] = useState("4000");
    const [question , setquestion] = useState("What is 2+2?");
    const [iscorrect , setiscorrect] = useState();
    const [selected , setselected] = useState();
    return (
        <div className = "flex flex-col bg-white items-center rounded-md m-4 py-4 w-full">
            <div>
                <h1>{question}</h1>
            </div>
            <div className = "w-full flex justify-center py-2">
                <button className="border-2 border-black w-1/2 rounded-md">{option1}</button>
            </div>
            <div className = "w-full flex justify-center py-2">
                <button className="border-2 border-black w-1/2 rounded-md">{option2}</button>
            </div>
            <div className = "w-full flex justify-center py-2">
                <button className="border-2 border-black w-1/2 rounded-md">{option3}</button>
            </div>
            <div className = "w-full flex justify-center py-2">
                <button className="border-2 border-black w-1/2 rounded-md">{option4}</button>
            </div>
            <button className="border-black rounded-md bg-blue-700 text-white w-1/3">Submit</button>
        </div>
    )
}
