import React from 'react'

export default function MessageBox(props) {
    return (
        <div className="flex flex-col h-screen items-center relative top-10">
                <div className="w-11/12 ">
                   
                        <div className="flex justify-between items-center p-3 border border-red-200 rounded shadow-xl bg-red-200" >
                            <p className="font-bold text-red-800 "> 
                            {props.err}</p>
                        </div>
      
                </div>

            </div>
    )
}
