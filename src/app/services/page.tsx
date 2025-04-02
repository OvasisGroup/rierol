import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import Image from 'next/image'
import React from 'react'

export default function OurServices() {
  return (
    <div>
        <Image src="/images/services.jpg" alt="logo" width={180000} height={100} className='w=full' />
        <Services/>
        <WhyUs/>
    </div>
  )
}
