import React from 'react'
import ServiceSection from './ServiceSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope, faPhotoFilm, faCommentSms, faMailForward, faCalendar, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'


function Service() {

    return (
        <div className="min-w-full mx-auto bg-gray-100 dark:text-white dark:bg-gray-600  ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700 dark:text-white ">Services</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto  py-6 text-gray-700 dark:divide-gray-100 dark:text-white">
                <ServiceSection
                    headerFirstLine="Digital Content Creation"
                    desc="We create and manage your social media platforms">
                    <FontAwesomeIcon className="text-yellow-500 mx-4 my-4" size="xl" icon={faPhotoFilm} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine="Reservation Service "
                    desc="Make a great customer experience with our reservation system . You can contact with us for details.">
                    <FontAwesomeIcon className="text-orange-500 mx-4 my-4" size="xl" icon={faCalendar} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine="Email Marketing"
                    desc="You can reach and introduce your product your customers via email marketing ">
                    <FontAwesomeIcon className="text-blue-500 mx-4 my-4" size="xl" icon={faEnvelope} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine="SMS Service"
                    desc="Create SMS services for campaigns and OTP verification">
                    <FontAwesomeIcon className="text-gray-500 mx-4 my-4" size="xl" icon={faCommentSms} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine="Payment Infrastructure"
                    desc="You may get your payments directly through our payment gateway">
                    <FontAwesomeIcon className="text-yellow-500 mx-4 my-4" size="xl" icon={faCreditCard} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine="Whatsapp Messaging"
                    desc="Automate your messaging process for both time saving and customer experience">
                    <FontAwesomeIcon className="text-green-600  mx-4 my-4 " size="xl" icon={faWhatsapp} />
                </ServiceSection>
            </ul>
        </div>
    )
}

export default Service