import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightSection = () => {
  return (
    <section className='w-full sticky hidden top-2 overflow-y-auto xl:flex flex-col items-stretch h-[90vh] overflow-x-hidden px-6'>
        <div>
          <div className='relative w-full h-full group'>
            <label htmlFor='searchBox' className='absolute top-0 left-0 h-full flex items-center justify-center'>
              <BsSearch className='w-5 h-5 text-gray-500'/>
              </label>
          <input id='searchBox' type='text' placeholder='search' className='outline-none bg-transparent border-none w-full h-full rounded-xl py-4 px-6'/>
          </div>
        </div>
        <div></div>
        <div></div>
        </section>
  )
}

export default RightSection