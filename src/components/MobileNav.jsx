import { useState } from 'react';
import { GrClose } from 'react-icons/gr'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiSearch } from "react-icons/fi";



export default function HeaderNav() {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='flex justify-between items-center w-full py-6 bg-white px-3 sm:px-16'>
            <h1 className='font-semibold capitalize'>
                <span className='capitalize text-black'>Smart</span>
                <span className='text-[rgb(124,57,254)] capitalize'>Control</span>
            </h1>
            <div className='list-none md:flex hidden justify-end items-center flex-1'>
                <ul className='flex items-center space-x-2 xs:space-x-6 capitalize'>
                    <li>home</li>
                    <li>feature</li>
                    <li>blog</li>
                    <li><FiSearch className='text-[rgb(188,167,221)] font-semibold' /></li>
                </ul>
            </div>
            <div className='md:hidden flex justify-end items-center flex-1'>
                {!isOpen && <AiOutlineMenu className='w-8 h-8 font-semibold block md:hidden cursor-pointer' onClick={handleToggle} />}
                {isOpen && <GrClose className='w-8 h-8  font-semibold block md:hidden cursor-pointer' onClick={handleToggle} />}
                <div className={`${isOpen ? 'flex' : 'hidden'} bg-[rgb(25,17,85)] p-5 absolute top-[0px] right-2 left-2  mx-1 sm:mx-10 rounded-lg sidebar`}>
                    <ul className='list-none flex flex-col  space-y-3 justify-start flex-1 capitalize text-white'>
                        <li>home</li>
                        <li>feature</li>
                        <li>blog</li>
                        <li>login</li>
                        <li>sign up</li>
                        <li className='flex items-center space-x-6'>
                            <input type="text" className='px-3 py-2 outline-none rounded-lg w-2xl w-full' />
                            <FiSearch className='text-[rgb(188,167,221)] text-2xl font-semibold' />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


