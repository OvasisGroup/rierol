import React from 'react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <div className='bg-[url("/images/Industrial-weighing-scale-scaled.jpg")] bg-cover bg-center h-[90vh] bg-amber-700'>
      <div className='container mx-auto grid md:grid-cols-2 gap-6 py-10 md:px-0 px-6 h-full'>
        <div className='flex flex-col items-center justify-center h-full'>
          <p className='font-bold text-5xl text-white'>Weighing Systems, ICT, & Engineering Solutions Provider</p>
          <p className='text-secondary font-bold text-xl mt-5'>With a commitment to quality, efficiency, and innovation, we provide top-tier products and services to meet the needs of various industries.
          </p>
          <a href='/images/rierol-profile-revised.pdf' className='flex justify-start w-full mt-6'><Button className='bg-secondary text-primary cursor-pointer hover:text-secondary'>Company Profile</Button></a>
        </div>
        <div></div>
      </div>
    </div>
  )
}
