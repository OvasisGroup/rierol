import React from 'react'
import Link from 'next/link'

const ServicesList = [
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
        id: 1,
        title: "Competitive Pricing",
        body: "We offer cost-effective solutions without compromising quality."
    },
    {
        id: 1,
        title: "10+ years of Experience",
        body: "We have gained mastery of our services over the years and only keep striving to deliver excellence to our customers."
    },
    {
        id: 1,
        title: "Drive for innovation & growth",
        body: "We never stop learning and exploring new ways of bringing the best products & services to your business."
    },
]

export default function WhyUs() {
  return (
    <div className='container mx-auto py-10 md:px-0 px-6'>
        <div className='border-l-4 border-secondary pl-6'>
            <h1 className='md:text-4xl text-3xl font-bold text-primary'>Products & Services Offering</h1>
        <p className='font-thin text-3xl mt-4 text-black opacity-70'>Beyond Matrix Ltd is a highly diversified and integrated company providing specialised solutions in: Construction, Engineering & ICT infrastructure</p>
        </div>
        <div className='my-10'>
            <div className='grid md:grid-cols-4 justify-start items-start gap-6'>
            
                {ServicesList.map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`}>
                    <div className='h-55 shadow-none bg-blue-50 hover:bg-primary rounded-2xl hover:text-white p-6 flex flex-col items-start justify-start'>
                        <div className=''>
                            <h3 className='font-bold text-2xl'>{service.title}</h3>
                            <p className='text-sm mt-4 hover:text-white'>{service.body}</p>
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
