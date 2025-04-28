import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { faqData } from '../data/faqData'

interface FAQItemProps {
    question: string
    answer: string
    isOpen: boolean
    onClick: () => void
}
const FAQItem: React.FC<FAQItemProps> = ({
    question,
    answer,
    isOpen,
    onClick,
}) => (
    <div className="border-b border-indigo-100">
        <button
            onClick={onClick}
            className="w-full py-2 px-0 md:px-4 flex items-center justify-between text-left transition-colors hover:bg-indigo-50/50 rounded-lg"
        >
            <h3 className="text-[16px] leading-[1.2] font-medium text-gray-900 pr-8">
                {question}
            </h3>
            <div
                className={`flex-shrink-0 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
                <BiChevronDown className="w-5 h-5 text-indigo-600" />
            </div>
        </button>

        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
            <div className="p-2 md:p-4 pt-0 text-gray-600">{answer}</div>
        </div>
    </div>
)

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-2 md:px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
                </div>

                {/* FAQ Items */}
                <div className="space-y-2 bg-white rounded-2xl shadow-xl p-6">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={index === openIndex}
                            onClick={() =>
                                setOpenIndex(index === openIndex ? -1 : index)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ
