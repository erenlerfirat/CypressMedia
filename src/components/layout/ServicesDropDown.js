import { MegaMenu, Navbar } from 'flowbite-react';
import { HiArrowRight } from 'react-icons/hi';
import LanguageContext from "../../context/LanguageContext";
import { useContext } from "react";

function ServicesDropdown() {
    const customTheme = {
        root: {
            base: "bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-white ",
        },
    };
    const { lang, handleLanguage, t } = useContext(LanguageContext);

    return (
        < MegaMenu theme={customTheme}>
            <Navbar.Toggle />
            <Navbar.Collapse >
                <MegaMenu.Dropdown toggle={<div className='text-lg'>{t("services.services")}</div>}>

                    <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
                        <ul className="space-y-4 sm:mb-4 md:mb-0 list-disc">
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Online Stores
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Segmentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Marketing CRM
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Online Stores
                                </a>
                            </li>
                        </ul>
                        <ul className="mb-4 hidden space-y-4 sm:block md:mb-0 list-disc">
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Our Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    License
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                                    Resources
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
                            >
                                Explore our brands
                                <span className="sr-only">Explore our brands</span>
                                <HiArrowRight className="ml-2" />
                            </a>
                        </div>
                    </div>
                </MegaMenu.Dropdown>
            </Navbar.Collapse>
        </MegaMenu>
    )
}

export default ServicesDropdown