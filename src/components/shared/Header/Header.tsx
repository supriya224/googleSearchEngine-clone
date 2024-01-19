import React from 'react'
import { TbGridDots } from "react-icons/tb";
import Image from 'next/image'; // it is image component which is predefine in next js
import Link from 'next/link';

export const Header:React.FC = () => { // its show that functional component in typescript
  const url:string= "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
  return ( 
    <div className=' flex justify-end py-3 space-x-3 items-center'>
      <Link href="https://mail.google.com" className='text-sm hover:underline cursor-pointer'>Gmail</Link>
      <Link href="https://images.google.com" className='text-sm hover:underline cursor-pointer'>Images</Link>
      <TbGridDots size={30} className='rounded-full object-cover p-1 hover:bg-gray-200'/>
      {/* we use image component here and must src, width and alt parameter  */}
      <Image src={url} alt='logo' width={40} height={40}/> 
  </div>
  )
}
