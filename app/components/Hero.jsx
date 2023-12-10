"use client"
import React, { useRef } from 'react'
import platform from '@/public/platform.png'
import Image from 'next/image'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'


const Hero = () => {
    const [email, setEmail] = useState('');
    const inputField = useRef();

    if (inputField === '' || inputField === undefined) {
        toast.error('Email invalid');
    } else {
        toast.success('Email successfully')
    }

    return (
        <>
            <section class="text-white relative">
                <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center ">
                    <div class="mx-auto max-w-3xl text-center m-auto">
                        <h1
                            class="hero_title bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200 select-none bg-clip-text text-8xl font-extrabold text-transparent relative right-[2em] sm:text-7xl w-[15em] m-auto text-center"
                        >
                            education re-imagined
                        </h1>

                        <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed text-slate-400 select-none">
                            Talk with others! Learn from experience and build knowledge
                        </p>

                        <form action="https://getform.io/f/5958ce06-8f1c-499b-bb3b-7b7e3df8f967" method="POST" class="relative top-5 mb-20 w-[30em] m-auto">
                            <input onSubmit={() => setEmail()} ref={inputField} type="email" name="email" id="hs-floating-input-email" class="peer p-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-white drop-shadow-lg border-gray-700 text-gray-400 focus:ring-gray-600 focus:pt-6 focus:pb-2[&:not(:placeholder-shown)]:pt-6[&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2" placeholder='you@gmail.com' />
                            <label for="hs-floating-input-email" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent text-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:text-xs peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-translate-y-1.5peer-[:not(:placeholder-shown)]:text-gray-100">Email</label>
                            <button
                                class="group relative top-3 inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                <span class="absolute -start-full transition-all group-hover:start-4">
                                    <svg
                                        class="h-5 w-5 rtl:rotate-180"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </span>

                                <span class="text-sm font-medium transition-all group-hover:ms-4"> Join Waitlist </span>
                            </button>
                        </form>
                        <div class="mt-8 flex flex-wrap justify-center gap-4 w-[70em] relative right-[10em]">
                            <Image src={platform} className='relative w-[100em] select-none drop-shadow-md rounded-md' />
                        </div>
                    </div>
                </div>
                <Toaster />
            </section >
        </>
    )
}

export default Hero