import { useState } from 'react'
import styles, { layout } from "../styles/style";
import { close, logo, menu, discount, robot, arrowUp, apple, bill, google, card, quotes } from '../assets';
import { navLinks, stats, features, feedback, clients, footerLinks, socialMedia } from '../constants';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {
                    navLinks.map((el, index) => {
                        return (
                            <li key={el.id} className={`font-poppins font-normal cursor-pointer ${styles.paragraph} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
                                <a href={`#${el.id}`}>
                                    {el.title}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle((prev) => !prev)} />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-[-20px] right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {
                            navLinks.map((el, index) => {
                                return (
                                    <li key={el.id} className={`font-poppins font-normal cursor-pointer ${styles.paragraph} ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                                        <a href={`#${el.id}`}>
                                            {el.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                    <span className="text-gradient">Get</span>
                </p>
                <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="" />
            </div>
            <p className="font-poppins font-medium text-[18px] leading-[23px]">
                <span className="text-gradient">Started</span>
            </p>
        </div>
    </div>
)

const Hero = () => {
    return (
        <section id="home" className={`flex md:flex-row flex-col sm:pb-12 pb-4`}>
            <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mt-5 xs:mt-0'>
                    <img src={discount} alt="discont" className="w-[32px] h-[32px]" />
                    <p className={`${styles.paragraph} ml-2 uppercase`}>
                        <span className="text-white">20%</span> Discount For {" "}
                        <span className="text-white">1 Month</span> Account
                    </p>
                </div>

                <div className="flex flex-row justify-between items-center w-full mt-6">
                    <h1 className="flex-1 font-poppins font-semibold xs:text-6xl text-4xl text-white ss:leading-[1.1] leading-[40px]">
                        The Next  <br className="sm:block hidden" /> {" "}
                        <span className="text-gradient">Generation</span> {" "}
                    </h1>

                    <div className="ss:flex hidden md:mr-4 mr-0">
                        <GetStarted />
                    </div>
                </div>
                <h1 className="font-poppins font-semibold xs:text-6xl text-4xl text-white ss:leading-[1.1] leading-[40px] w-full"> Payment Method.</h1>
                <p className={`${styles.paragraph} max-w-[470px] my-6`}>
                    Our team of experts uses a methodology
                    to identify the credity cards most likely
                    to fit your needs.
                    We examine annual percentage rates, annual fees.
                </p>
            </div>


            <div className={`flex-1 flex ${styles.flexCenter} md:mr-0 relative`}>
                <img src={robot} className="w-[100%] h-[100%] relative z-[5]" alt="" srcSet="" />
                <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
                <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
                <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            </div>

            <div className={`ss:hidden ${styles.flexCenter}`}>
                <GetStarted />
            </div>
        </section>
    )
}

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((el) => (
            <div className={`flex-1 flex justify-center items-center flex-row m-3`} key={el.id}>
                <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">{el.value}</h4>
                <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">{el.title}</p>
            </div>
        ))}
    </section>
)

const Button = ({ styles }) => (
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        Get Started
    </button>
);

Button.propTypes = {
    styles: PropTypes.string,
}

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className={`flex-1 flex flex-col ml-3`}>
            <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ${styles.paragraph}`}>
                {title}
            </h4>
            <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] ${styles.paragraph}`}>
                {content}
            </p>
        </div>
    </div>
);

FeatureCard.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
}

const Business = () => (
    <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                You do the business, <br className="sm:block hidden" /> we’ll handle
                the money.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                With the right credit card, you can improve your financial life by
                building credit, earning rewards and saving money. But with hundreds
                of credit cards on the market.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

const Billing = () => (
    <section id="product" className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Easily control your <br className="sm:block hidden" /> billing &
                invoicing
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
                aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
                placerat.
            </p>

            <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
                <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
                <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
            </div>
        </div>
    </section>
);

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Find a better card deal <br className="sm:block hidden" /> in few easy
                steps.
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
                aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={layout.sectionImg}>
            <img src={card} alt="billing" className="w-[100%] h-[100%]" />
        </div>
    </section>
);

const FeedbackCard = ({ content, name, title, img }) => (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
            {content}
        </p>

        <div className="flex flex-row">
            <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
            <div className="flex flex-col ml-4">
                <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
                    {name}
                </h4>
                <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                    {title}
                </p>
            </div>
        </div>
    </div>
);

FeedbackCard.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h2 className={styles.heading2}>
                What People are <br className="sm:block hidden" /> saying about us
            </h2>
            <div className="w-full md:mt-0 mt-6">
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Everything you need to accept card payments and grow your business
                    anywhere on the planet.
                </p>
            </div>
        </div>

        <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
            {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
        </div>
    </section>
);

const Clients = () => (
    <section className={`${styles.flexCenter} my-4`}>
        <div className={`${styles.flexCenter} flex-wrap w-full`}>
            {clients.map((client) => (
                <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                    <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
                </div>
            ))}
        </div>
    </section>
);

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
            <h2 className={styles.heading2}>Let’s try our service now!</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Everything you need to accept card payments and grow your business
                anywhere on the planet.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
);

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <img
                    src={logo}
                    alt="hoobank"
                    className="w-[266px] h-[72.14px] object-contain"
                />
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white ${styles.paragraph}`}>
                            {footerlink.title}
                        </h4>
                        <ul className="list-none mt-4">
                            {footerlink.links.map((link, index) => (
                              
                                    <li
                                        key={link.name}
                                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${styles.paragraph} ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                            }`}
                                    >
                                        {
                                        link.name === "Privacy Policy" ? <Link to={link.link} className='cursor-pointer hover:text-secondary'>{link.name}</Link> : link.name
                                        }
                                    </li>
                               
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
            <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
                Copyright Ⓒ 2022 HooBank. All Rights Reserved.
            </p>

            <div className="flex flex-row md:mt-0 mt-6">
                {socialMedia.map((social, index) => (
                    <img
                        key={social.id}
                        src={social.icon}
                        alt={social.id}
                        className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                            }`}
                        onClick={() => window.open(social.link)}
                    />
                ))}
            </div>
        </div>
    </section>
);

export default function HooBank() {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );

}
