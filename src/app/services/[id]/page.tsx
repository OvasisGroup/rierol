"use client"
import { Button } from '@/components/ui/button'
import { ArrowBigLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const WhyUsList = [
    {
        id: 1,
        mainimage: "/images/bridgeweigh.jpg",
        image: "/images/SVG/weighbridge.svg",
        title: "Automated Industrial Weighing Equipment",
        header: "leading provider of industrial weighing solutions, specializing in the supply, installation, calibration, maintenance, and servicing of industrial and automated weighing systems. We serve a wide range of industries, including manufacturing, logistics, agriculture, mining, and transportation, helping businesses achieve precise, efficient, and compliant weight measurement solutions.",
        body: [
            {
                title: "Supply of Industrial Weighing Systems",
                description: "We provide high-precision weighing equipment such as truck scales, platform scales, bench scales, conveyor belt scales, and automated weighing solutions tailored to various industrial applications. Our expert technicians ensure seamless installation and integration of weighing systems into your existing production or logistics infrastructure."
            },
            {
                title: "Calibration & Maintenance of Automated Weighing Solutions",
                description: "We offer comprehensive calibration and routine maintenance to ensure the accuracy, compliance, and long-term performance of automated weighing systems. We provide preventive maintenance, troubleshooting, and emergency repairs to minimize downtime and ensure operational efficiency."
            },
            {
                title: "Custom Weighing Solutions for Factories & Industrial Processes",
                description: "We specialize in developing and implementing tailor-made weighing solutions to meet the specific needs of manufacturing plants, production lines, and other industrial processes. Our solutions integrate seamlessly into factory automation systems, improving workflow efficiency and accuracy."
            }
        ],
    },
    {
        id: 2,
        mainimage: "/images/icta.jpg",
        image: "/images/SVG/ict.svg",
        title: "ICT Solutions",
        header: "We specialize in providing cutting-edge Enterprise IT solutions, seamless system integration, networking, cybersecurity, and software solutions. We also supply and maintain ICT hardware and accessories, ensuring businesses operate with reliable and secure IT infrastructures that drive efficiency, growth, and innovation.",
        body: [
            {
                title: "Enterprise IT Solutions and System Integration",
                description: "We design and implement custom IT solutions tailored to your business needs, ensuring optimal performance, security, and reliability. Our services include cloud computing, data management, enterprise software solutions, and business automation. We seamlessly integrate hardware, software, and cloud-based systems to create a unified IT ecosystem that enhances efficiency, collaboration, and decision-making."
            },
            {
                title: "Supply and Maintenance of ICT Hardware & Accessories",
                description: "We provide high-quality ICT hardware, accessories, and peripherals, ensuring businesses have the right tools to operate efficiently. Our hardware maintenance services guarantee optimal performance, reducing downtime and improving IT infrastructure longevity."
            },
            {
                title: "Networking, cybersecurity, and software solutions",
                description: "We design, implement, and maintain high-performance network infrastructures, ensuring seamless communication and data flow across your organization. We also protect businesses from cyber threats with advanced security solutions, risk assessments, and compliance frameworks. We develop and integrate customized software solutions that enhance business efficiency and automation."
            }
        ],
    },
    {
        id: 3,
        mainimage: "/images/gensets.jpg",
        image: "/images/SVG/conveyor.svg",
        title: "Supply & Servicing of Engineering and Technical Equipment",
        header: "We are a leading provider of engineering and technical equipment, offering top-quality supply and servicing solutions to various industries. Our commitment to innovation, reliability, and customer satisfaction has positioned us as a trusted partner in the engineering sector.",
        body: [
            {
                title: "Factory Spares & Industrial Components:",
                description: "Supplying essential components such as conveyor belts, bearings, fasteners, bolts, motors, pumps, rollers, castors, and more."
            },
            {
                title: "ICT Hardware & Peripherals:",
                description: "Supplying computers, servers, networking equipment, and other peripherals to support industrial and business operations."
            },
            {
                title: "Supply of Engineering Equipment: ",
                description: "Providing a wide range of high-quality tools, machinery, and technical equipment for various industries."
            },
            {
                title: "Electrical and plumbing supplies for industrial applications",
                description: "Our company provides a comprehensive range of electrical and plumbing supplies designed to meet the needs of various industrial applications. We ensure high-quality and durable components to support efficient operations, minimize downtime, and enhance workplace safety."
            }
        ],
    },
    {
        id: 4,
        mainimage: "/images/construct.jpg",
        image: "/images/SVG/construction.svg",
        title: "Building Construction & Civil Engineering Services",
        header: "We are a leading provider of Building Construction & Civil Engineering Services, delivering high-quality infrastructure solutions tailored to meet modern construction demands. With a team of experienced professionals, we specialize in residential, commercial, and industrial construction, as well as roadworks, bridges, and structural engineering.",
        body: [
            {
                title: "Residential Construction",
                description: "We design and construct high-quality residential buildings, including single-family homes, apartments, and gated communities. Our focus is on modern architecture, sustainable materials, and energy-efficient solutions to create comfortable and long-lasting living spaces."
            },
            {
                title: "Commercial Construction",
                description: "From office buildings to shopping complexes and hotels, we deliver commercial projects that meet business needs while ensuring durability, functionality, and aesthetic appeal. Our expertise covers project planning, structural design, and turnkey construction solutions."
            },
            {
                title: "Industrial Construction",
                description: "We specialize in constructing warehouses, factories, and manufacturing plants. Our team ensures that industrial projects are built with efficiency, safety, and compliance with regulatory standards, optimizing space and workflow for industrial operations."
            }
        ],
    },

]

export default function ServiceDetail() {
    const params = useParams()
    const id = params?.id

    const service = WhyUsList.find((service) => service.id === parseInt(id as string))

    if (!service) {
        return <p>Service not found</p>
    }

    return (
        <div className="container mx-auto py-10">
            <Image src={service.mainimage || '/images/default.jpg'} width={1000} height={100} alt={service.title} className='w-full md:rounded-b-3xl mb-6 border-2 border-primary' />
            <div className='flex justify-center items-center w-full -mt-10'><Link href={'/services'}><Button className='rounded-4xl'><ArrowBigLeft /> Go Back</Button></Link></div>
            <div className="flex flex-col items-start px-6 md:px-0">
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="text-4xl font-bold text-primary mt-6">{service.title}</h1>
                    <Image src={service.image} width={80} height={120} alt={service.title} className='hidden md:block' />
                </div>
                <div className='border-l-4 border-secondary pl-6 mt-6'>
                    <p className='font-thin md:text-3xl text-2xl mt-4 text-black opacity-70'>{service.header}</p>
                </div>
                <div className='mt-6'>
                    {service.body?.map((item, index) => (
                        <div key={index} className="mb-4">
                            <p className='font-black text-primary text-xl'>{item.title}</p>
                            <p className=''>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
