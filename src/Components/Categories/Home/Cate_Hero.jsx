import React from 'react'
import { CiImageOn } from 'react-icons/ci'
import { CATEGORY } from '../../../Data/Datas'
import FIlterHeader from '../../FIlterHeader'

const Cate_Hero = () => {
  return (
    <div className='lg:px-24 flex flex-col px-9 my-10'>
      <FIlterHeader/>

      <div className='flex flex-wrap bg-stone-600 h-[400px] items-center justify-center rounded-xl w-[100%] lg:w-[100%]'>
        <CiImageOn className='text-white bg-stone-600 text-3xl' />
      </div>

      <div className='flex flex-wrap items-center justify-center lg:gap-10 my-[10px] '>
        {CATEGORY.map((item, index) => (
          <div
            key={index}
            className='flex lg:flex-col items-center justify-center w-[100%] lg:h-[400px] gap-2 lg:w-[22.5%] px-3 py-3 rounded-xl '
          >
            <div className='flex bg-stone-600 h-[200px]  rounded-xl w-full'></div>

            <div className='flex flex-wrap gap-5 w-full items-center justify-center   '>
              <h1 className='text-2xl text-stone-300 text-left my-5'>
                {item.name}
              </h1>
              <button className='bg-[#CF0807] py-2 w-[100%] text-stone-300 text-lg rounded-md '>
                Explore{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cate_Hero
