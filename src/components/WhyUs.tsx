import React from 'react'
import Link from 'next/link'
import { Settings } from 'lucide-react'

const WhyUsList = [
    {
        id: 1,
        title: "Comprehensive consultation",
        body: "We take the time to listen to our clikents and understand their needs before embarking on a project."
    },
    {
        id: 2,
        title: "Tailored Solutions",
        body: "We customize our services to meet client-specific requirements."
    },
    {
        id: 3,
        title: "Quality Products & Services",
        body: "We source from internationally trusted brands to ensure reliability and optimal performance."
    },
    {
        id: 4,
        title: "Unmatched turnaround time",
        body: "We exceed expectations when it comes to timely delivery of ourservices."
    },
    {
        id: 5,
        title: "Expert Support & Maintenance",
        body: "Our team of professionals boasts of timely & efficient provision of technical support and after-sales service."
    },
    {
        id: 6,
        title: "Competitive Pricing",
        body: "We offer cost-effective solutions without compromising quality."
    },
    {
        id: 7,
        title: "10+ years of Experience",
        body: "We have gained mastery of our services over the years and only keep striving to deliver excellence to our customers."
    },
    {
        id: 8,
        title: "Drive for innovation & growth",
        body: "We never stop learning and exploring new ways of bringing the best products & services to your business."
    },
]

export default function WhyUs() {
  return (
    <div className='bg-blue-100 pt-10'>
    <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className=''>
            <h1 className='md:text-4xl text-3xl font-bold text-primary text-center'>Why Choose Us?</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70 text-center max-w-200 mx-auto'>With a commitment to quality,
efficiency, and innovation, we provide top-tier products and services to meet the needs of
various industries</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-4 justify-start items-start gap-6'>
                {WhyUsList.map((service) => (
                    <Link key={service.id} href={'/'}>
                    <div className='h-75 shadow-none bg-blue-50 hover:bg-primary rounded-2xl hover:text-white p-10 flex flex-col items-center justify-start'>
                        <div className=' flex flex-col items-center justify-justify'>
                            <Settings size={40} className='my-4'/>
                            <h3 className='font-bold text-2xl text-center'>{service.title}</h3>
                            <p className='text-sm mt-4 hover:text-white text-center'>{service.body}</p>
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
