import React from 'react'
import ContentCard from './ContentCard'

export default function Content(props) {
  return (
    <div className='bg-gray-950	h-full'>
        <div className='flex justify-center pt-8 pb-4 text-white'>
            <h1 className='text-3xl shadow-lg p-4 rounded-md shadow-blue-500/50'>SPECIALISATONS OFFERED</h1>
        </div>
        <div className='p-10 pt-18   flex space-x-10'>
            {props.data.map((d)=> {
                return  <ContentCard 
                heading={d.heading}
                content={d.content}/>
            })}
           
        </div>
    </div>
  )
}
