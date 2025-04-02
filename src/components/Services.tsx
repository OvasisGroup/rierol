import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const WhyUsList = [
    {
        id: 1,
        image: "/images/SVG/weighbridge.svg",
        title: "Automated Industrial Weighing Equipment",
    },
    {
        id: 2,
        image: "/images/SVG/ict.svg",
        title: "ICT Solutions",
    },
    {
        id: 3,
        image: "/images/SVG/conveyor.svg",
        title: "Supply & Servicing of Engineering and Technical Equipment",
    },
    {
        id: 4,
        image: "/images/SVG/construction.svg",
        title: "Building Construction & Civil Engineering Services",
    },

]

export default function Services() {
    return (
        <div className='container mx-auto py-10 md:px-0 px-6'>
            <div className=''>
                <h1 className='md:text-4xl text-3xl font-bold text-primary text-center'>Our Core Products & Services</h1>
                <p className='font-thin text-3xl mt-4 text-black opacity-70 text-center max-w-200 mx-auto'>We have been involved in supply & support to both private and public sectors in the following markets:</p>
            </div>
            <div className='my-10 grid md:grid-cols-3 gap-6'>
                <div className='hidden md:block bg-[url("/images/bridge.jpg")] bg-cover bg-center rounded-2xl'>
                </div>
                <div className='col-span-2'>
                    <div className='grid md:grid-cols-2 justify-start items-start gap-6'>
                        {WhyUsList.map((service) => (
                            <Link key={service.id} href={'/'}>
                                <div className='h-75 shadow-none bg-blue-50 hover:bg-blue-500 rounded-2xl hover:text-white p-6 flex flex-col items-center justify-start'>
                                    <div className=' flex flex-col items-center justify-justify'>
                                        <Image src={service.image} width={80} height={60} alt="construction" className='my-4' />
                                        <h3 className='font-bold text-2xl text-center'>{service.title}</h3>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
