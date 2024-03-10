import React from "react";

const  Content = () =>{
    return(

        <>
        <div className="container bg-lime-400 mx-auto my-5 text-white min-h-[70vh] rounded-xl">
            <h2 className="flex justify-center text-3xl ">Add Your Todo</h2>
            <div className="flex justify-center my-8">
            <input type="text  w-1/2"/>
            <button className="font-bold bg-lime-700 px-3 mx-3 rounded-md hover:bg-lime-800 ">Add </button>
            </div>



        </div>
        
        </>
    )
}

export default Content;