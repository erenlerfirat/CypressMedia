import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin, faAmazon, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <div className=" dark:text-white dark:bg-gray-600 my-24 ">
            <div className="w-full flex flex-col justify-center lg:flex-row xl:text-lg lg:text-sm text-lg text-gray-700 dark:text-white dark:text-gray-700 ">
                <div className="my-8 mx-4 p-8 border-t-2 w-1/4 md:w-full ">
                    <p className="">Welcome to our digital marketing solutions site, where we offer innovative strategies for SEO, social media marketing, content creation, and PPC advertising. Our expert team delivers customized solutions to boost traffic, engagement, and conversions. Stay ahead with our cutting-edge tools and insights tailored to your needs. Let us help you grow your brand and succeed online.</p>
                </div>
                <div className="my-8 mx-4 p-8 border-t-2 flex justify-center w-1/4 md:w-full ">
                    <iframe className="w-96 h-72 lg:w-72 justify-center items-center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="my-8 mx-4 p-8 border-t-2  w-1/4 md:w-full md:flex md:justify-center">
                    <ul class="p-0 space-y-2 text-sm list-disc">
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">About Us</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Services</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Contact</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Patient Resources</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Careers</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">FAQs</a></li>
                    </ul>
                </div>
                <div className="my-8 mx-4 p-8 border-t-2 w-1/4 md:w-full md:flex md:justify-center">
                    <ul class="p-0 space-y-2 text-sm list-disc">
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">About Us</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Services</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Contact</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Patient Resources</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Terms of Service</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">Careers</a></li>
                        <li><a href="#" class="text-gray-600 hover:text-blue-500">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer