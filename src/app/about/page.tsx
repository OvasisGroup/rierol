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
        <div className='bg-blue-200'>
        <div className='container mx-auto py-10 md:px-0 px-6 grid md:grid-cols-3 gap-12'>
            <div className=''>
            <h1 className='font-black text-primary text-xl mt-4'>Vision Statement</h1>
            <p>To be the world’s most customer-centric company, that understands, satisfies their product and service needs.</p>

            <h1 className='font-black text-primary text-xl mt-4'>Mission Statement</h1>
            <p>We train our clients to success; continuously contribute towards enhancing their corporate value, customer development and human capital through innovation and practicability</p>
            </div>
            <div className='col-span-2'>
                <h1 className='font-black text-2xl text-primary'>Culture &
                Core Values</h1>
                <p className='text-xl text-primary'>Our biggest priority as an international general trading organization as well as a business & financial consultant is to bring forth value to our clients in terms of negotiation, product quality and pricing. We believe that value creation is an essential part to client satisfaction and business success.</p>

<p className='font-black text-primary text-xl mt-4'>Trustworthiness & Transparency</p>
<p>Communicating honestly and creating relationships is a big part of who we are. We believe that trustworthiness and transparency are vital elements in retaining and creating successful future business relationships.

<p className='font-black text-primary text-xl mt-4'>Integrity</p>
We abide by the rules and regulations of business society. We believe that communicating ethically and morally towards our customers is essential to corporate growth and strength.

<p className='font-black text-primary text-xl mt-4'>Innovation</p>
Responding promptly with innovative solutions to different tasks is what sets us apart from our competitors. We believe that this helps us gain a fresh new perspective to problem solving.</p>
            </div>
        </div>
        </div>
        <WhyUs/>
    </div>
  )
}
