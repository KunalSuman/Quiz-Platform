import { useState } from "react";
import React from "react";
export const Admin = () => {

    const createQuestion=()=>{
        const [question , setquestion] = useState("");
        const [option1 , setoption1] = useState("");
        const [option2 , setoption2] = useState("");
        const [option3 , setoption3] = useState("");
        const [option4 , setoption4] = useState("");
        for(let i = 0; i < 5; i++){
            return(
                <div className="py-4">
                    <div className="flex flex-col rounded-md m-4 ">
                        <div className="py-2 w-full">
                            <input type="text" placeholder="Question" className="w-full border-color-slate-500 border-2 rounded-md" onChange={(e)=>{
                                setquestion(e.target.value)
                            }}/>
                        </div>
                        <div className="py-2 w-full">
                            <input type="text" placeholder="Option 1" className="w-full border-color-slate-500 border-2 rounded-md"/>
                        </div>
                        <div className="py-2 w-full">
                            <input type="text" placeholder="Option 2" className="w-full border-color-slate-500 border-2 rounded-md"/>
                        </div>
                        <div className="py-2 w-full">
                            <input type="text" placeholder="Option 3" className="w-full border-color-slate-500 border-2 rounded-md"/>
                        </div>
                        <div className="py-2 w-full">
                            <input type="text" placeholder="Option 4" className="w-full border-color-slate-500 border-2 rounded-md"/>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between px-4 py-2">
                            <button className="bg-blue-700 rounded-md text-white w-1/3">Done</button>
                            <button className="bg-blue-700 rounded-md text-white w-2/5">Add Question</button>
                        </div>
                    </div>
                </div>
            )
        }

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
