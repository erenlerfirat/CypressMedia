import { createContext, useContext, useEffect, useRef, useState } from "react"
import { ChevronDown } from "react-feather";

const AccordianContext = createContext()

export function Accordian({ children, value, onChange, ...props }) {
    const [selected, setSelected] = useState(value);

    useEffect(() => {
        onChange?.(selected)
    }, [selected])

    return (
        <ul {...props}>
            <AccordianContext.Provider value={{ selected, setSelected }}>
                {children}
            </AccordianContext.Provider>
        </ul>
    )
}


export function AccordianItem({ children, value, trigger, ...props }) {
    const { selected, setSelected } = useContext(AccordianContext);

    const open = selected === value;
    const ref = useRef(null)

    return (
        <li className="border-b bg-white dark:bg-gray-700 dark:text-white shadow-lg " {...props}>
            <header
                role="button"
                onClick={() => setSelected(open ? null : value)}
                className="flex justify-between items-center p-4 font-medium"
            >
                {trigger}
                <ChevronDown size={16} className={`transition-transform ${open ? "rotate-180" : ""}`} />
            </header>
            <div className="overflow-y-hidden transition-all"
                style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
            >
                <div className="pt-2 p-4" ref={ref}>
                    {children}
                </div>
            </div>
        </li>
    )
}

export default function Faq() {
    const anyhting = <div className="flex flex-row w-full pr-3 justify-between items-center">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold">
            Anything Goes?
        </div>
        <div><img src={"dot"} width="12px" alt="dot" /></div>
    </div>

    const only = <div className="flex items-center">
        And it's <img src={"react"} width={40} className="px-2" /> & <img src={"tailwindCSS"} width={40} className="px-2" /> Only.
    </div>
    return (
        <>
            <div className='min-h-screen w-screen flex flex-col items-center justify-center bg-white dark:bg-gray-800'>
                <Accordian className="max-w-lg rounded w-screen">
                    <AccordianItem value="1" trigger="👋 Hello There">
                        We're going to make this Accordian component entirely from scratch
                    </AccordianItem>
                    <AccordianItem value="2" trigger="🌟 It's Animated">
                        We'll learn how to make it transition between the open and close states
                    </AccordianItem>
                    <AccordianItem value="3" trigger={anyhting}>
                        It is entirely customizable. You can put any HTML element and style it however you want.
                    </AccordianItem>
                    <AccordianItem value="4" trigger={only}>
                        Nothing but React and Tailwind CSS
                    </AccordianItem>
                    <AccordianItem value="5" trigger="👋 Hello There">
                        We're going to make this Accordian component entirely from scratch
                    </AccordianItem>
                    <AccordianItem value="6" trigger="🌟 It's Animated">
                        We'll learn how to make it transition between the open and close states
                    </AccordianItem>
                    <AccordianItem value="7" trigger="👋 Hello There">
                        We're going to make this Accordian component entirely from scratch
                    </AccordianItem>
                    <AccordianItem value="8" trigger="🌟 It's Animated">
                        We'll learn how to make it transition between the open and close states
                    </AccordianItem>
                </Accordian>
            </div>
        </>
    )
}
