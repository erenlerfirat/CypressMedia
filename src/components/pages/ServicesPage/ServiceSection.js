import React from 'react'

function ServiceSection({ children, headerFirstLine, desc }) {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-2 mx-auto mb-0 mt-2 bg-gray-50 text-white rounded-md dark:text-white dark:bg-gray-100  ">

            <div className=" row-span-1 col-span-1 col-start-1 text-end mt-8">{children}</div>

            <div className=" row-span-1 col-span-2 col-start-2 text-lg mt-10 pr-12 text-gray-700 font-semibold font-serif italic capitalize  tracking-widest leading-loose ">
                <p className=" ">
                    {headerFirstLine}
                </p>
            </div>
            <div className="mt-4 px-12  col-span-3 col-start-1 text-gray-700 text-center  font-serif italic  tracking-widest leading-loose break-words ">
                {desc}
            </div>
        </div>
    )
}
export default ServiceSection