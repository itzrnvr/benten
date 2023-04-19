import React from 'react'

export default function Hero() {
  return (
    <div className='h-1/2'>
        <div className='flex justify-center h-full '>
            <div className='flex flex-col justify-center space-y-10 text-center h-full text-white'>
                <h1 className='rounded-xl text-7xl max-w-6xl'>Jumpstart your career by choosing one of these specialisations!</h1>
               <div>
               <h1 className='text-3xl 
                font-bold
               text-transparent
               bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                '
                >SPECIALISATONS OFFERED BY BENNETT UNIVERSITY HELP ACCELERATE YOUR LEARNING</h1>
               </div>
            </div>
        </div>
    </div>
  )
}
