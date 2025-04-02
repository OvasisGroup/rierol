'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);

useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Change background when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full px-4 z-10 transition-all duration-300 ${
        scrolling ? "bg-primary" : "bg-primary"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          <Image src='/images/rierol-logo.png' alt='logo' width={120} height={100} className='width={100} py-4' />
        </Link>
        <div className="hidden md:flex space-x-6 justify-between items-center">
          <Link href="/" className="text-secondary">
            Home
          </Link>
          <Link href="/about" className="text-secondary">
            About
          </Link>
          <Link href="/services" className="text-secondary">
            Services
          </Link>
          <Link href="/partners" className="text-secondary">
            Partners
          </Link>
          <Link href="/contacts" className="text-secondary">
            Contacts
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <AlignJustify className='text-white'/>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 border-b-4 border-secondary text-white">
           <Link href="/" className="text-white border-b-1 pb-2">
            Home
          </Link>
          <Link href="/about" className="text-white border-b-1 pb-2">
            About
          </Link>
          <Link href="/services" className="text-white border-b-1 pb-2">
            Services
          </Link>
          <Link href="/partners" className="text-white border-b-1 pb-2">
            Partners
          </Link>
          <Link href="/contacts" className="text-white border-b-1 pb-2">
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;