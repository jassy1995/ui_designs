import { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import useScroll from '../hooks/useScroll';
import { AiOutlineMenu, AiFillLinkedin } from 'react-icons/ai';
import { RiCloseFill } from 'react-icons/ri';
import { stats } from "../helpers/routes";
import { slider_items, services, countries } from "../helpers/routes";
import { Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import { MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoFacebook } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import Typed from 'typed.js';
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { buyhubDark,buyhubLight, chatbot, shoppingCard, ladyEating, flyingCars, globe, whatsappBuy } from '../assets';
import { Link } from 'react-router-dom';
// import useWindowSize from '../hooks/useWindowSize';




register();

const AdvertisementCard = () => {
    return (
        <div className={`flex justify-start items-center px-5 xs:px-16 md:px-32 py-2 sm:py-4 bg-[rgb(228,252,254)] transition duration-700`}>
            <p>See our emergency ride support initiative here <span className="text-[rgb(20,111,253)]">Click here to learn more</span></p>
        </div>
    )
}

export const Button = ({ children, size, color }) => {
    const bg = color === 'green' ? 'bg-[rgb(62,141,57)] hover:bg-[rgba(38,99,34,0.84)]' : color === 'blue' ? 'bg-[rgb(12,35,84)] hover:bg-[rgb(32,51,91)]' : 'bg-[rgb(251,134,39)] hover:bg-[rgba(251,134,39,0.87)]';
    return <button className={`py-2 border-0 text-white outline-none rounded-md ${bg} ${size === 'md' ? 'px-9' : 'px-7'
        }`}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node,
    size: PropTypes.string,
    color: PropTypes.string,
}

const Header = ({ point, direction }) => {
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className={`flex justify-between items-center px-5 xs:px-16 md:px-32 py-7 transition duration-700 ${point > 64 && direction === 'up' ? 'bg-white sticky top-0 left-0 right-0 z-20 shadow-md' : 'bg-[rgb(9,18,41)] text-slate-200'}`}>
            <img src={point > 64 ? buyhubDark : buyhubLight} className='w-[100px]' alt="" />
            <ul className='hidden md:flex items-center space-x-10'>
                <li className='capitalize'>shop</li>
                <li className='capitalize'>rent</li>
                <li className='capitalize'>power</li>
                <li className='capitalize'>products</li>
                <li className='capitalize'>partners</li>
                <li>
                    <Button size='md' color='yellow'>Get started</Button>
                </li>
            </ul>

            <div className='md:hidden flex justify-end items-center flex-1'>
                {!isOpen && <span className='ring-1 p-1 ring-slate-400 rounded-md'><AiOutlineMenu className='w-6 h-6 font-semibold block md:hidden cursor-pointer' onClick={handleToggle} /></span>}
                {isOpen && <span className='ring-1 p-1 ring-slate-400 rounded-md'><RiCloseFill className='w-6 h-6  font-semibold block md:hidden cursor-pointer' onClick={handleToggle} /></span>}
                <div className={`${isOpen ? 'flex' : 'hidden'} bg-white z-20 p-5 absolute top-[40px] right-2 left-2  mx-1 sm:mx-[50px] md:mx-28 h-[370px] rounded-lg sidebar`}>
                    <ul className='list-none flex flex-col  space-y-6 p-10 justify-start flex-1 capitalize text-stone-700'>
                        <li className='capitalize hover:text-[rgb(251,134,39)] cursor-pointer'>shop</li>
                        <li className='capitalize hover:text-[rgb(251,134,39)] cursor-pointer'>rent</li>
                        <li className='capitalize hover:text-[rgb(251,134,39)] cursor-pointer'>power</li>
                        <li className='capitalize hover:text-[rgb(251,134,39)] cursor-pointer'>products</li>
                        <li className='capitalize hover:text-[rgb(251,134,39)] cursor-pointer'>partners</li>
                        <li>
                            <Button size='md' color='yellow'>Get started</Button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    direction: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
}

const AdversimentSection = () => {
    useEffect(() => {
        const options = {
            strings: ["Split payment,", "Montly rent,", "Weekly tuition,", "Monthly HMO,"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 3000, // Delay before starting to type again
            startDelay: 100, // Delay before starting to type
            loop: true, // Loop the animation
        };

        const typed = new Typed('.typed', options);

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <div className='flex text-white pt-5'>
            <div className='flex flex-col w-full md:w-1/2 pt-10'>
                <h1 className='text-[49.5px] md:text-[70.4px] leading-[60px] md:leading-[76.8px] font-bold text-[rgb(251,134,39)]'>
                    <span className='typed'></span>
                </h1>
                <div className='text-[49.5px] md:text-[70.4px] md:leading-[76.8px] font-bold'>simplified</div>
                <div className='text-[49.5px] md:text-[70.4px] md:leading-[76.8px] font-bold'>for Africa</div>
                <p className='text-[18px] my-8 w-full ss:max-w-xs md:max-w-[480px]'>Buyhub helps businesses & individuals offer split payment to consumers across Africa.</p>
                <span className='w-auto'>
                    <Button size='sm' color='yellow'>Get started</Button>
                </span>
            </div>
            <div className='w-full md:w-1/2 bg-red-00  hidden sm:flex justify-end'>
                <img src={globe} className='bounce-animation mt-20 md:mt-8 w-auto md:w-[530px] z-0' alt="not exist" />
            </div>
        </div>
    )
}

const ProductSwiper = () => {
    const swiperElRef = useRef(null);
    useEffect(() => {
        const swiperParams = {
            modules: [Autoplay],
            autoplay: {
                delay: 0,
            },
            loop: true,
            speed: 5000,
            breakpoints: {
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                620: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1060: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                }
            }
        };
        Object.assign(swiperElRef.current, swiperParams);
        swiperElRef.current.initialize();
    }, []);
    return (
        <div className='flex flex-col space-y-10 overflow-hidden'>
            <div className='w-full'>
                <swiper-container ref={swiperElRef} init={false}>
                    {
                        [...slider_items, ...slider_items]?.map((item, i) => (
                            <swiper-slide key={i}>
                                <img src={item} className='h-[400px] w-full object-cover rounded-lg' />
                            </swiper-slide>
                        ))
                    }
                </swiper-container>
            </div>
        </div>
    )
}

const RideSection = () => {
    return (
        <div className='mt-10 ss:mt-0 p-5 xs:p-16 md:p-32 flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-10 bg-white !z-20'>
            <div className='flex flex-col space-y-6 w-full sm:w-1/2'>
                <h3 className='uppercase text-[20.8px] text-[rgb(23,35,54)] leading-[33.28px]'>ride now</h3>
                <h1 className='text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] text-[rgb(23,35,54)] font-bold'>Making mobility as easy as <span className='text-[rgb(234,139,72)]'>ABC</span></h1>
                <p className='text-[17.6px] leading-[26.4px]'>You get the convenience of all the best ride hailing platforms at your finger tips: Bolt, Uber, Indrive, Shuttlers, LAGride, etc. All you need to do is choose a plan and get started for pay now or later</p>
                <span>
                    <Button color='blue' size='sm'>Ride now</Button>
                </span>
            </div>
            <div className='w-full sm:w-1/2'>
                <img src={flyingCars} className='w-auto md:w-[700px] mt-20 sm:mt-0 mb-16 sm:mb-0' alt="" />
            </div>
        </div>
    )
}

const EatSection = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row justify-center px-5 xs:px-10 sm:px-20 lg:px-0 space-x-0 sm:space-x-20 items-center pb-32 md:pb-0'>
                <div className='flex justify-center items-center'>
                    <div className='bg-white md:bg-[rgb(251,244,248)] md:w-[650px] md:h-[650px] rounded-full p-8 flex justify-center items-center'>
                        <img src={ladyEating} className='w-[420px]' alt="" />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] text-[rgb(23,35,54)]'>You can now</h1>
                    <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] text-[rgb(251,134,39)]'>Eat and Pay later</h1>
                    <p className='text-[17.6px] mt-6 mb-9 max-w-md'>A new way to pay for meals with ease. Find restaurants, cafes and bars near you. Eat what you want and let us worry about bills.</p>
                    <span>
                        <Button size='sm' color='blue'>Get started</Button>
                    </span>
                </div>
            </div>

        </>
    )
}

