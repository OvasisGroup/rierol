import WhyUs from '@/components/WhyUs'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div>
        <Image src="/images/about.jpg" alt="logo" width={180000} height={100} className='w=full' />
        <div className='container mx-auto py-10 md:px-0 px-6 grid md:grid-cols-3 gap-8'>
            <div>
                <small className='font-bold text-secondary'>ABOUT</small>
                <h2 className='text-3xl font-black text-primary'>
                Operating since 2011 and registered in Kenya as a limited entity in 2014, Rierol Enterprises Limited (REL) is a renowned weighing scale and ICT solutions provider.
                </h2>
            </div>
            <div className='col-span-2'>
                <p className='mb-4'>Rierol is a dynamic and solutions-driven company specializing in the supply, servicing, and support of weighing systems, ICT, and engineering solutions. With a commitment to quality, efficiency, and innovation, we provide top-tier products and services to meet the needs of various industries.</p>
                <p className='mb-4'>Our products are of High-quality selected from the well-known International Manufacturers that use cutting edge technology on bending, cutting, welding shot blasting, spray painting and controlled heating to realize a better-quality control from beginning to the end.</p>
                <p className='mb-4'>REL aim is to improve the Operation and Financial outlook of our clients and our community by ensuring they get their value for money. We make a strong commitment to our clients, and their success is our key priority achievement. The Market knows us for our responsiveness, friendliness, and knowledge. Our strength is our people, whose skill, knowledge, and integrity keep us in the forefront in our industry.</p>
                <p className='mb-4'>We are committed to supporting each member of our firm and our clients, in an atmosphere of respect and trust. Our distinguishing feature is that we train the client on how to use the product and maintain the after sales services.</p>
            </div>
        </div>
        <WhyUs/>
    </div>
  )
}
