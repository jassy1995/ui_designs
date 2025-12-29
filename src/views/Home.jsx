import { useState } from 'react';
import { routes } from "../helpers/routes";
import { LuSunMoon } from "react-icons/lu";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 dark:text-gray-200">
        <div>
          <h3 className="text-xl font-bold">J-Tech Innovations</h3>
          <p className="mt-4 text-gray-600 leading-relaxed dark:text-gray-400">
            We build reliable software and AI solutions that help businesses operate efficiently and grow.
          </p>

          <p className="mt-4 text-gray-700 text-sm dark:text-gray-400">
            <strong>Business Hours</strong><br />
            Mon – Fri: 9:00 AM – 18:00 PM WAT<br />
            Closed on Weekends
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Custom Software Development</li>
            <li>Web Application Development</li>
            <li>API & System Integration</li>
            <li>Business Automation</li>
            <li>AI Automation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li><Link to="/about-us" className="hover:text-black dark:hover:text-gray-200">About Us</Link></li>
            <li><Link to="/how-we-work" className="hover:text-black dark:hover:text-gray-200">How We Work</Link></li>
            <li><Link to="/contact-us" className="hover:text-black dark:hover:text-gray-200">Contact Us</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-black dark:hover:text-gray-200">Terms & Conditions</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-black dark:hover:text-gray-200">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-600 leading-7 dark:text-gray-400">
            📞 +234 814 327 4300 <br />
            {/* ✉️ hello@jotechinnovations.com <br /> */}
            📍 No.4 Kate Gada Street Off Ekoro Road Abule-egba Lagos, Nigeria.
          </p>
        </div>

      </div>

      <div className="mt-16 text-gray-500 text-sm">
        © 2025 J-Tech Innovations. All rights reserved.
      </div>
    </footer>
  );
}


export default function Home() {

    const [designs] = useState(() => {
        return routes.filter(route => route.category === 'ui-design');
    })

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className='flex flex-col space-y-16 px-10 md:px-32 py-12 bg-white dark:bg-black xs:min-h-screen'>
            <div className='flex justify-between items-center space-x-3'>
                <h1 className='text-xl xs:text-2xl font-semibold text-black dark:text-white'>J-Tech Innovations</h1>
                <button onClick={toggleDarkMode} style={{ position: 'relative', zIndex: 9999 }} className='text-black dark:text-white cursor-pointer'>
                    <LuSunMoon className='text-2xl xs:text-3xl' aria-label="Toggle dark mode" />
                </button>
            </div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12'>
                {
                    designs?.map((route, i) => (
                        <Link key={i} to={route.path} target="_blank" rel="noopener noreferrer">
                            <div className=' bg-white dark:bg-slate-900 shadow-1 p-4 rounded-lg sm:rounded-tl-[70px] w-full sm:max-w-[352px] mx-auto cursor-pointer shadow hover:shadow-xl transition h-full'>
                                <img src={route.src} alt="not exist" className='object-cover h-64 w-full sm:w-80 rounded-lg sm:rounded-tl-[70px] sm:rounded-br-[70px]' />
                                <div className='mt-4'>
                                    <div className='text-[16px] font-bold uppercase text-black dark:text-white'>{route?.name}</div>
                                    <div className='text-slate-500 mt- text-[15px]'>{route?.desc}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <hr className='border-gray-200 dark:border-gray-700 '/>
            <Footer/>
        </div>
    )
}
