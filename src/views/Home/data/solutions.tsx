import {
    BiCreditCard,
    BiGlobeAlt,
    BiMessageSquare,
    BiSearch,
    BiTrendingUp,
} from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { FaUserSecret } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'
import { LuLanguages } from 'react-icons/lu'

export const solutions = [
    {
        icon: <BiGlobeAlt />,
        title: 'Custom AI-Powered Website',
        description:
            'Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.',
        color: 'bg-blue-500',
    },
    {
        icon: <FaUserSecret />,
        title: 'Enhanced Patient Conversion',
        description:
            'Smart conversion optimization tools to turn visitors into patients with personalized experiences.',
        color: 'bg-purple-500',
    },
    {
        icon: <BiMessageSquare />,
        title: 'Real-Time Query Handling',
        description:
            'Instant response system for patient inquiries with AI-powered chat support.',
        color: 'bg-green-500',
    },
    {
        icon: <FiFileText />,
        title: 'Medical Report Analysis',
        description:
            'Advanced AI analysis of medical reports for quick and accurate patient assessments.',
        color: 'bg-orange-500',
    },
    {
        icon: <BiTrendingUp />,
        title: 'Improved Lead Generation',
        description:
            'Data-driven lead generation strategies to attract and engage potential patients.',
        color: 'bg-pink-500',
    },
    {
        icon: <BsDatabase />,
        title: 'Comprehensive Healthcare Database',
        description:
            'Extensive medical information database for accurate patient guidance and support.',
        color: 'bg-indigo-500',
    },
    {
        icon: <LuLanguages />,
        title: 'Multilingual Support',
        description:
            'Breaking language barriers with comprehensive multilingual communication tools.',
        color: 'bg-red-500',
    },
    {
        icon: <BiCreditCard />,
        title: 'Seamless Payment Handling',
        description:
            'Secure and efficient payment processing for medical services globally.',
        color: 'bg-teal-500',
    },
    {
        icon: <BiSearch />,
        title: 'Marketing And SEO Support',
        description:
            'Optimized digital presence with advanced SEO and marketing strategies.',
        color: 'bg-cyan-500',
    },
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe: true,
    draggable: true,
    touchMove: true,
    swipeToSlide: true,
    focusOnSelect: true,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                draggable: true,
                swipe: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                swipe: true,
            },
        },
    ],
}
