import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ServicesList = [
    {
        id: 1,
        image: "/SVG/construction.svg",
        title: "Construction & Civil Works",
        bgimage: "construction-works.jpg"
    },
    {
        id: 2,
        image: "/SVG/cabling.svg",
        title: "Structured Cabling and Electrical Works",
        bgimage: "construction-works.jpg"
    },
    {
        id: 3,
        image: "/SVG/ict.svg",
        title: "ICT Infrastructure",
        bgimage: "construction-works.jpg"
    },
    {
        id: 4,
        image: "/SVG/energy.svg",
        title: "Renewable Energy",
        bgimage: "construction-works.jpg"
    },
    {
        id: 5,
        image: "/SVG/leasing.svg",
        title: "Trade Sales Asset Management and Leasing Of Equipment",
        bgimage: "construction-works.jpg"
    }
]

export default function Services() {
  return (
    <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className='border-l-4 border-secondary pl-6'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>Products & Services Offering</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70'>Beyond Matrix Ltd is a highly diversified and integrated company providing specialised solutions in: Construction, Engineering & ICT infrastructure</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-3 justify-start items-start gap-6'>
            
                {ServicesList.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                    <div className='h-55 shadow-none bg-blue-50 hover:bg-amber-50 rounded-2xl p-6 flex flex-col items-start justify-start'>
                        <div className=''>
                            <Image src={service.image} width={100} height={60} alt="construction" className='mt-6'/>
                            <h3 className='font-bold text-xl mt-8'>{service.title}</h3>
                        </div>
                    </div>
                    </Link>
                ))}
                
                <div className='h-55 shadow-none bg-[url("/construction-works.jpg")] bg-cover bg-center rounded-2xl'></div>
            </div>
            </div>
        </div>
  )
}
