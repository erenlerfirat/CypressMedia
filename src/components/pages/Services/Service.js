import React from 'react'
import ServiceSection from './ServiceSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope, faPhotoFilm, faCommentSms, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import LanguageContext from "../../../context/LanguageContext";
import { useContext } from "react";

function Service() {

    const { lang, handleLanguage, t } = useContext(LanguageContext);

    return (
        <div className="min-w-full mx-auto bg-green-50 dark:text-white dark:bg-gray-800  ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700 dark:text-white ">{t("services.services")}</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto  py-6 text-gray-700 dark:divide-gray-100 dark:text-white">
                <ServiceSection
                    headerFirstLine={t("services.item.header")}
                    desc={t("services.item.desc")}>
                    <FontAwesomeIcon className="text-yellow-500 mx-4 my-4" size="xl" icon={faPhotoFilm} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine={t("services.item2.header")}
                    desc={t("services.item2.desc")}>
                    <FontAwesomeIcon className="text-orange-500 mx-4 my-4" size="xl" icon={faCalendar} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine={t("services.item3.header")}
                    desc={t("services.item3.desc")}>
                    <FontAwesomeIcon className="text-blue-500 mx-4 my-4" size="xl" icon={faEnvelope} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine={t("services.item4.header")}
                    desc={t("services.item4.desc")}>
                    <FontAwesomeIcon className="text-gray-500 mx-4 my-4" size="xl" icon={faCommentSms} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine={t("services.item5.header")}
                    desc={t("services.item5.desc")}>
                    <FontAwesomeIcon className="text-yellow-500 mx-4 my-4" size="xl" icon={faCreditCard} />
                </ServiceSection>

                <ServiceSection
                    headerFirstLine={t("services.item6.header")}
                    desc={t("services.item6.desc")}>
                    <FontAwesomeIcon className="text-green-600  mx-4 my-4 " size="xl" icon={faWhatsapp} />
                </ServiceSection>
            </ul>
        </div>
    )
}

export default Service