const CombineSection = () => {
    return (
        <>
            <div className='flex justify-between items-center px-2 combine-section'>
                <div className='flex flex-col sm:flex-row justify-between w-full space-x-0 sm:space-x-24 px-5'>
                    <div className='flex flex-col space-y-4 w-full sm:w-2/3'>
                        <div className='flex justify-end items-end space-x-4'>
                            <img src={shoppingCard} className='w-[100px] h-[200px] md:w-[250px] md:h-[350px]' alt="" />
                            <img src={chatbot} className='w-[100px] h-[250px] md:w-[300px] md:h-[450px]' alt="" />
                        </div>
                    </div>
                    <div className='w-full sm:w-1/2'>
                        <h3 className='uppercase text-[20.8px] text-[rgb(23,35,54)] leading-[33.28px] mb-5 mt-12'>A FOR APPLE, B FOR BALL</h3>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px]'>Simplified<span className='text-[rgb(251,134,39)]'> pay later </span> </h1>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] text-[rgb(23,35,54)]'>channels for</h1>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] text-[rgb(23,35,54)]'>schools and parents</h1>
                        <p className='text-[17.6px] mt-6 mb-9 max-w-md'>School signs up, invites parents.</p>
                        <p className='text-[17.6px] mt-6 mb-9 max-w-md'>Parents receive bank offer, school happy</p>
                        <p className='text-[17.6px] mt-6 mb-9 max-w-md'>Buyhub analyzes & recollects, banks happy</p>
                        <span className=''>
                            <Button size='sm' color='blue'>Get started</Button>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

