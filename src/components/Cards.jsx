import React from 'react'
import single from "../assets/single.png"
import double from "../assets/double.png"
import triple from "../assets/triple.png"


const Cards = () => {
  return (
    
    <div className='bg-white w-full py-[10rem] px-8 '>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-3 gap-8'>
        <div className=' shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' >
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='/'></img>
            <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Grated User</p>
                <p className='py-2 border-b mx-8 'py-2 border-b mx-8 mt-8>Send up to 2 GB </p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto px-6 font-medium py-3 my-6 text-black'>Start Trial</button>
        </div>

        <div className='shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300' >
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={double} alt='/'></img>
            <h2  className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center font-bold text-4xl'>$199</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8 '>3 Users Allowed</p>
                <p className='py-2 border-b mx-8 'py-2 border-b mx-8 mt-8>Send up to 10 GB </p>
            </div>
            <button className='text-[#00df9a] w-[200px] rounded-md mx-auto px-6 font-medium py-3 my-6 bg-black'>Start Trial</button>
        </div>

        <div className='shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' >
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt='/'></img>
            <h2  className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center font-bold text-4xl'>$299</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8 '>10 Users Allowed</p>
                <p className='py-2 border-b mx-8 'py-2 border-b mx-8 mt-8>Send up to 20 GB </p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto px-6 font-medium py-3 my-6 text-black'>Start Trial</button>
        </div>
        </div>
    </div>
  )
}

export default Cards