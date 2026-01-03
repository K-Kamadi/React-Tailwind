import React from 'react'
import single from "../assets/single.png"
// import double from "../assets/double.png"
// import triple from "../assets/tiple.png"


const Cards = () => {
  return (
    <div className='bg-white w-full py-[10rem] px-4 '>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-3'>
        <div className='shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300' >
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt='/'></img>
            <h2  className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className=''>$149</p>
            <div className=''>
                <p className=''>500 GB Storage</p>
                <p className=''>1 Grated User</p>
                <p className=''>Send up to 2 GB </p>
            </div>
            <button className=''>Start Trial</button>
        </div>
        </div>
    </div>
  )
}

export default Cards