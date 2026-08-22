import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";

const MethodPage = () => {
    return (
        <>
            <Navbar target={2} />

            {/* Main Section */}


            {/* Cummunity */}
            <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col lg:flex-row items-center gap-10">
                <div className="bg-blue-600 rounded-2xl p-10 shrink-0 overflow-hidden flex justify-center items-center">
                    <Image src={'/assets/screenshots/community.png'} alt="Path" width={500} height={500} className="rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                </div>
                <div className="space-y-3">
                    <p className="text-blue-600 font-semibold">Community</p>
                    <h2 className="text-2xl md:text-4xl font-bold">Share Your Journey in Real Time</h2>
                    <p className="text-slate-500 md:text-lg">Never practice in isolation again. Post your daily thoughts, exchange tips with fellow learners, and leave comments to support others. Drop a like, start a thread, and turn your daily language learning into a shared social experience.</p>
                </div>
            </div>

            {/* Guidebook & Quiz */}
            <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-5">
                <div className="space-y-3 text-center w-full">
                    <p className="text-blue-600 font-semibold">Guidebook & Quizzes</p>
                    <h2 className="text-2xl md:text-4xl font-bold">Learn Faster with Guided Practice</h2>
                </div>
                <div className="bg-blue-600 rounded-2xl w-full p-10 flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row gap-10 text-neutral-50 items-center">
                        <Image src={'/assets/screenshots/quiz.png'} alt="quiz" width={500} height={500} className="rounded-xl -rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                        <Image src={'/assets/screenshots/guidebook.png'} alt="guidebook" width={500} height={500} className="rounded-xl w-full h-fit object-contain rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-neutral-50 font-bold text-2xl">Read, Listen, and Test Your Skills</p>
                        <p className="text-slate-300 text-lg">From key phrases and audio pronunciations to real-world comprehension questions, everything you need for true fluency is right at your fingertips. Learn the rules, take the quiz, and watch your skills grow.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MethodPage;