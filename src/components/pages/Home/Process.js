import React from 'react'

function Process() {
    return (
        <div className="bg-yellow-50 dark:bg-white py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                {/* Left Side Content */}
                <div className="lg:w-1/2 px-8">
                    <p className="text-purple-600 font-semibold mb-2">NEDEN CYPRESS</p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Cypress, sadece medikal estetik değil, eksiksiz bir deneyim demektir.
                    </h2>
                    <button className="mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg">
                        DAHA FAZLA
                    </button>
                </div>

                {/* Right Side Content - Cards */}
                <div className="lg:w-1/2 px-8 mt-12 lg:mt-0 grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="flex items-start">
                        <div className="text-gray-500 mr-4">
                            {/* Icon */}
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4H8l4-8v6h1l1 2h-1v4z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Steril Klinik Ortamı</h3>
                            <p className="text-gray-600">
                                Tüm medikal estetik işlemlerimiz hijyenik, güvenli ve konforlu klinik ortamında gerçekleştirilir.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-start">
                        <div className="text-gray-500 mr-4">
                            {/* Icon */}
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m0-4H9m3 3V9m0 0l4-4-4-4-4 4m0 0H9m3 0v4"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Uzman Doktor</h3>
                            <p className="text-gray-600">
                                Medikal estetik işlemlerimiz tecrübeli dermatoloji uzmanı doktorumuz tarafından uygulanmaktadır.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-start">
                        <div className="text-gray-500 mr-4">
                            {/* Icon */}
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 11c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">7/24 Destek</h3>
                            <p className="text-gray-600">
                                Temsilcilerimize, bilgi almak, soru sormak veya destek almak için 7 gün 24 saat boyunca ulaşabilirsiniz.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-start">
                        <div className="text-gray-500 mr-4">
                            {/* Icon */}
                            <svg
                                className="w-12 h-12"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 13c0 2.6-2.2 4-4 4s-4-1.4-4-4V7c0-2.6 2.2-4 4-4s4 1.4 4 4v6z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sürpriz Ücret Yok!</h3>
                            <p className="text-gray-600">
                                CypressClinic’te uygulama ücreti, klinik masrafları ve işlemler gerekli tüm diğer harcamalar işlem ücretine dahildir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Process