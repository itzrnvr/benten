import React from 'react'

export default function Nav() {
  return (
    <div className='bg-gray-950	'>
        <nav className='flex justify-between pt-8 pb-4' >
            <ul className='flex space-x-14 px-12 text-2xl
            text-white '>
              
                <li className='hover:text-blue-300'>
                  <a href=''>Home</a>
                </li>
                <li className='hover:text-blue-300'>
                  <a href=''>Assitant</a> 
                </li>
                <li className='hover:text-blue-300'>
                  <a href=''>More</a>
                </li>
                <li className='hover:text-blue-300'>
                  <a href=''>About Us</a> 
                </li>
            </ul>

            <div className='h-12 w-64 px-12'>
              <img className=' w-full h-full object' src='https://www.bennett.edu.in/wp-content/uploads/2023/01/logo-1.webp'/>
            </div>
        </nav>
    </div>
  )
}
