import { useState } from 'react'
import { BiChevronDown } from "react-icons/bi";
import { BsCircle } from "react-icons/bs";
import { MdArrowForward, MdDeveloperMode } from "react-icons/md";
import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import { AiOutlineAntDesign } from "react-icons/ai";
import { GoStack } from "react-icons/go";
import { RiCloseFill } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai'
import { designShape1, designShape2, enverHeroBanner, enverLogo, unitedStatesFlag } from '../assets';

function HeaderNavigation() {
    const [active, setActive] = useState('home');
    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-20">
                <div className="flex items-center space-x-2">
                    <img src={enverLogo} className="object-cover w-8" alt="" />
                    <span className='font-bold text-2xl'>Enver</span>
                </div>
                <ul className="hidden md:flex justify-between items-center space-x-6 lg:space-x-10 text-[rgb(158,158,167)] capitalize">
                    <li onClick={() => setActive('home')}
                        className={`hover:underline decoration-2  underline-offset-[10px] cursor-pointer hover:text-white
                            ${active === 'home' ? 'underline decoration-2 text-white underline-offset-[10px]' : ''}`}>
                        home
                    </li>
                    <li onClick={() => setActive('services')}
                        className={`hover:underline decoration-2 underline-offset-[10px] cursor-pointer hover:text-white
                        ${active === 'services' ? 'underline decoration-2 text-white underline-offset-[10px]' : ''}`}>
                        services
                    </li>
                    <li onClick={() => setActive('project')}
                        className={`hover:underline decoration-2 underline-offset-[10px] cursor-pointer hover:text-white
                        ${active === 'project' ? 'underline decoration-2 text-white underline-offset-[10px]' : ''}`}>
                        our project
                    </li>
                    <li onClick={() => setActive('about')}
                        className={`hover:underline decoration-2 underline-offset-[10px] cursor-pointer hover:text-white
                        ${active === 'about' ? 'underline decoration-2 text-white underline-offset-[10px]' : ''}`}>
                        about us
                    </li>
                </ul>
            </div>
            <div className="hidden md:flex justify-between items-center space-x-10">
                <div className="flex items-center space-x-2">
                    <img src={unitedStatesFlag} className="object-cover w-5 h-5 rounded-full" alt="" />
                    <div className="flex items-center">
                        <span>ENG</span>
                        <BiChevronDown />
                    </div>
                </div>
                <button className="py-3 px-3 xs:px-8 capitalize font-medium  text-white border border-slate-400 hover:border-[rgb(25,27,32)] hover:bg-[rgb(82,201,231)] rounded-xl outline-none">Contact us</button>
            </div>

            <div className='md:hidden flex justify-end items-center flex-1'>
                {!isOpen && <AiOutlineMenu className='w-8 h-8 font-semibold block md:hidden cursor-pointer' onClick={handleToggle} />}
                {isOpen && <RiCloseFill className='w-8 h-8  font-semibold block md:hidden cursor-pointer !text-white' onClick={handleToggle} />}
                <div className={`${isOpen ? 'flex' : 'hidden'} bg-[rgb(20,22,28)] z-20 p-5 absolute top-[0px] right-2 left-2  mx-1 sm:mx-[50px] md:mx-28 h-[370px] rounded-lg sidebar`}>
                    <ul className='list-none flex flex-col  space-y-3 justify-start flex-1 capitalize text-white'>
                        <li>home</li>
                        <li>services</li>
                        <li>our project</li>
                        <li>about us</li>
                        <li>contact us</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function ServiceCard() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            <div className='bg-[rgb(20,22,28)] rounded-md p-12 flex flex-col justify-center items-center'>
                <div className='rounded-full bg-[rgb(28,42,49)] inline-flex items-center justify-center w-16 h-16'>
                    <AiOutlineAntDesign className='text-[rgb(82,201,231)] text-3xl' />
                </div>
                <h1 className='text-2xl text-white uppercase mt-4'>ui/ux design</h1>
                <p className='text-[rgb(171,180,190)] mt-6 font-normal leading-[30.8px]'>Make a good impression when you communicate your identity and the service or products you sell to your audience.</p>
            </div>
            <div className='bg-[rgb(20,22,28)] rounded-md p-12 flex flex-col justify-center items-center'>
                <div className='rounded-full bg-[rgb(41,35,51)] inline-flex items-center justify-center w-16 h-16'>
                    <GoStack className='text-[rgb(169,114,197)] text-3xl' />
                </div>
                <h1 className='text-2xl text-white uppercase mt-4'>graphic design</h1>
                <p className='text-[rgb(171,180,190)]  mt-6 font-normal leading-[30.8px]'>Make a good impression when you communicate your identity and the service or products you sell to your audience.</p>
            </div>
            <div className='bg-[rgb(20,22,28)] rounded-md p-12 flex flex-col justify-center items-center'>
                <div className='rounded-full bg-[rgb(28,42,49)] inline-flex items-center justify-center w-16 h-16'>
                    <MdDeveloperMode className='text-[rgb(82,201,231)] text-3xl' />
                </div>
                <h1 className='text-2xl text-white uppercase mt-4'>development</h1>
                <p className='text-[rgb(171,180,190)] mt-6 font-normal leading-[30.8px]'>Make a good impression when you communicate your identity and the service or products you sell to your audience.</p>
            </div>
        </div>

    )
}

export default function HeroSection() {
    return (
        <div className="bg-[rgb(25,27,32)] px-4 sm:px-20 md:px-32 py-10 text-white relative">
            <HeaderNavigation />
            <div className="hidden sm:block absolute z-0 w-[10%] h-[20%] left-[200px] top-[70px] blue__gradient_1" />
            <div className="hidden md:block absolute z-0 w-[6%] h-[20%] right-[200px] top-[200px] blue__gradient_2" />
            <div className="hidden sm:block absolute z-0 w-[6%] h-[20%] left-[450px] top-[700px] blue__gradient_3" />
            <div className='hidden md:block absolute top-[180px] right-[550px]'>
                <img src={designShape1} className='object-cover w-4 h-4' />
            </div>
            <div className='hidden md:block absolute top-[220px] right-[650px]'>
                <img src={designShape1} className='object-cover w-7 h-7' />
            </div>
            <div className='hidden md:block absolute top-[600px] right-[650px]'>
                <img src={designShape2} className='object-cover w-20' />
            </div>
            <div className='hidden md:block absolute top-[220px] right-[210px]'>
                <BsCircle className='text-slate-400 w-7 h-7' />
            </div>
            <div className='hidden md:block absolute top-[700px] right-[200px]'>
                <HiOutlineArrowDownCircle className='text-slate-400 w-8 h-8' />
            </div>
            <div className='flex space-x-3 mt-20 md:mt-32'>
                <div className='flex flex-col  md:w-1/2'>
                    <div className='flex flex-col'>
                        <h4 className='uppercase z-10 text-slate-300 font-normal' style={{ letterSpacing: "3px" }}>a trusted digital agency 😍</h4>
                        <h1 className='text-4xl xs:text-6xl font-bold z-10'>we make your business look amazing</h1>
                    </div>
                    <p className='max-w-[500px] mt-6 z-10 text-slate-300 font-normal  leading-[30.8px]'>Enver studio is a didgital studio that offers several services such as UI/UX Design to developers, we will provide the best services for those of you who use our service</p>
                    <div className='flex items-center space-x-5 mt-9 z-10'>
                        <button className='py-3 px-3 xs:px-8 capitalize font-medium text-white bg-[rgb(82,201,231)] rounded-xl outline-none hover:bg-[rgb(83,172,194)]'>get started</button>
                        <div className='flex items-center space-x-2'>
                            <span className='bg-[rgb(22,68,85)]'></span>
                            <span className='text-slate-300 font-normal'>See our project</span>
                            <MdArrowForward />
                        </div>
                    </div>
                    <div className='flex items-center space-x-10 mt-9'>
                        <div className='flex flex-col items-center space-y-3'>
                            <span className='text-white font-bold'>100+</span>
                            <span className='text-slate-300 uppercase'>client</span>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <span className='text-white font-bold'>30</span>
                            <span className='text-slate-300 uppercase'>startup</span>
                        </div>
                        <div className='flex flex-col items-center space-y-3'>
                            <span className='text-white font-bold'>40</span>
                            <span className='text-slate-300 uppercase'>product</span>
                        </div>

                    </div>
                </div>
                <div className='hidden md:flex items-center justify-center w-1/2'>
                    <img src={enverHeroBanner} className='object-cover w-[440px] z-10' alt="" />
                </div>
            </div>
            <div className='mt-20 md:mt-32'>
                <h1 className='text-4xl xs:text-6xl font-bold z-10 mb-12 text-center xs:text-start'>Our services</h1>
                <ServiceCard />
            </div>

        </div>
    )
}
