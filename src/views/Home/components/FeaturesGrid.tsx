import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { solutions, settings } from '../data/solutions'

const FeaturesGrid: React.FC = () => {
    return (
        <div className="py-16 px-4 md:px-8 bg-gray-50 shadow-inner">
            <div className="max-w-9xl mx-auto bg-[#23486A] rounded-3xl px-12 pt-10 pb-16 shadow-lg">
                <div className="text-center mb-16">
                    <h2 className="relative text-4xl font-bold text-white mb-4">
                        Our Comprehensive Solutions
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="slider-container">
                    {/* used slider for carousel effect
                    npm install react-slick slick-carousel --save
                    npm install --save-dev @types/react-slick */}

                    <Slider {...settings}>
                        {solutions.map((solution, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-center items-center"
                                >
                                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl max-w-[300px] mx-auto h-[250px]">
                                        <div className="p-6">
                                            <div
                                                className={`${solution.color} inline-flex p-3 rounded-lg text-white mb-4`}
                                            >
                                                {solution.icon}
                                            </div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                                {solution.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                {solution.description}
                                            </p>
                                        </div>
                                        <div
                                            className={`h-1 w-full absolute bottom-0 ${solution.color} opacity-75`}
                                        ></div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FeaturesGrid