const CareerSection = () => {
    const originalValues = useMemo(() => ({
        HMOs: services[0].data,
        Hospital: services[1].data,
        Pharmacy: services[2].data,
    }), []);

    const [stat_counts, setCounts] = useState({
        HMOs: originalValues.HMOs,
        Hospital: 0,
        Pharmacy: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prevCounts) => ({
                ...prevCounts,
                Hospital: prevCounts.Hospital < originalValues.Hospital ? prevCounts.Hospital + 1 : originalValues.Hospital,
                Pharmacy: prevCounts.Pharmacy < originalValues.Pharmacy ? prevCounts.Pharmacy + 1 : originalValues.Pharmacy,
            }));
        }, 50);

        return () => clearInterval(interval);
    }, [originalValues]);
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-[rgb(9,18,41)] text-center py-20 sm:pt-48 md:pb-[400px] sm:px-20 lg:px-48  w-full'>
                <h1 className='text-white text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px] font-bold'>Simplifying Care delivery in partnership with HMOs and pharmacies across Africa.</h1>
                <div className='w-full flex justify-between items-center mt-20'>
                    {Object.keys(stat_counts).map((key, i) => (
                        <div key={i} className='flex flex-col space-y-2 text-white w-full'>
                            <h1 className='text-[40px] ss:text-[44.8px] leading-[44.8px] font-bold text-[rgb(226,101,65)]'>
                                {stat_counts[key]}{key !== 'HMOs' && <span>+</span>}
                            </h1>
                            <h4 className='text-[rgb(204,202,202)]'>{key}</h4>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

const CountrySection = () => {
    return (
        <div className='items-center country-section'>
            <div className='flex flex-col md:flex-row justify-between space-x-0 md:space-x-16 px-5 sm:px-20 space-y-16 md:space-y-0 md:px-32'>
                <div className='flex flex-col w-full md:w-2/3'>
                    <h3 className='uppercase text-[20.8px] text-[rgb(23,35,54)] leading-[33.28px] mb-9'>key focus</h3>
                    <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[48px] sm:leading-[76.8px]'>Growing businesses with<span className='text-[rgb(251,134,39)]'> split payment </span>option across africa </h1>
                    <p className='text-[17.6px] mt-6 mb-9 max-w-md'>We believe BNPL will only work in Africa if the right ecosystems are built. We are that team to do it..</p>
                    <span className=''>
                        <Button size='sm' color='blue'>Get started</Button>
                    </span>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-4  w-full md:w-4/5 text-start'>
                    {countries.map((r, i) => (
                        <div key={i} className={`flex flex-col w-full xmd:w-[320px] lg:w-[295px] h-[280px] space-y-1 px-8 py-10 rounded-xl border border-slate-100`} style={{ backgroundColor: r.bg }}>
                            <img src={r.flag} className='object-cover w-14 h-10 rounded-lg mb-4' alt="not exist" />
                            <h1 className='text-[19.2px] leading-[44.8px] font-bold capitalize'>{r.title}</h1>
                            <p className='text-[rgb(98,106,120)]'>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const InviteBanner = () => {
    return (
        <div className='items-center px-5 sm:px-20 md:px-32'>
            <div className='flex flex-col space-y-6 rounded-md py-[90px] px-14 bg-[rgb(236,242,246)]'>
                <h1 className='text-[36px] leading-[43.2px] font-bold text-[rgb(23,35,54)]'>Join the buyhub today</h1>
                <div className='flex flex-col space-y-16 md:space-y-0 md:flex-row justify-start md:justify-between items-start md:items-center'>
                    <p>We are just good people doing great stuff, and having a lot of fun.</p>
                    <span>
                        <Button size='sm' color='blue'>Join our team</Button>
                    </span>
                </div>
            </div>
        </div>
    )
}

const FloatBtn = ({ handler }) => {
    const { scrollY } = useScroll()
    return (
        <button
            onClick={handler}
            className={`inline-flex justify-center items-center fixed bottom-[120px] right-[50px]  xs:bottom-[90px] z-50 xs:right-[120px] rounded-full h-12 w-12 bg-[rgb(23,35,54)] text-white hover:bg-[rgb(23,35,54)] active:bg-[rgb(23,35,54] focus:outline-none focus:shadow-outline animate-bounce disabled:opacity-75 disabled:cursor-not-allowed ${scrollY < 1000 ? 'hidden' : ''}`}
        >
            <BiSolidUpArrowAlt className="font-bold text-3xl" />
        </button>
    );
};

FloatBtn.propTypes = {
    handler: PropTypes.func.isRequired,
}


const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between px-20 md:px-32 mt-20 mb-10'>
            <div className='flex flex-col space-y-6'>
                <img src={buyhubDark} className='object-cover w-[100px] mb-7' alt="" />
                <p className='max-w-sm'>
                    We help financial Institutions and businesses provide credit to consumers across africa
                </p>
                <p>
                    Mon - Fri: 9:00 - 18:00 <br />
                    Closed on Weekends
                </p>
            </div>
            <div className='flex flex-col mt-10 md:mt-0'>
                <h3 className='font-bold text-[17.6px] leading-[21.12px]'>Products</h3>
                <ul className='flex flex-col space-y-4 mt-7 text-slate-800'>
                    <li>Shop now pay later</li>
                    <li>Eat now pay later</li>
                    <li>Rent now pay later</li>
                    <li>Power now pay later</li>
                    <li>Care now pay later</li>
                </ul>
            </div>
            <div className='flex flex-col mt-10 md:mt-0'>
                <h3 className='font-bold text-[17.6px] leading-[21.12px]'>Quick links</h3>
                <ul className='flex flex-col space-y-4 mt-7 text-slate-800'>
                    <li>Contact Us</li>
                    <li>Terms and Conditions</li>
                    <li><Link to="/privacy-policy" className='cursor-pointer hover:text-blue-500'>Privacy Policy</Link></li>
                </ul>
            </div>
            <div className='flex flex-col mt-10 md:mt-0'>
                <h3 className='font-bold text-[17.6px] leading-[21.12px]'>Contact Us</h3>
                <ul className='flex flex-col space-y-4 mt-7 text-slate-800'>
                    <li className='flex items-center space-x-3'><MdCall /> <span>+234 814 327 4300</span></li>
                    <li className='flex items-center space-x-3'><FaEnvelope /> <span>info@buyhub.com</span></li>
                    <li className='flex items-center space-x-3'><FaLocationDot /> <span>No.4 Kate Gada St Ekoro Abule-egba Lagos.</span></li>
                    <li className='flex items-center space-x-5 text-white'>
                        <span className='w-8 h-8 rounded-full bg-[rgb(112,131,186)]  inline-flex justify-center items-center'><BiLogoFacebook /></span>
                        <span className='w-8 h-8 rounded-full  bg-gradient-to-r from-red-500 to-purple-500 inline-flex justify-center items-center'><IoLogoInstagram /></span>
                        <span className='w-8 h-8 rounded-full bg-[rgb(91,153,199)] inline-flex justify-center items-center'><AiFillLinkedin /></span>
                        <span className='w-8 h-8 rounded-full bg-[rgb(108,187,246)] inline-flex justify-center items-center'><CiTwitter /></span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default function Buyhub() {
    const { scrollY, scrollDirection } = useScroll();
    // const {width} = useWindowSize();
    useEffect(() => {
        const options = {
            strings: ["Buy", "Fees", "Eat", "Rent"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 3000, // Delay before starting to type again
            startDelay: 100, // Delay before starting to type
            loop: true, // Loop the animation
        };

        const typed = new Typed('.channel', options);

        return () => {
            typed.destroy();
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className='relative'>
            <AdvertisementCard />
            <Header point={scrollY} direction={scrollDirection} />
            <div className='bg-[rgb(9,18,41)] px-5 xs:px-16 md:px-32 pb-20 md:pb-64'>
                <AdversimentSection />
                <div className='w-full sm:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-10 sm:gap-y-5 mt-16 sm:mt-10'>
                    {stats.map((r, i) => (
                        <div key={i} className='flex flex-col text-white'>
                            <h1 className='text-[35.2px] leading-[35.2px] font-bold text-[rgb(226,101,65)]'>{r.data}</h1>
                            <h4 className='text-[rgb(204,202,202)]'>{r.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`w-full  mx-auto py-32 whatsapp-buy px-5 xs:px-16 md:px-32 lg:px-64`}>
                <div className='sm:container flex flex-col sm:flex-row sm:items-center sm:space-x-12 space-x-0'>
                    <img src={whatsappBuy} className='w-[300px] pl-3 ss:pl-0' alt="" />
                    <div className='pl-4 ss:pl-0'>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[54px] sm:leading-[76.8px] text-[rgb(251,134,39)]'>Everything splits</h1>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[54px] sm:leading-[76.8px] text-[rgb(23,35,54)]'>
                            Whatsapp &quot;
                            <span className="channel"></span>
                            &quot;
                        </h1>
                        <h1 className='font-bold text-[40px] ss:text-[48px] sm:text-[64px] leading-[54px] sm:leading-[76.8px] text-[rgb(23,35,54)]'>to 090 53 53 5333</h1>
                        <p className='text-[16.5px] sm:text-[17.6px] my-10'>Everything splits payment simplified into whatsapp. Whatever you need is just a chat away. Shop, Rent, Eat, Care, everything.</p>
                        <Button size='md' color='green'>Connect on whatsapp</Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center px-5 ss:px-10 md:px-32 lg:px-64 mt-20 md:mt-48 mb-20'>
                <h1 className='text-[40px] ss:text-[48px] xmd:text-[64px] leading-[54px] sm:leading-[76.8px] font-bold text-[rgb(23,35,54)] inline-flex justify-center items-center sm:text-center'>Split payment from 50,000+ merchants</h1>
                <p className='text-[16.5px] sm:text-[17.6px] text-[rgb(23,35,54)]'>Connect with credit stores from instagram, Jiji, Jumia, Konga, etc</p>
            </div>
            <ProductSwiper />
            <RideSection />
            <EatSection />
            <CombineSection />
            <CareerSection />
            <CountrySection />
            <InviteBanner />
            <Footer />
            <p className='inline-flex mb-16 mt-10 px-20 md:px-32'>Copyright © 2023 All rights reserved | Buyhub</p>
            <FloatBtn handler={scrollToTop} />
        </div>
    )
}
