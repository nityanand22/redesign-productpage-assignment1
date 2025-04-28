import { FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface LinkItem {
    text: string
    path: string
}

const links: LinkItem[] = [
    { text: 'Privacy Policy', path: '/privacy-policy' },
    { text: 'Terms of Service', path: '/terms-of-service' },
    { text: 'Pricing Policy', path: '/pricing-policy' },
    { text: 'Editor Policy', path: '/editor-policy' },
]

const MainFooter: React.FC = () => {
    return (
        <footer className="bg-[#1E293B] p-6  shadow-lg">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto">
                {/* Copyright Section */}
                <h1 className="text-sm text-white md:hidden text-center w-full">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>
                <h1 className="text-xs text-white hidden md:block">
                    ©{new Date().getFullYear()} gogetwell.ai
                </h1>

                {/* Links Section */}
                <ul className="mt-4 md:mt-0 flex gap-x-4 flex-wrap gap-y-3 mx-auto justify-center">
                    {links.map((item, i) => (
                        <li
                            key={i}
                            className="text-white hover:underline hover:text-[#38B2AC] text-xs text-center"
                        >
                            <Link to={`${item.path}`}>{item.text}</Link>
                        </li>
                    ))}
                </ul>

                {/* Social Media Icons */}
                <div className="items-center gap-4 md:gap-8 hidden md:flex">
                    <Link
                        to="https://x.com/gogetwellai"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaTwitter
                            size={25}
                            className="text-white hover:text-[#4FD1C5] transition-all"
                        />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/gogetwellai/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn
                            size={25}
                            className="text-white hover:text-[#4FD1C5] transition-all"
                        />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter
