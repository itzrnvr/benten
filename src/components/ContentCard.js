import React from 'react'

export default function ContentCard(props) {
  return (
    <div className='w-1/3  
    shadow-lg shadow-blue-500/50
    text-white cursor-pointer
    bg-gradient-to-r from-sky-500 to-indigo-500 
    transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
     py-6 px-7 max-h-fit rounded-md shadow-lg'>
        <div className='pb-3 justify-center flex text-4xl'>
            {props.heading}
        </div>
        <div className='text-lg  flex justify-center'>
            {props.content}
        </div>
    </div>
  )
}
