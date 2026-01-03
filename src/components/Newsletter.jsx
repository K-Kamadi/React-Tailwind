import React  from 'react'


const Newsletter = () => (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2  '>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col justify-between items-center sm:flex-row'>
                    <input className='p-3 w-full text-black rounded-md' type='email' placeholder='someone@example.com' />
                    <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto px-6 font-medium py-3 ml-4 my-6 text-black'>Notify me</button>
                </div>
                <p>We care about the protections of your data. Read our <span className='text-[#00df9a] hyperlink'>Privacy Policy</span></p>
            </div>
        </div>
    </div>
)      
    


export default Newsletter