import React from 'react';
import img from '../../../assets/pexel-smiling.jpg'
const CandidateSection = () => {
    return (
        <div className="bg-blue-50 py-16 dark:bg-white ">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <div className="lg:w-1/2 px-8">
                    <img
                        src={img}
                        alt="Hair Transplant Candidate"
                        className="rounded-lg"
                    />
                </div>

                {/* Text Section */}
                <div className="lg:w-1/2 px-8 mt-8 lg:mt-0">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Who Is A Good Candidate For Hair Transplant?
                    </h2>
                    <p className="text-gray-700 mb-6">
                        Considering a hair transplant? Here's how to know if you're a suitable candidate.
                    </p>

                    <ul className="space-y-4 mb-6">
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="text-gray-600">
                                The first step in determining candidacy is understanding the cause of your hair loss. Hair transplants are most effective for treating hereditary baldness.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="text-gray-600">
                                You need to have enough healthy hair follicles available for transplantation, usually found on the back or sides of your scalp.
                            </span>
                        </li>
                        <li className="flex items-start">
                            <svg
                                className="w-6 h-6 text-teal-500 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <span className="text-gray-600">
                                It's important that your hair loss pattern is stable; if your hair loss continues, you may need additional procedures.
                            </span>
                        </li>
                    </ul>

                    <button className="mt-4 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateSection;