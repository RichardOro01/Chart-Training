import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from './Header';

export const Layout:React.FC = () => {
  return (
    <div className='flex flex-col items-center w-full h-screen'>
      <Header/>
      <div className='flex items-center justify-center w-full h-full'>
        <div className='w-1/2 overflow-auto'>
          <Outlet/>
        </div>
      </div>
      
      
    </div>
    
  )
}
