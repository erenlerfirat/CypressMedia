import React from 'react'
import ServiceSection from './ServiceSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faEnvelope, faPhotoFilm, faCommentSms, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import LanguageContext from "../../../context/LanguageContext";
import { useContext } from "react";
import img from '../../../assets/card-1.jpg'
import img2 from '../../../assets/card-2.jpg'
import img3 from '../../../assets/card-3.jpg'
import img4 from '../../../assets/card-4.jpg'
import img5 from '../../../assets/card-5.jpg'
import img6 from '../../../assets/card-6.jpg'

function Service() {

    const { lang, handleLanguage, t } = useContext(LanguageContext);

    return (
        <div className="min-w-full mx-auto bg-green-50 dark:text-white dark:bg-gray-800  ">
            <p className="text-center pt-24 mb-8 text-4xl text-gray-700 dark:text-white ">{t("services.services")}</p>
            <ul className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 gap-3 w-11/12 mx-auto  py-6 text-gray-700 dark:divide-gray-100 dark:text-white">
                <ServiceSection
                    img={img}
                    headerFirstLine={t("services.item.header")}
                    desc={t("services.item.desc")}>
                </ServiceSection>

                <ServiceSection
                    img={img2}
                    headerFirstLine={t("services.item2.header")}
                    desc={t("services.item2.desc")}>
                </ServiceSection>

                <ServiceSection
                    img={img3}
                    headerFirstLine={t("services.item3.header")}
                    desc={t("services.item3.desc")}>
                </ServiceSection>

                <ServiceSection
                    img={img4}
                    headerFirstLine={t("services.item4.header")}
                    desc={t("services.item4.desc")}>
                </ServiceSection>

                <ServiceSection
                    img={img5}
                    headerFirstLine={t("services.item5.header")}
                    desc={t("services.item5.desc")}>
                </ServiceSection>

                <ServiceSection
                    img={img6}
                    headerFirstLine={t("services.item6.header")}
                    desc={t("services.item6.desc")}>
                </ServiceSection>
            </ul>
        </div>
    )
}

export default Service