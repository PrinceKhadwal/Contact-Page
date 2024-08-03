import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='w-screen flex flex-col items-center gap-4 justify-around uppercase font-bold text-xl cursor-pointer my-4 lg:flex-row lg:gap-40'>
            <h1 className=''>Logo</h1>

            <ul className='flex gap-6 '>
                <li>home</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar