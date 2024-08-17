import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import Button from "../common/Button";
import logo from '../../assets/carlogo-100x100.jpg'
import {
    MoonIcon,
    SunIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline";
import ServicesDropdown from "./ServicesDropDown";
import Dropdown, { DropdownItem } from "../common/Dropdown";
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LanguageContext from "../../context/LanguageContext";


const MainNavigation = () => {

    const [currentLanguage, setCurrentLanguage] = useState("en")
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleDarkMode, setToggleDarkMode] = useState(false);

    const { lang, handleLanguage, t } = useContext(LanguageContext);

    const handleChangeLanguage = (e) => {

        if (localStorage.getItem("i18nextLng") === e)
            return;
        setCurrentLanguage(e);
        handleLanguage(e);
        localStorage.setItem("lang", e);
    }

    const ToggleDarkTheme = (isDark) => {
        localStorage.theme = isDark ? 'dark' : 'light'; // Save preference

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
        setToggleDarkMode(isDark)
    }

    useEffect(() => {
        let isDark = localStorage.theme === 'dark';
        ToggleDarkTheme(isDark);
        return () => {
        }
    }, [])
    return (
        <nav className={toggleDarkMode ? " dark:bg-gray-600 dark:text-white w-full left-0 right-0 top-0 " : "bg-gray-100 left-0 right-0 top-0"}>
            <div className="max-w-7xl mx-auto w-full relative background" >
                <div className="flex mx-auto justify-between w-5/6 text-gray-800">
                    {/* Primary menu and logo */}
                    <div className="flex items-center gap-16 my-12 dark:text-white ">
                        {/* logo */}
                        <div className="font-bold ease-in-out hover:scale-110 duration-500 ">
                            <a
                                href="/"
                                className="flex font-bold items-center gap-1 "
                            >
                                <img src={logo} alt="" />
                                <span className=""> Cypress Media </span>
                            </a>
                        </div>
                        {/* primary */}
                        <div className="hidden lg:flex xl:gap-12 gap-6 ease-in-out ">
                            <Link className="hover:underline hover:scale-110 duration-300  " to="/Home">{t("home")}</Link>
                            <ServicesDropdown />
                            <Link className="hover:underline hover:scale-110 duration-300" to="/Doctors">{t("doctors")}</Link>
                            <Link className="hover:underline hover:scale-110 duration-300" to="/About">{t("about")}</Link>
                        </div>
                    </div>
                    {/* secondary */}
                    <div className="hidden lg:flex gap-6">
                        <div className="lg:flex items-center xl:gap-6">
                            <div className="dark:bg-gray-500 lg:flex items-center gap-2 dark:bg-white" >
                                {
                                    toggleDarkMode
                                        ? <SunIcon onClick={() => ToggleDarkTheme(false)} className="dark:bg-gray-600 dark:text-white h-6 w-6 " />
                                        : <MoonIcon onClick={() => ToggleDarkTheme(true)} className="h-6 w-6" />
                                }
                            </div>
                            <div className="flex">
                                <Button style="bg-green-400 dark:text-white text-white dark:border-0 ">{t("contact.contact")}</Button>
                                <Dropdown trigger={<Button style="text-white"><FontAwesomeIcon size="lg" icon={faGlobe} /></Button>}>
                                    <DropdownItem key={"EN"} onClick={() => handleChangeLanguage("en")}>
                                        EN
                                    </DropdownItem >
                                    <DropdownItem key={"TR"} onClick={() => handleChangeLanguage("tr")} >
                                        TR
                                    </DropdownItem>
                                    <DropdownItem key={"DE"} onClick={() => handleChangeLanguage("de")}>
                                        DE
                                    </DropdownItem>
                                    <DropdownItem key={"ES"} onClick={() => handleChangeLanguage("es")}>
                                        ES
                                    </DropdownItem>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    {/* Mobile navigation toggle */}
                    <div className="lg:hidden absolute top-[52px] right-40 ">
                        <button onClick={() => setToggleMenu(!toggleMenu)}>
                            <Bars3Icon className="h-6" />
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`fixed z-40 w-full bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 dark:bg-gray-600 ${!toggleMenu ? "h-0" : "h-full"
                    }`}
            >
                <div className=" mx-6">
                    <div className="flex flex-col gap-8 w-full font-bold tracking-wider  lg:flex items-start gap-2  ">
                        <Link className="hover:underline hover:scale-110 duration-300" to="/Home">{t("home")}</Link>
                        <Link className="hover:underline hover:scale-110 duration-300" to="/Services">{t("services.services")}</Link>
                        <Link className="hover:underline hover:scale-110 duration-300" to="/About">{t("about")}</Link>
                    </div>
                    <div className="flex items-center mx-6 mt-8 gap-16 ">
                        <div className=" lg:flex gap-2  " >
                            {
                                toggleDarkMode
                                    ? <SunIcon onClick={() => ToggleDarkTheme(false)} className="dark:bg-gray-600 dark:text-white h-6 w-6 " />
                                    : <MoonIcon onClick={() => ToggleDarkTheme(true)} className="h-6 w-6" />
                            }
                        </div>
                        <div className="flex gap-8">
                            <Button style="bg-green-400 dark:text-white text-white dark:border-0 ">{t("contact.contact")}</Button>
                            <Dropdown trigger={<Button style="text-white"><FontAwesomeIcon size="lg" icon={faGlobe} /></Button>}>
                                <DropdownItem key={"EN"} onClick={() => handleChangeLanguage("en")}>
                                    EN
                                </DropdownItem >
                                <DropdownItem key={"TR"} onClick={() => handleChangeLanguage("tr")} >
                                    TR
                                </DropdownItem>
                                <DropdownItem key={"DE"} onClick={() => handleChangeLanguage("de")}>
                                    DE
                                </DropdownItem>
                                <DropdownItem key={"ES"} onClick={() => handleChangeLanguage("es")}>
                                    ES
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MainNavigation;