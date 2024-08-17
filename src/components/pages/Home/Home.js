import React from 'react'
import Service from '../Services/Service.js'
import Calendar from './Calendar.js'
import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import img from '../../../assets/Calendar-720x405.jpg'
import img2 from '../../../assets/Acacia-100x100.jpg'
import img3 from '../../../assets/Acacia-500x500.jpg'
import Slider from './Slider.js'
import Faq from './Faq.js'
import ContactForm from './ContactForm.js'

function Home() {
    const slides = [
        img,
        img2,
        img3, img,
        img2,
        img3
    ]
    return (
        <div className="bg-gray-100 dark:bg-gray-600 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
            <Service />
            <Faq />
            <Slider />
            <ContactForm />
            <Calendar />
            <Footer />
        </div>
    )
}

export default Home