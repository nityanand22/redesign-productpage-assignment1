// import PatientSignUpPopup from '@/views/auth/PatientSignUp/Popup'
import { BiBot } from 'react-icons/bi'
import { features } from '@/views/Home/data/ClaimLandingFeatures'

const ClaimLandingSection = () => {
    return (
        <div className="bg-gradient-to-br from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="bg-indigo-100 p-3 rounded-lg">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center text-center space-y-8 bg-blue-100 rounded-3xl py-20">
                    <div className="bg-[#38B2AC] p-4 rounded-full">
                        <BiBot className="w-12 h-12 text-white" />
                    </div>

                    <div className="max-w-2xl">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Claim Your Digital Front Office (Website)
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Use power AI to transform your online presence and
                            automate patient interactions
                        </p>
                    </div>

                    <div className="space-y-4 w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl p-6 shadow-lg">
                        <input
                            disabled
                            type="text"
                            placeholder="GoGetWell.ai/your_name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-transparent placeholder-gray-500 text-gray-900 focus:ring-2 focus:ring-[#38B2AC] focus:border-[#38B2AC]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClaimLandingSection
