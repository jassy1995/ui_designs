import { useState } from 'react';
import { routes } from "../helpers/routes";
import { LuSunMoon } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel } from 'swiper/modules';
import { groupProject } from "../lib/util";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
// import '../styles/home.css';

export default function Home() {

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    };

    const [projects, setProject] = useState(() => {
        return routes.filter(route => route.category === 'landing-page');
    })
    const [categories] = useState(() => {
        console.log(groupProject(routes));
        return groupProject(routes);
    })

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };

    const changeItem = (category) => {
        const matcheItems = routes.filter(route => route.category === category);
        setProject(matcheItems)
    }



    return (
        <div className='flex flex-col space-y-10 px-10 md:px-32 py-12 bg-white dark:bg-black xs:min-h-screen'>
            <div className='flex justify-between items-center space-x-3'>
                <h1 className='text-2xl xs:text-4xl font-semibold text-black dark:text-white'>Explore my designs</h1>
                <button onClick={toggleDarkMode} className='text-black dark:text-white'>
                    <LuSunMoon className='text-2xl xs:text-3xl' />
                </button>
            </div>
            <Swiper className='w-[100%]'
                modules={[Navigation, A11y, Mousewheel]}
                slidesPerView={4}
                navigation={true}
                spaceBetween={10}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                breakpoints={breakpoints}
            >
                {
                    categories?.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div onClick={() => changeItem(item.category)} className='cursor-pointer border dark:border-0 border-slate-100 bg-white dark:bg-slate-900 text-black dark:text-white shadow-md flex justify-center items-center rounded-md py-2 font-semibold uppercase'>
                                {item.category?.replace('-', ' ')} ({item.quantity})
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10'>
                {
                    projects?.map((route, i) => (
                        <Link key={i} to={route.path}>
                            <div className='flex flex-col justify-cente items-cente shadow-md border-t dark:border-t-0 border-slate-100 rounded-md grow bg-white dark:bg-slate-900'>
                                <img src={route.src} alt="not exist" className='object-cover w-full h-[250px]' />
                                <div className='p-4'>
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
