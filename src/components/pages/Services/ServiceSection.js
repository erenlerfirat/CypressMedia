import React from 'react'
import Button from '../../common/Button'

function ServiceSection({ img, headerFirstLine, desc }) {
    return (
        <div className="flex flex-col mx-auto mb-0 mt-2 bg-gray-50 text-white rounded-md shadow-lg">

            <img src={img} className="rounded-xl w-12/12 mx-auto w-[420px] h-[280px]" />

            <div className=" font-extrabold text-2xl text-gray-800 text-center my-2 py-6 h-[110px]">
                <p>
                    {headerFirstLine}
                </p>
            </div>
            <div className="font-light px-4 pb-12 text-md text-gray-800 text-center my-2 h-[168px] ">
                {desc}{desc}{desc}
            </div>
            <Button style="bg-green-300 my-4 ">both known for their precision</Button>
        </div>
    )
}
export default ServiceSection