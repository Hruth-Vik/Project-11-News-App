// import React from 'react'
import { IoHome } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import profile_pic from "../assets/profile_pic.jpeg"
// import "./container.css"
const Container = () => {
    return (
        <div className="flex bg-black h-20 w-full items-center justify-center">
            <div className="flex h20 w-10/12 text-white items-center justify-center" >
                <ul className="flex gap-44">
                    <li className="hover:rotate-180 duration-300 cursor-pointer"><AiFillGithub size={40} /></li>
                    <li className="hover:rotate-180 duration-300 cursor-pointer"><IoHome size={40} /></li>
                    <li className="hover:rotate-180 duration-300 cursor-pointer"><SiAboutdotme size={40} /></li>
                </ul>
            </div>
            <div className="logo">
                <img src={profile_pic} alt="" className="h-10 w-auto rounded-full hover:scale-x-[-1] duration-300 cursor-pointer" />
            </div>
        </div>
    )
}

export default Container