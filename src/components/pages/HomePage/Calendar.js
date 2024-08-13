import React from 'react'
import calendar from '../../../assets/Calendar-720x405.jpg'
import LanguageContext from '../../../context/LanguageContext';
import { useContext } from 'react';

function Calendar() {

    const { lang, handleLanguage, t } = useContext(LanguageContext);
    const translate = t;
    return (
        <div className="min-w-full dark:bg-gray-600 my-24 ">
            <div className=" grid lg:grid-cols-2 sm:grid-cols-1 w-11/12 mx-auto lg:divide-x-4 lg:divide-y-0 divide-y-4 divide-gray-500  text-gray-700 dark:bg-gray-600 dark:text-white">

                <div className="lg:pl-60 lg:pr-10 lg:py-10 rounded bg-gray-50  lg:divide-y-4 lg:divide-x-0 divide-x-4 divide-gray-500">
                    <p className="my-8 px-12 font-semibold font-serif text-xl lg:text-3xl italic capitalize lg:tracking-widest leading-loose dark:text-gray-700 ">
                        Build and keep in order your tasks with custom calender component
                    </p>
                    <h1>{translate('about')}</h1>
                </div>
                <div className="lg:px-40 lg:py-10 lg:mr-8 rounded bg-gray-50">
                    <img src={calendar} alt="default" />
                </div>
            </div>
        </div >
    )
}

export default Calendar