import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

const links =[

  
    {to:"/",label:"Home"},
    {to:"/about",label:"About"},
    {to:"/projects",label:"Projects"},
    {to:"contacts",label:"Contacts"},
  

]

  return (
    <div class='bg-white flex'>
        <div className='flex items-center pt-4 ml-12 gap-3 ' >
          <img src="/img/profile.jpg" alt="Profile" className='h-12 w-12 rounded-full' />
          <p className='text-base font-bold uppercase '>Haymanot Alemayoh</p>
        </div>
        <div className='ml-[500px]'>
        <ul className='flex gap-14 pt-[34px] text-sm font-bold uppercase text-gray-700'>
          {links.map((link,index)=>(
            <NavLink to = {link.to} key={index} ><li className='hover:text-purple-500'>{link.label}</li></NavLink> 

          ))}
         
       
          
        </ul>
        </div>
    </div>
    
  )
}
