import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { BLOG_POSTS } from "@/constants/blog";
import Link from "next/link";
import { BorderCard } from "@/components/ui/BorderCard";

const Blog = () => {
    return (
        <>
            <Navbar />

            <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto pt-28 pb-16 min-h-dvh flex flex-col gap-8">
                {/* Article Header */}
                <div className="space-y-4">
                    <p className="text-blue-600 font-semibold">Insight & Tips</p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        How Gamification Rewires Your Brain to Learn Languages Faster
                    </h1>
                    <p className="text-slate-500 text-lg md:text-xl">
                        Discover the science behind streaks, points, and daily quests, and how turning study time into play accelerates real fluency.
                    </p>
                    
                    {/* Author Meta */}
                    <div className="flex items-center justify-between pt-4">
                        <div className="flex gap-3 items-center">
                            <Image 
                                src="/assets/person/person-1.jpg" 
                                alt="Alex Rivera" 
                                width={150} 
                                height={150} 
                                className="w-12 h-12 border-2 border-slate-300 rounded-full object-cover aspect-square" 
                            />
                            <div>
                                <p className="font-semibold text-slate-800">Alex Rivera</p>
                                <p className="text-sm text-slate-500">Aug 18, 2026 • 5 min read</p>
                            </div>
                        </div>
                        <div className="flex gap-2 text-slate-400">
                            <button className="cursor-pointer p-2 hover:text-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faShareNodes} />
                            </button>
                            <button className="cursor-pointer p-2 hover:text-blue-600 transition-colors">
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Hero Image */}
                <Image 
                    src="/assets/blog/blog-1.jpg" 
                    alt="How Gamification Rewires Your Brain" 
                    width={1000} 
                    height={600} 
                    className="rounded-xl w-full object-cover aspect-video" 
                />

                {/* Article Body Content */}
                <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                    <p>
                        We&apos;ve all been there: opening a language learning app with high hopes, only to drop it a week later because it feels like a chore. The problem isn&apos;t your willpower or capacity to learn—it&apos;s the method. Modern cognitive science shows that traditional rote memorization lacks the feedback loops required to keep our brains actively engaged over extended periods.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 pt-4">
                        The Dopamine Loop of Daily Streaks
                    </h2>
                    
                    <p>
                        When you complete a daily quest or maintain a 10-day streak, your brain releases dopamine—a neurotransmitter responsible for motivation and pleasure. By pairing micro-learning tasks (5 to 10 minutes) with instant visual rewards, gamification creates a positive neural feedback loop. Instead of fighting resistance every time you sit down to study, your brain begins craving the micro-achievements.
                    </p>

                    <div className="p-6 my-6 bg-blue-50/50 border-l-3 border-l-blue-600">
                        <p className="font-semibold text-slate-800 italic text-lg md:text-xl">
                            &quot;When learning feels like playing, progress becomes an effortless side effect rather than a stressful goal.&quot;
                        </p>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 pt-4">
                        From Short-Term Memory to Long-Term Fluency
                    </h2>

                    <p>
                        Spaced repetition combined with gamified mechanics forces the brain to retrieve information just as it&apos;s on the verge of forgetting. Earning coins, unlocking shop upgrades, and competing on leaderboards aren&apos;t just superficial gimmicks; they are psychological hooks that ensure consistent daily exposure—which is the single most critical factor in achieving language fluency.
                    </p>
                </div>
            </div>

            {/* Other Article */}
            <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10">
                <div className="flex flex-col lg:flex-row gap-3 justify-between lg:items-center">
                    <div className="space-y-3 max-w-lg">
                        <p className="text-blue-600 font-semibold">Insight & Tips</p>
                        <h2 className="text-2xl md:text-4xl font-bold">Other Article for You</h2>
                    </div>
                    <p className="text-slate-500 md:text-lg max-w-lg">Discover practical learning strategies, cultural insights, and expert tips designed to help you speak with confidence.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-2">
                    {BLOG_POSTS.map((item, index) => (
                        <Link href={'/blog'} key={index} className="rounded-2xl w-full">
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

            <Footer />
        </>
    );
};

export default Blog;