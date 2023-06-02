import { Link } from '@react-pdf/renderer'
import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {SiCodechef} from 'react-icons/si'
import {useNavigate} from 'react-router-dom'
import Navbar from './Navbar'



const leftData = ['10th', '12th', 'Certificates', 'Projects', 'Papers', 'Participations']
const rightData = ['LinkedIn', 'Leetcode', 'Github', 'Codechef']

const Body = () => {

    let navigate = useNavigate();
    // const routeChange =(item)=>{
    //     navigate(item)
    // }

  return (
    <>
    <Navbar/>
    <div className='flex flex-row p-5 mx-5 justify-between' >
        <div className="left flex flex-col ">

            {leftData.map((item)=>(
                <button onClick={()=>navigate(item)} className='my-5 bg-indigo-400 text-lg p-3 rounded-md text-white hover:bg-indigo-200 hover:text-black hover:scale-110' >{item}</button>
                ))}
                <Link to="/" >HOME</Link>
        </div>
        <div className="main w-6/12 bg-slate-300 h-max">
        
        </div>
        <div className="right flex flex-col ">
            <div >
                <AiOutlineLinkedin  size={60} color='white' onClick={()=>{window.location.href = "https://linkedin.com"}} className='p-2 my-5 bg-indigo-400 mb-2 hover:cursor-pointer  rounded-full'/>
                <SiLeetcode size={60} color='white'  onClick={()=>{window.location.href = "https://leetcode.com"}} className='p-2 my-5 bg-indigo-400 mb-2 hover:cursor-pointer  rounded-full'/>
                <AiFillGithub size={60} color='white'  onClick={()=>{window.location.href = "https://github.com"}} className='p-2 my-5 bg-indigo-400 mb-2 hover:cursor-pointer  rounded-full'/>
                <SiCodechef size={60} color='white'  onClick={()=>{window.location.href = "https://twitter.com"}} className='p-2 my-5 bg-indigo-400 mb-2 hover:cursor-pointer  rounded-full'/>
            </div>
            {/* {rightData.map((item)=>(
                <button className='my-5 bg-indigo-400 text-lg p-3 rounded-full text-white hover:bg-indigo-200 hover:text-black hover:scale-110' >{item}</button>
            ))} */}
        </div>
    </div>
    </>

  )
}

export default Body