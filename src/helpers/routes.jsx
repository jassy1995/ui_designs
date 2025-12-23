import { nigeriaFlag, ghanaFlag, coteDivoireFlag, liberiaFlag, smartHomeBanner, enverBanner, hooBankBanner, buyhubBanner, product1, product2, product3, product4 } from "../assets";

export const routes = [
    {
        path: "smart-home",
        name: "smart home",
        category: "ui-design",
        desc: "This is just a simple ui design template for developers",
        src: smartHomeBanner,
        quantity: 0,
    },
    {
        path: "hero-section",
        name: "hero section",
        category: "ui-design",
        desc: "This is just a simple ui design template for developers",
        src: enverBanner,
        quantity: 0,
    },
    {
        path: "hoo-bank",
        name: "hoo bank",
        category: "ui-design",
        desc: "This is just a simple ui design template for developers",
        src: hooBankBanner,
        quantity: 0,
    },
    {
        path: "buyhub",
        name: "buyhub",
        category: "ui-design",
        desc: "This is just a simple ui design template for developers",
        src: buyhubBanner,
        quantity: 0,
    },
];

export const slider_items = [
    product1,
    product2,
    product3,
    product4,
]

export const stats = [
    { title: 'Merchants', data: '50,000+' },
    { title: 'Schools', data: '5,000+' },
    { title: 'Houses', data: '3,000+' },
    { title: 'Restuarants', data: '700+' },
    { title: 'Medical centers', data: '500+' },
    { title: 'Eco systems', data: '6' },
]

export const services = [
    { title: 'HMOs', data: 2 },
    { title: 'Hospitals', data: 300 },
    { title: 'Pharmacies', data: 500 },
]

export const countries = [
    { title: 'for nigerians', desc: 'simplified pay-later service now available in Nigeria', flag: nigeriaFlag, bg: '#FFEEE0' },
    { title: 'for ghanians', desc: 'Coming soon in Ghana', flag: ghanaFlag, bg: '#E0FFE9' },
    { title: 'for ivorians', desc: "Coming soon in Cote d'Ivoire", flag: coteDivoireFlag, bg: '#E0EFFE' },
    { title: 'for liberians', desc: "Coming soon in Liberia", flag: liberiaFlag, bg: '#FFE0F0' },
]