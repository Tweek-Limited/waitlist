import React from 'react'

const page = () => {
    return (
        <>
            <section>
                <div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div class=" p-8 md:p-12 lg:px-16 lg:py-24">
                            <div class="mx-auto max-w-xl text-center">
                                <h2 class="text-2xl font-bold text-black md:text-3xl">
                                    Mission
                                </h2>

                                <p class="hidden text-black sm:mt-4 sm:block leading-7">
                                    Our mission is to create a space where students can collectively share infomation with other students, thus making learning to them easier with their interest in mind.
                                </p>

                                <div class="mt-4 md:mt-8">
                                    <a
                                        href="/"
                                        class="inline-block rounded border border-black bg-black px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-blue-400"
                                    >
                                        Join waitlsit
                                    </a>
                                </div>
                                <div class="mt-4 md:mt-8">
                                    <a
                                        href="https://www.buymeacoffee.com/tweekplatfw"
                                        class="inline-block rounded border border-black bg-white shadow-md px-12 py-3 text-sm font-medium text-black transition hover:bg-transparent hover:text-black focus:outline-none focus:ring focus:ring-blue-400"
                                    >
                                        Support Us 🔥
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <img
                                alt="Student"
                                src="https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80"
                                class="h-40 w-full object-cover sm:h-56 md:h-full"
                            />

                            <img
                                alt="Student"
                                src="https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                class="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default page