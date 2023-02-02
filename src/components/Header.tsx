import React from 'react'
import Pagination  from './Pagination';

export const Header:React.FC = () => {
  return (
    <div className='bg-slate-100 h-16 flex justify-between items-center p-4 w-full'>
      <div className='text-3xl'>Chart Training</div>
      <Pagination/>
    </div>
  )
}
