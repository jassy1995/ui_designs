import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import PropTypes from 'prop-types';
import { admin_routes } from "../../helpers/routes"
import SideNavMenu from '../navs/SideNavMenu';
import { AiOutlineMenu } from 'react-icons/ai'


export default function AdminLayout({ children }) {
    const { width } = useWindowSize()
    const [isSidenavOpen, setIsSidenavOpen] = useState(width > 620 ? true : false);

    const toggleMobileMenu = () => {
        setIsSidenavOpen(!isSidenavOpen);

    }

    return (
        <div className="border-1 border-blue-600 w-full h-screen overflow-hidden md:grid grid-cols-12 pb-24">
            <div className={`md:col-span-2 fixed md:relative inset-y-0 left-0 w-[300px] md:w-auto z-10 -translate-x-full md:-translate-x-0 transition-transform duration-700 ease-in-out ${isSidenavOpen ? '!-translate-x-0' : ''}`}>
                <SideNavMenu toggle={toggleMobileMenu} routes={admin_routes} isAdmin={true} />
            </div>
            <div className="col-span-10 h-screen overflow-y-auto" id="scrollArea">
                <div className="flex justify-between px-4 border-b py-6 border-slate-200 shadow-sm md:hidden">
                    <AiOutlineMenu className='w-12 h-12 font-semibold block md:hidden cursor-pointer' onClick={toggleMobileMenu} />
                    <img src="/logo.jpg" className="w-12 h-12 rounded-full object-cover" alt="" />
                </div>
                <div className="max-w-7xl mx-auto py-3 pb-6 sm:py-6 px-4 md:pl-[80px]">
                    {children}
                </div >
            </div >
        </div >
    )
}

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
