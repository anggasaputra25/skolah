'use client'
import { CTASection } from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { scrollToSection } from "@/lib/scroll";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const MethodPage = () => {
    return (
        <>
            <Navbar target={2} />

            {/* Hero Section */}
            <div className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center items-center gap-5">
                <div className="space-y-3 max-w-3xl text-center">
                    <p className="text-blue-600 font-semibold">Method</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-center">How You&apos;ll Master Your Next Language</h1>
                    <p className="text-slate-500 md:text-lg">No overwhelming rules. Just a clean, highly effective cycle of structured learning, active practice, and social engagement.</p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => scrollToSection('explore')}>Explore Method</Button>
                    <ButtonLink variant="secondary" href="/register">Get Started</ButtonLink>
                </div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto rotate-12" />
                <FontAwesomeIcon icon={faBolt} className="w-9! h-auto! p-5 bg-blue-600 text-neutral-50 rounded-2xl absolute bottom-28 right-72 md:top-72 lg:bottom-28 lg:top-auto md:right-60 rotate-12 shadow" />
            </div>

            {/* New Way */}
            <div id="explore" className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="space-y-3">
                    <p className="text-blue-600 font-semibold">A New Way To Learn</p>
                    <h2 className="text-2xl md:text-4xl font-bold">The World Doesn&apos;t Need Another Boring Language App</h2>
                    <p className="text-slate-500 md:text-lg">We believe that true fluency happens when learning feels like playing, progress feels rewarding, and practice happens in a real community. By combining smart gamification, interactive rewards, and immersive practice, Skolah turns daily language practice into an addiction you actually benefit from.</p>
                </div>
                <div className="bg-blue-600 rounded-2xl p-10 shrink-0 overflow-hidden flex justify-center items-center">
                    <Image src={'/assets/screenshots/learn.png'} alt="Path" width={500} height={500} className="rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                </div>
            </div>

            {/* Daily Rewards */}
            <div className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col justify-center gap-10">
                <div className="space-y-3 text-center w-full">
                    <p className="text-blue-600 font-semibold">Daily Rewards</p>
                    <h2 className="text-2xl md:text-4xl font-bold">Boost Your Progress</h2>
                </div>
                <div className="bg-blue-600 rounded-2xl w-full p-10 flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row gap-10 text-neutral-50">
                        <Image src={'/assets/screenshots/quests.png'} alt="quests" width={500} height={500} className="rounded-xl w-full -rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                        <Image src={'/assets/screenshots/shop.png'} alt="shop" width={500} height={500} className="rounded-xl w-full rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                    <div className="space-y-1">
                        <p className="text-neutral-50 font-bold text-2xl">Play, Earn, and Shop Your Way</p>
                        <p className="text-slate-300 text-lg">Learning a new language should feel rewarding every single day. By completing interactive quests, you automatically stack up coins that you can spend on useful items and upgrades in the shop. Whether you want to boost your daily streak or customize your experience, you have full control over how you spend your rewards. Start playing, start earning, and claim your favorites!</p>
                    </div>
                </div>
            </div>

            {/* Cummunity */}
            <div className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col lg:flex-row items-center gap-10">
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
            <div className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col justify-center gap-5">
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

            {/* Leaderboard */}
            <div className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col-reverse lg:flex-row items-center gap-10">
                <div className="space-y-3">
                    <p className="text-blue-600 font-semibold">Leaderboard</p>
                    <h2 className="text-2xl md:text-4xl font-bold">See Where You Stand Among the Best</h2>
                    <p className="text-slate-500 md:text-lg">Every completed quest earns you points to climb higher. Push your limits, outpace rival learners, and promote to higher leagues before the timer resets!</p>
                </div>
                <div className="bg-blue-600 rounded-2xl p-10 shrink-0 overflow-hidden flex justify-center items-center">
                    <Image src={'/assets/screenshots/leaderboard.jpg'} alt="Path" width={500} height={500} className="rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                </div>
            </div>

            {/* CTA */}
            <CTASection />

            <Footer />
        </>
    )
}

export default MethodPage;