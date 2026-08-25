'use client'
import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faQuoteRight, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TESTIMONIALS } from "@/constants/testimonials";
import Link from "next/link";
import { BorderCard } from "@/components/ui/BorderCard";
import { BLOG_POSTS } from "@/constants/blog";
import { CTASection } from "@/components/layout/CTA";
import { useScroll } from "@/hooks/useScroll";
import { WordAnimation } from "@/components/ui/WordAnimation";

const Home = () => {
    const ref1 = useScroll();
    const ref2 = useScroll();
    const ref3 = useScroll();
    const ref4 = useScroll();
    const ref5 = useScroll();
    
    const stats = [
        {
            value: "10+",
            label: "Courses",
            icon: faBook,
            positionClasses: "bottom-20 left-32",
        },
        {
            value: "100+",
            label: "Partners",
            icon: faHandshake,
            positionClasses: "bottom-20 right-32",
        },
        {
            value: "12.800+",
            label: "Learners",
            icon: faUsers,
            positionClasses: "bottom-72 right-80 lg:right-52",
        },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div ref={ref1} className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center lg:justify-between items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold md:w-xl text-center mt-5">
                    <WordAnimation>
                        Speak the World and Elevate
                    </WordAnimation>
                    <br />
                    <WordAnimation className="text-blue-600">
                        Your Career
                    </WordAnimation>
                </h1>
                <ButtonLink className="fade-up transition-none!" href="/register">Get Started</ButtonLink>
                <Image src={'/assets/person.png'} alt="person" width={300} height={100} className="fade-up hidden lg:block" />
                <div className="fade-up rounded-full bg-blue-100 w-2xl h-168 absolute -bottom-5/12 -z-10 hidden lg:block"></div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="fade-up absolute left-52 bottom-12 md:top-40 animate-pulse" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto animate-[spin_20s_linear_infinite]" />

                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        value={stat.value}
                        icon={stat.icon}
                        label={stat.label}
                        className={`${stat.positionClasses} fade-up`}
                    />
                ))}
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
            
            {/* Testimonials */}
            <div ref={ref4} className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10 overflow-hidden">
                <div className="space-y-3 text-center w-full">
                    <p className="fade-down text-blue-600 font-semibold">Testimonials</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            See Why Learners Are Hooked on Skolah
                        </WordAnimation>
                    </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {TESTIMONIALS.map((item, index) => (
                        <div key={index} className="fade-up border border-slate-300 p-5 rounded-2xl flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-1 text-yellow-400">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <FontAwesomeIcon icon={faQuoteRight} className="text-blue-100 w-10! h-10!" />
                            </div>
                            <p className="text-slate-500 h-full">&quot;{item.quote}&quot;</p>
                            <div className="flex gap-2 items-center">
                                <Image width={48} height={48} src={item.avatar} alt="person" className="rounded-full border border-slate-300 object-cover aspect-square" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-blue-600">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Blog */}
            <div ref={ref5} className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10 overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-3 justify-between lg:items-center">
                    <div className="space-y-3 max-w-lg">
                        <p className="fade-down text-blue-600 font-semibold">Insight & Tips</p>
                        <h2 className="text-2xl md:text-4xl font-bold">
                            <WordAnimation>
                                Loved by Thousands of Language Learners
                            </WordAnimation>
                        </h2>
                    </div>
                    <p className="fade-up text-slate-500 md:text-lg max-w-lg">Discover practical learning strategies, cultural insights, and expert tips designed to help you speak with confidence.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                    {BLOG_POSTS.map((item, index) => (
                        <Link href={'/blog'} key={index} className="fade-up rounded-2xl w-full">
                            <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1 p-3! space-y-5">
                                <Image src={item.image} alt="image" width={300} height={300} className="rounded-xl w-full object-cover aspect-video" />
                                <div className="px-2 space-y-1">
                                    <p className="font-semibold text-lg">{item.title}</p>
                                    <p className="text-slate-500">{item.description}</p>
                                </div>
                                <div className="flex gap-2 items-center px-2">
                                    <Image src={item.imageProfile} alt="profile" width={150} height={150} className="w-12! h-12! border-2 border-slate-300 rounded-full object-cover aspect-square" />
                                    <div>
                                        <p className="font-semibold">{item.authorName}</p>
                                        <p className="text-slate-500">{item.date}</p>
                                    </div>
                                </div>
                            </BorderCard>
                        </Link>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;