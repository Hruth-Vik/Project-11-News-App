// import React from 'react'
import Tester from "../assets/tester.jpeg"
const Box = () => {
    const img = Tester;
    const title = "Sample"
    const date = "sample date"


    return (
        <div className="bg-green-500 h-72 w-96 bg-opacity-25 backdrop-filter backdrop-blur-lg flex flex-col relative" >
            <img src={img} alt="" className=" h-full w-full " />
            <div className="absolute bottom-0 left-0 text-white bg-gradient-to-t from-gray-800 to-transparent w-full pl-2 pb-1">
                <h1 className="text-[1.8rem] font-bold">{title}</h1>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Box
