import { useState } from 'react';
import { routes } from "../helpers/routes";
import { LuSunMoon } from "react-icons/lu";
import { Link } from 'react-router-dom';

export default function Home() {

    const [designs] = useState(() => {
        return routes.filter(route => route.category === 'ui-design');
    })

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className='flex flex-col space-y-10 px-10 md:px-32 py-12 bg-white dark:bg-black xs:min-h-screen'>
            <div className='flex justify-between items-center space-x-3'>
                <h1 className='text-xl xs:text-2xl font-semibold text-black dark:text-white'>UI designs</h1>
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
        </div>
    )
}
