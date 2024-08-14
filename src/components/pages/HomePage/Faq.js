import React from 'react'
import { Accordion } from "flowbite-react";
import LanguageContext from "../../../context/LanguageContext";
import { useContext } from "react";

function Faq() {
    const { lang, handleLanguage, t } = useContext(LanguageContext);
    return (
        <>
            <h1 className="text-3xl text-center mt-4 italic">{t("faq.faq")}</h1>
            <div className="grid lg:grid-flow-col xl:grid-flow-col w-8/12 mx-auto my-12">
                <Accordion className="w-full mx-auto dark:border-gray-400 dark:divide-white">
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">{t("faq.item.header")}</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                dropdowns, modals, navbars, and more.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out this guide to learn how to&nbsp;
                                <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    get started&nbsp;
                                </a>
                                and start developing websites even faster with components on top of Tailwind CSS.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">Is there a Figma file available?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                has a design equivalent in our Figma file.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the
                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Figma design system
                                </a>
                                based on the utility classes from Tailwind CSS and components from Flowbite.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                        Flowbite Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindui.com/"
                                        rel="nofollow"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
                <Accordion className="w-full mx-auto dark:border-gray-400 dark:divide-white">
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">What is Flowbite?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                dropdowns, modals, navbars, and more.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out this guide to learn how to&nbsp;
                                <a
                                    href="https://flowbite.com/docs/getting-started/introduction/"
                                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                                >
                                    get started&nbsp;
                                </a>
                                and start developing websites even faster with components on top of Tailwind CSS.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">Is there a Figma file available?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                has a design equivalent in our Figma file.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Check out the
                                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                    Figma design system
                                </a>
                                based on the utility classes from Tailwind CSS and components from Flowbite.
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className="hover:bg-gray-200">What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                components, whereas Tailwind UI offers sections of pages.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                technical reason stopping you from using the best of two worlds.
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                <li>
                                    <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                        Flowbite Pro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://tailwindui.com/"
                                        rel="nofollow"
                                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                                    >
                                        Tailwind UI
                                    </a>
                                </li>
                            </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>

    )
}

export default Faq