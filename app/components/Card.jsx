import React from 'react'
import Image from 'next/image'

const Card = ({ title, desc, logo }) => {
    return (
        <>
            <div
                class="bg-white block rounded-md border border-gray-300 p-8 shadow-md transition hover:border-blue-500/10 hover:shadow-blue-500/10"
            >
                <div className='bg-black w-0 text-3xl font-extrabold select-none'>
                    {logo}
                </div>
                <h2 class="mt-4 text-xl font-bold text-black select-none">{title}</h2>
                <p class="mt-1 text-sm text-black select-none">
                    {desc}
                </p>
            </div>
        </>
    )
}

export default Card