import React from "react";

const Navbar = () =>{
    return(
        <>
        
        <nav className=" bg-lime-600 text-white list-none gap-20 cursor-pointer py-4">
            <ul className="flex ">
            <h5 className="text-xl mx-4">T0D0-LIST</h5>
            <li className="mx-8 hover:font-bold " >Home</li>
            <li className="mx-8  hover:font-bold">About</li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar