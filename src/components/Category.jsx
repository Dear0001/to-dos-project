import React from 'react'
import { FaCalendarCheck } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiMiniBars3 } from "react-icons/hi2";

export const Category = () => {
  return (
    <>
        <div className='w-[11rem] bg-[#a587fa] px-2 py-[2px] rounded-[12px] flex justify-start items-center text-left gap-2 my-5  sticky top-0'>
            <span className='bg-[#e1d0f6] p-2 rounded-[8px]'>{<FaCalendarCheck className='text-[15px]'/>}</span>
            <div className='text-white'>
                <p className='text-[13px]'>Finish Project</p>
                <span>13</span>
            </div>
        </div>
        <div className='w-[11rem] bg-[#be82fa] px-2 rounded-[10px] flex justify-start items-center text-left gap-2 my-5'>
            <span className='bg-[#e1d0f6] p-2 rounded-[8px]'>{<FaDownload className='text-[15px]'/>}</span>
            <div className='text-white'>
                <p className='text-[13px]'>Upcoming</p>
                <span>13</span>
            </div>
        </div>
        <div className='w-[11rem] bg-[#f06eb4] px-2 rounded-[10px] flex justify-start items-center text-left gap-2 my-5'>
            <span className='bg-[#e1d0f6] p-2 rounded-[8px]'>{<HiMiniBars3 className='text-[15px]'/>}</span>
            <div className='text-white'>
                <p className='text-[13px]'>Total Project</p>
                <span>13</span>
            </div>
        </div>
        <div className='w-[11rem] bg-[#fa6e82] px-2 rounded-[10px] flex justify-start items-center text-left gap-2 my-5'>
            <span className='bg-[#e1d0f6] rounded-[8px] my-2'><i className="fa-solid fa-spinner p-2"></i></span>
            <div className='text-white'>
                <p className='text-[13px]'>In Progress</p>
                <span>4</span>
            </div>
        </div>
    </>
  )
}
