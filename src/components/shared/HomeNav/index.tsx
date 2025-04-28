import { useAuth } from '@/auth'
import { Button } from '@/components/ui'
import { useEffect, useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { FaBars } from 'react-icons/fa'
import {
    NavigateFunction,
    useLocation,
    useNavigate,
    useSearchParams,
} from 'react-router-dom'
import HcfSignupPopup from '../Popups/HcfSignupPopup'

/**
 * @interface HomeNavbarProps
 * @description Props for the HomeNavbar component
 * @property {(ref: React.RefObject<HTMLElement>) => void} [scrollToSection] - Function to scroll to a specific section
 * @property {React.RefObject<HTMLElement>} [featuresRef] - Reference to the features section
 * @property {React.RefObject<HTMLElement>} [aboutRef] - Reference to the about section
 * @property {React.RefObject<HTMLElement>} [contactRef] - Reference to the contact section
 */
interface HomeNavbarProps {
    scrollToSection?: (ref: React.RefObject<HTMLDivElement>) => void
    featuresRef?: React.RefObject<HTMLDivElement>
    aboutRef?: React.RefObject<HTMLDivElement>
    contactRef?: React.RefObject<HTMLDivElement>
}

/**
 * HomeNavbar Component
 *
 * A responsive navigation bar component that provides navigation controls and authentication options.
 * Features both desktop and mobile layouts with smooth scrolling to different sections.
 *
 * @component
 * @param {HomeNavbarProps} props - Component props
 * @param {Function} props.scrollToSection - Optional function to handle smooth scrolling to sections
 * @param {React.RefObject} props.featuresRef - Reference to features section
 * @param {React.RefObject} props.aboutRef - Reference to about section
 * @param {React.RefObject} props.contactRef - Reference to contact section
 *
 * @returns {JSX.Element} A responsive navigation bar with logo, menu items, and authentication buttons
 *
 *
 * @example
 * return (
 *   <HomeNavbar
 *     scrollToSection={handleScroll}
 *     featuresRef={featuresRef}
 *     aboutRef={aboutRef}
 *     contactRef={contactRef}
 *   />
 * )
 */
const HomeNavbar: React.FC<HomeNavbarProps> = ({
    scrollToSection,
    featuresRef,
    aboutRef,
    contactRef,
}) => {
    const { user } = useAuth()
    const navigate: NavigateFunction = useNavigate()
    const { pathname } = useLocation()
    const [searchParams] = useSearchParams()
    const [menuStatus, setMenuStatus] = useState<boolean>(false)

    const menuItems = [
        { text: 'About Us', to: '/about', ref: aboutRef, icon: '👥' },
        { text: 'F&Q', to: '/features', ref: featuresRef, icon: '🎯' },
        { text: 'Contact Us', to: '/about', ref: contactRef, icon: '📞' },
    ]

    useEffect(() => {
        const scrollTo = searchParams.get('scrollTo')
        if (pathname === '/' && scrollTo) {
            const item = menuItems.find((item) => item.text === scrollTo)
            if (item?.ref && Object.keys(item).length > 0 && scrollToSection) {
                scrollToSection(item.ref)
            }
        }
    }, [pathname])

    return (
        <nav className="w-full bg-gradient-to-r from-[#09122C] to-[#1A2B4C] shadow-lg ">
            <div className="max-w-[1538px] mx-auto px-6 w-full">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/img/logo/logo-dark-full.png"
                            alt="MakeWell_logo"
                            className="w-[150px] md:w-[180px] cursor-pointer"
                            onClick={() => navigate('/')}
                        />
                    </div>

                    {/* Spacer to push menu and buttons to right */}
                    <div className="flex-1" />

                    {/* Menu Items + Buttons */}
                    <div className="hidden lg:flex items-center space-x-10">
                        {/* Menu Items */}
                        <div className="flex space-x-8 text-[17px] font-semibold">
                            {menuItems.map((item) => (
                                <div
                                    key={item.text}
                                    className="relative group text-white cursor-pointer"
                                    onClick={() =>
                                        scrollToSection && item.ref
                                            ? scrollToSection(item.ref)
                                            : navigate(
                                                  '/?scrollTo=' + item.text,
                                              )
                                    }
                                >
                                    <span className="transition-colors duration-300">
                                        {item.text}
                                    </span>
                                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                                </div>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex items-center space-x-4">
                            {user?.role?.[0] === 'admin' ? (
                                <Button
                                    variant="solid"
                                    className="rounded-[6px]"
                                    onClick={() => navigate('/stores')}
                                >
                                    Admin Dashboard
                                </Button>
                            ) : (
                                <>
                                    <Button
                                        onClick={() => navigate('/store')}
                                        className="rounded-[6px] text-lg"
                                    >
                                        Login
                                    </Button>
                                    <HcfSignupPopup
                                        popupButtonStatus
                                        buttonChildren={
                                            <Button
                                                variant="solid"
                                                className="rounded-[6px]"
                                            >
                                                Get Started
                                            </Button>
                                        }
                                        hcfLogin={true}
                                    />
                                </>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex">
                        <FaBars
                            onClick={() => setMenuStatus(true)}
                            size={30}
                            className="text-white"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed h-full w-[90%] xs:w-[50%] bg-white/95 backdrop-blur-sm top-0 z-[9999] shadow-2xl transition-all duration-300 ease-in-out ${
                    menuStatus ? 'right-0' : 'right-[-130%]'
                }`}
            >
                <div className="absolute right-4 top-4 transition-transform duration-200 hover:rotate-90">
                    <CgClose
                        size={30}
                        className="text-gray-700 cursor-pointer"
                        onClick={() => setMenuStatus(false)}
                    />
                </div>

                <div className="pt-10 px-6">
                    {menuItems.map((item, i) => (
                        <div
                            key={i}
                            className="group py-4 border-b border-gray-100"
                            onClick={() => {
                                setMenuStatus(false)
                                if (scrollToSection && item.ref) {
                                    scrollToSection(item.ref)
                                }
                            }}
                        >
                            <div className="relative overflow-hidden">
                                <div className="text-lg font-medium text-gray-800 hover:text-primary transition-all duration-300 cursor-pointer hover:translate-x-2">
                                    {item.text}
                                </div>
                                <div className="absolute bottom-0 h-0.5 w-full bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}

                    {user?.role?.[0] === 'admin' ? (
                        <div className="mt-3">
                            <Button onClick={() => navigate('/stores')}>
                                Admin Dashboard
                            </Button>
                        </div>
                    ) : (
                        <>
                            <div className="mt-3">
                                <Button
                                    onClick={() => navigate('/store')}
                                    block
                                    className="rounded-[5px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white"
                                >
                                    Login
                                </Button>
                            </div>

                            <div className="mt-3">
                                <HcfSignupPopup
                                    popupButtonStatus
                                    buttonChildren={
                                        <Button
                                            block
                                            variant="solid"
                                            className="rounded-[5px] bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all"
                                        >
                                            Get Started
                                        </Button>
                                    }
                                    hcfLogin={true}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default HomeNavbar
