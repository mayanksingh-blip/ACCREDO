import React from 'react'

const Navbar = () => {
  return (
    <div className='p-5 mx-5 flex justify-between items-center'>
        <div className="logo text-3xl">Eliteasses</div>
        <input type="text" className="search w-6/12 p-3 border-2 outline-slate-300" placeholder='Search...' />
        <div></div>
    </div>
  )
}

export default Navbar