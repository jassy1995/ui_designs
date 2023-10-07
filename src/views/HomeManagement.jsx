import { useRef, useEffect } from 'react';
import { FaDotCircle } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { BiPlusMedical } from "react-icons/bi";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { slider_items } from "../helpers/routes";
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import HeaderNav from '../components/MobileNav';

register();

export default function HomeManagement() {
    const swiperElRef = useRef(null);
    const swiperNextBtnRef = useRef(null);
    const swiperPrevBtnRef = useRef(null);
    const swiperPaginationRef = useRef(null);
    useEffect(() => {
        const swiperParams = {
            modules: [Navigation, Pagination, Autoplay],
            autoplay: {
                delay: 2000,
            },
            loop: true,
            navigation: {
                prevEl: swiperPrevBtnRef.current,
                nextEl: swiperNextBtnRef.current,
            },
            pagination: {
                el: swiperPaginationRef.current,
                bulletClass: "w-2 h-2 rounded-full bg-white opacity-30",
                bulletActiveClass: "!opacity-100",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                480: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
            }
        };
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
    }, []);

    return (
        <div className='flex sm:space-x-6 space-x-0'>
            <div className='w-full md:w-[60%] bg-[rgba(250,251,253)] rounded-lg pb-[10px] h-screen md:pb-[210px] relative'>
                <span className='absolute top-[120px] right-[90px] md:top-[100px] md:right-[200px]'>
                    <FaDotCircle className='text-[rgb(124,57,254)]' />
                </span>
                <span className='absolute top-[160px] right-[150px] md:top-[210px] md:right-[550px]'>
                    <RxDotFilled className='text-[rgb(124,57,254)]' />
                </span>
                <span className='hidden md:block absolute top-[590px] right-[30px] md:top-[420px] md:right-[100px]'>
                    <BiPlusMedical className='text-[rgb(124,57,254)]' />
                </span>
                <span className='hidden md:block absolute top-[730px] right-[70px] md:top-[600px] md:right-[200px]'>
                    <RxDotFilled className='text-[rgb(124,57,254)]' />
                </span>
                <span className='hidden md:block absolute top-[760px] right-[210px] md:top-[640px] md:right-[610px]'>
                    <FaDotCircle className='text-[rgb(124,57,254)]' />
                </span>
                <HeaderNav />
                <div className='flex flex-col space-y-6 mt-[60px] sm:mt-[120px] px-3 sm:px-16'>
                    <div className='capitalize text-[rgb(243,163,75)] font-semibold'>smart home app</div>
                    <div className='text-7xl text-[rgb(25,17,85)] font-semibold'>Created to make life much Easier</div>
                    <div className='text-slate-500 max-w-sm'>Smart Control is helping the user to achieve the best and comfortable atmosphere for their home</div>
                    <div className='px-6 py-3 shadow-lg rounded-md bg-white w-full md:w-2/3 flex justify-between items-center mt-10'>
                        <input type="text" placeholder='enter your email' className='outline-none text-slate-700' />
                        <button className='capitalize bg-[rgb(124,57,254)] rounded-lg px-2 py-2 text-white'>try now</button>
                    </div>
                </div>
            </div>
            <div className='w-full  md:w-[40%] bg-[rgb(25,17,85)] px-9 py-8 hidden md:flex flex-col space-y-10'>
                <div className='flex justify-end items-center space-x-3'>
                    <button className='capitalize rounded-lg px-3 py-2 text-white font-normal'>login</button>
                    <button className='capitalize bg-[rgb(59,54,107)] rounded-lg px-3 py-2 text-white font-normal'>sign up</button>
                </div>
                <div className='flex flex-col space-y-10 overflow-hidden'>
                    <div>
                        <swiper-container ref={swiperElRef} init={false}>
                            {
                                slider_items?.map((item, i) => (
                                    <swiper-slide key={i}>
                                        <img src={item} className='h-[570px] w-full object-cover' />
                                    </swiper-slide>
                                ))
                            }
                        </swiper-container>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div ref={swiperPaginationRef} className='flex items-center space-x-3'></div>
                        <div className='flex items-center space-x-3'>
                            <button ref={swiperPrevBtnRef} className='disabled:opacity-50 w-8 h-8 rounded-full border border-[rgb(100,60,206)] inline-flex justify-center items-center cursor-pointer'>
                                <HiArrowLongLeft className='text-[rgb(100,60,206)] opacity-80' />
                            </button>
                            <button ref={swiperNextBtnRef} className='disabled:opacity-50 w-8 h-8 rounded-full border border-[rgb(100,60,206)] inline-flex justify-center items-center cursor-pointer'>
                                <HiArrowLongRight className='text-[rgb(100,60,206)] opacity-80' />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
