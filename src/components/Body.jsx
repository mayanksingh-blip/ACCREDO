import React from 'react'

const leftData = ['10th', '12th', 'Certificates', 'Projects', 'Research Papers', 'Participations']
const rightData = ['LinkedIn', 'Leetcode', 'Github', 'Codechef']

const Body = () => {
  return (
    <div className='flex flex-row p-5 justify-between' >
        <div className="left flex flex-col ">
            {leftData.map((item)=>(
                <button className='my-5 bg-indigo-400 text-lg p-3 rounded-md text-white hover:bg-indigo-200 hover:text-black hover:scale-110' >{item}</button>
            ))}
        </div>
        <div className="main w-6/12 bg-slate-300 h-max">
        
        </div>
        <div className="right flex flex-col ">
            {rightData.map((item)=>(
                <button className='my-5 bg-indigo-400 text-lg p-3 rounded-full text-white hover:bg-indigo-200 hover:text-black hover:scale-110' >{item}</button>
            ))}
        </div>
    </div>
  )
}

export default Body