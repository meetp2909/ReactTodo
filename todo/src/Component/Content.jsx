import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
const  Content = () =>{

    const [list, setList] = useState(" ")
    const [lists, setLists] = useState([])

    const handleAdd = () =>{
    setLists([...lists, {id:uuidv4() ,list, isCompleted:false}])
    setList(" ")
    }

    const handleEdit = () =>{

    }


    const handleDelete = () =>{
            
    }


    const handleChange = (e) =>{
    setList(e.target.value)
    }

    return(

        <>
        <div className="container bg-lime-400 mx-auto my-5 text-white min-h-[70vh] rounded-xl">
            <h2 className="flex justify-center text-3xl ">Add Your Todo</h2>
            <div className="flex justify-center my-8 ">
            <input onChange={handleChange} value={list} type="text" className="w-1/2 text-black"></input>
            <button onClick={handleAdd} className="font-bold bg-lime-600 px-3 mx-3 rounded-md hover:bg-lime-800 ">Add </button>
            </div>
     
            <h2 className="flex justify-center text-3xl">Your Lists</h2>
     {lists.map(item =>{
          return  <div className="todo">
                <div className="lists flex justify-center my-7">
                {/* <span className="mr-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>     */}
                <span className="mr-5" >{item.list}</span>    
                
                <button onClick={handleEdit} className="font-bold bg-lime-600 px-3 mx-3 rounded-md hover:bg-lime-800 ">Edit</button>
                <button onClick={handleDelete} className="font-bold bg-lime-600 px-3 mx-3 rounded-md hover:bg-lime-800 ">Delete </button>
            
                </div>
            </div>
        })}


        </div>
        
        </>
    )
}

export default Content;