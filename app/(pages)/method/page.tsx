'use client'
import { CTASection } from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WordAnimation } from "@/components/ui/WordAnimation";
import { useScroll } from "@/hooks/useScroll";
import { scrollToSection } from "@/lib/scroll";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const MethodPage = () => {
    const ref1 = useScroll();
    const ref2 = useScroll();
    const ref3 = useScroll();
    const ref4 = useScroll();
    const ref5 = useScroll();
    const ref6 = useScroll();
    return (
        <>
            <Navbar target={2} />

            {/* Hero Section */}
            <div ref={ref1} className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center items-center gap-5">
                <div className="space-y-3 max-w-3xl text-center">
                    <p className="fade-down text-blue-600 font-semibold">How Skolah Works</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                        <WordAnimation>
                            How You&apos;ll Master Your Next Language
                        </WordAnimation>
                    </h1>
                    <p className="fade-up text-slate-500 md:text-lg">No overwhelming rules. Just a clean, highly effective cycle of structured learning, active practice, and social engagement.</p>
                </div>
                <div className="flex gap-2">
                    <Button className="fade-up transition-none!" onClick={() => scrollToSection('explore')}>Explore Method</Button>
                    <ButtonLink className="fade-up transition-none!" variant="secondary" href="/register">Get Started</ButtonLink>
                </div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="fade-up absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto rotate-12 animate-[spin_20s_linear_infinite]" />
                <FontAwesomeIcon icon={faBolt} className="fade-up w-9! h-auto! p-5 bg-blue-600 text-neutral-50 rounded-2xl absolute bottom-28 right-72 md:top-72 lg:bottom-28 lg:top-auto md:right-60 rotate-12 shadow" />
            </div>

            {/* New Way */}
            <div ref={ref2} id="explore" className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col-reverse lg:flex-row items-center gap-10 overflow-hidden">
                <div className="space-y-3">
                    <p className="fade-down text-blue-600 font-semibold">A New Way To Learn</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            The World Doesn&apos;t Need Another Boring Language App
                        </WordAnimation>
                    </h2>
                    <p className="fade-up text-slate-500 md:text-lg">We believe that true fluency happens when learning feels like playing, progress feels rewarding, and practice happens in a real community. By combining smart gamification, interactive rewards, and immersive practice, Skolah turns daily language practice into an addiction you actually benefit from.</p>
                </div>
                <div className="overflow-hidden rounded-2xl shrink-0">
                    <div className="fade-up bg-blue-600 p-10 overflow-hidden flex justify-center items-center rounded-2xl">
                        <Image src={'/assets/screenshots/learn.png'} alt="Path" width={500} height={500} className="fade-up rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                </div>
            </div>

            {/* Daily Rewards */}
            <div ref={ref3} className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10 overflow-hidden">
                <div className="space-y-3 text-center w-full">
                    <p className="fade-down text-blue-600 font-semibold">Daily Rewards</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            Boost Your Progress
                        </WordAnimation>
                    </h2>
                </div>
                <div className="fade-up bg-blue-600 rounded-2xl w-full p-10 flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row gap-10 text-neutral-50">
                        <Image src={'/assets/screenshots/quests.png'} alt="quests" width={500} height={500} className="fade-up rounded-xl w-full -rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                        <Image src={'/assets/screenshots/shop.png'} alt="shop" width={500} height={500} className="fade-up rounded-xl w-full rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                    <div className="fade-up space-y-1">
                        <p className="text-neutral-50 font-bold text-2xl">Play, Earn, and Shop Your Way</p>
                        <p className="text-slate-300 text-lg">Learning a new language should feel rewarding every single day. By completing interactive quests, you automatically stack up coins that you can spend on useful items and upgrades in the shop. Whether you want to boost your daily streak or customize your experience, you have full control over how you spend your rewards. Start playing, start earning, and claim your favorites!</p>
                    </div>
                </div>
            </div>

            {/* Cummunity */}
            <div ref={ref4} id="explore" className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
                <div className="overflow-hidden rounded-2xl shrink-0">
                    <div className="fade-up bg-blue-600 p-10 overflow-hidden flex justify-center items-center rounded-2xl">
                        <Image src={'/assets/screenshots/community.png'} alt="community" width={500} height={500} className="fade-up rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                </div>
                <div className="space-y-3">
                    <p className="fade-down text-blue-600 font-semibold">Community</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            Share Your Journey in Real Time
                        </WordAnimation>
                    </h2>
                    <p className="fade-up text-slate-500 md:text-lg">Never practice in isolation again. Post your daily thoughts, exchange tips with fellow learners, and leave comments to support others. Drop a like, start a thread, and turn your daily language learning into a shared social experience.</p>
                </div>
            </div>

            {/* Guidebook & Quiz */}
            <div ref={ref5} className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10 overflow-hidden">
                <div className="space-y-3 text-center w-full">
                    <p className="fade-down text-blue-600 font-semibold">Guidebook & Quizzes</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            Learn Faster with Guided Practice
                        </WordAnimation>
                    </h2>
                </div>
                <div className="fade-up bg-blue-600 rounded-2xl w-full p-10 flex flex-col gap-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 text-neutral-50">
                        <Image src={'/assets/screenshots/quiz.png'} alt="quests" width={500} height={500} className="fade-up rounded-xl w-full -rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                        <Image src={'/assets/screenshots/guidebook.png'} alt="shop" width={500} height={500} className="fade-up h-fit rounded-xl w-full rotate-1 shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                    <div className="fade-up space-y-1">
                        <p className="text-neutral-50 font-bold text-2xl">Read, Listen, and Test Your Skills</p>
                        <p className="text-slate-300 text-lg">From key phrases and audio pronunciations to real-world comprehension questions, everything you need for true fluency is right at your fingertips. Learn the rules, take the quiz, and watch your skills grow.</p>
                    </div>
                </div>
            </div>

            {/* Leaderboard */}
            <div ref={ref6} id="explore" className="w-11/12 md:w-10/12 mx-auto lg:min-h-dvh mb-10 flex flex-col-reverse lg:flex-row items-center gap-10 overflow-hidden">
                <div className="space-y-3">
                    <p className="fade-down text-blue-600 font-semibold">Leaderboard</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            See Where You Stand Among the Best
                        </WordAnimation>
                    </h2>
                    <p className="fade-up text-slate-500 md:text-lg">Every completed quest earns you points to climb higher. Push your limits, outpace rival learners, and promote to higher leagues before the timer resets!</p>
                </div>
                <div className="overflow-hidden rounded-2xl shrink-0">
                    <div className="fade-up bg-blue-600 p-10 overflow-hidden flex justify-center items-center rounded-2xl">
                        <Image src={'/assets/screenshots/leaderboard.jpg'} alt="leaderboard" width={500} height={500} className="fade-up rounded-xl shadow-[12px_12px_0_0_rgb(255_255_255/50%)]" />
                    </div>
                </div>
            </div>

            {/* CTA */}
            <CTASection />

            <Footer />
        </>
    )
}

export default MethodPage;