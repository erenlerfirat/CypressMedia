import React from 'react'
import Service from '../Services/Service.js'
import MainNavigation from '../../layout/MainNavigation.js'
import Footer from '../../layout/Footer.js'
import Slider from './Slider.js'
import Faq from './Faq.js'
import ContactForm from './ContactForm.js'
import Process from './Process.js'
import CandidateSection from './CandidateSection.js'

function Home() {
    return (
        <div className="bg-gray-100 dark:bg-gray-800 h-screen w-screen overflow-x-hidden">
            <MainNavigation />
            <CandidateSection />
            <Slider />
            <Process />
            <Faq />
            <Service />
            <ContactForm />
            <Footer />
        </div>
    )
}

export default Home