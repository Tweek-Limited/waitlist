import React from 'react'
import Card from '../components/Card'
import { MdRecordVoiceOver } from "react-icons/md";

const page = () => {
    return (
        <>
            <section>
                <section class=" text-white">
                    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                        <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card title={'Voice Chats'} desc={"We offer voice communication, talk, share and learn from other peoples experience"} logo={'🎤'} />
                            <Card title={'Modules'} desc={"Setup your own learning modules to share with others to expand their knowledge"} logo={'⚡️'} />
                            <Card title={'Ai'} desc={"Use Ai Trends to discover what interests you!"} logo={'🧠'} />
                            <Card title={'Journel'} desc={"Take notes on Goals, progress, and even upload a video about what you've learnt"} logo={'📓'} />
                            <Card title={'Community'} desc={"Join a handful of knowledge and real world experience by asking for help in a collaborative community"} logo={'🤝'} />
                            <Card title={'Roast'} desc={"Ask a question, Get Roasted, share feedback, prove them wrong!!!"} logo={'🔥'} />
                        </div>
                        <div class="mt-12 text-center">
                            <a
                                href="/"
                                class="inline-block rounded bg-blue-300 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </section>
            </section >
        </>
    )
}

export default page
