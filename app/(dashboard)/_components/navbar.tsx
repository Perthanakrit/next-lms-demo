import React from 'react'
import { MobileSidebar } from './mobile-sidebar'
import { NavbarRoutes } from '@/components/navbar-routes'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <div className='p-4 border-b h-full flex items-center bg-white shadow-sm'>
        <MobileSidebar />
        <NavbarRoutes />
    </div>
  )
}