import MainNavigation from '../../layout/MainNavigation'
import ContactForm from '../Home/ContactForm'
import { Footer } from 'flowbite-react'

function Article2() {

    return (
        <>
            <MainNavigation />

            <div className="min-h-screen p-16 flex justify-center dark:text-white">
                <div className="max-w-2xl">
                    <h1 className="font-extrabold text-3xl mb-2">{"Regain your confidence with our expert hair transplant solutions—natural results, no compromise."}</h1>

                    <p className="mb-6 text-slate-400 ">
                        Posted on{" "}
                        {new Date("1723971371210").toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </p>
                    <p className="[&>p]:mb-8 [&>h2]:font-extrabold lg:leading-[2rem]  ">
                        {"Hair loss can be a challenging experience, but it doesn’t have to define your appearance or confidence. Our clinic in Istanbul specializes in state-of-the-art hair transplant procedures that are designed to deliver natural and lasting results. We offer advanced techniques such as Follicular Unit Extraction (FUE) and Direct Hair Implantation (DHI), both known for their precision and minimal scarring. Whether you're experiencing thinning hair, a receding hairline, or significant hair loss, our experienced team tailors each procedure to your specific needs. From the initial consultation to post-procedure care, we ensure a personalized experience that prioritizes your comfort and satisfaction. Our goal is to help you achieve a fuller, healthier head of hair that not only looks natural but also boosts your self-esteem. With a commitment to excellence and the latest in medical technology, we stand by you every step of the way. Take the first step toward reclaiming your hair and confidence—schedule your consultation today."
                        }
                    </p>
                </div>
            </div>
            <ContactForm />
            <Footer />
        </>
    )
}

export default Article2