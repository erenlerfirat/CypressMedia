import React from 'react'
import MainNavigation from '../../layout/MainNavigation'
import Footer from '../../layout/Footer'
import ContactForm from '../Home/ContactForm'
import AboutContent from './AboutContent'

function About() {
    return (
        <div className="">
            <MainNavigation />
            <AboutContent />
            <ContactForm />
            <Footer />

        </div>
    )
}

export default About