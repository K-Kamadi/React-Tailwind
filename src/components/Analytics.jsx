import React from 'react'
import Laptop from "../assets/laptop.jpg"

export const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className="size-[500px] mx-auto my-4" src={Laptop} alt='/'/>
          <div className='flex justify-center flex-col'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl py-2 font-bold'>Manage Data Analytics Centrally</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Recusandae ratione commodi a cupiditate iste distinctio consequatur eveniet.
                Ex possimus sapiente, incidunt distinctio quia quibusdam, optio officiis, 
                recusandae eum voluptates provident?</p>
            <button className='bg-black w-[200px] rounded-md font-medium py-3 my-6 mx-auto md:mx-0 text-[#00df9a]'>Get Started</button>
          </div>
        </div>
    </div>
  )
}
export default Analytics 