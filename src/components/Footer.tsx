import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-primary flex flex-col justify-center items-center py-10'>
        <Image src="/images/rierol-logo.png" alt="logo" width={120} height={100} className='width={100} py-4' />
        <h3 className='text-white md:max-w-lg px-6 text-center'>Operating since 2011 and registered in Kenya as a limited entity in 2014, Rierol Enterprises Limited (REL) is a renowned weighing scale and ICT solutions provider.</h3>
        <h1 className='text-white pt-5 font-bold text-center' >Copyright,2025 - All rights reserved, Rierol Enterprises Limited</h1>
    </div>
  )
}
