import React from 'react'
import MainNavigation from '../../layout/MainNavigation'
import ContactForm from '../Home/ContactForm'
import Footer from '../../layout/Footer'
import BlogSection from './BlogSection'

function Blog() {
    return (
        <div>
            <div className="bg-gray-100 dark:bg-gray-600 h-screen w-screen overflow-x-hidden">
                <MainNavigation />
                <BlogSection />
                <ContactForm />
                <Footer />
            </div>
        </div>
    )
}

export default Blog