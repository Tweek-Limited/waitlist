import React from 'react'

const Card = () => {
    return (
        <>
            <div class="space-y-4 w-[50em] m-auto mb-40">
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 class="font-medium">Tweek?</h2>

                        <svg
                            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-slate-400">
                        Tweek, is a platform designed to help Create a space where individuals can engage with others who are willing to guide and support each other providing valuable advice, especially during challenging times.
                    </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 class="font-medium">Why is the platform called Tweek?</h2>

                        <svg
                            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-slate-400">
                        Tweek stands for (Tweak - Week), throughout the week, you refine your knowledge & skills on a particular subject.
                    </p>
                </details>
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                        class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                        <h2 class="font-medium">Why we Started</h2>

                        <svg
                            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </summary>

                    <p class="mt-4 px-4 leading-relaxed text-slate-400">
                        I initiated this endeavor with the intention of maintaining simplicity. I firmly believe that genuine learning occurs through active conversations rather than in the confines of a classroom, where the repetition of words by a teacher with limited real-world exposure can be limiting. This platform aims to create a collaborative community where students can collectively share their knowledge.
                    </p>
                </details>
            </div>
        </>
    )
}

export default Card