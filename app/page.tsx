import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

export default function Home() {
    const stats = [
        {
            value: "30+",
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
            positionClasses: "bottom-72 right-52",
        },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center lg:justify-between items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold md:w-xl text-center mt-5">Speak the World and Elevate <span className="text-blue-600">Your Career</span></h1>
                <ButtonLink href="">Get Started</ButtonLink>
                <Image src={'assets/person.svg'} alt="person" width={300} height={100} className="hidden lg:block" />
                <div className="rounded-full bg-blue-100 w-2xl h-168 absolute -bottom-5/12 -z-10 hidden lg:block"></div>

                <Image src={'assets/star1.svg'} alt="star" width={171} height={276} className="absolute left-52 bottom-12 md:top-40" />
                <Image src={'assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 rotate-12" />

                {stats.map((stat, index) => (
                    <StatCard
                        key={index}
                        value={stat.value}
                        icon={stat.icon}
                        label={stat.label}
                        positionClasses={stat.positionClasses}
                    />
                ))}
            </div>

            {/* Features Section */}
            <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">Features</h2>
                <div className="flex gap-5 mt-5">
                    <div className="p-5 rounded-2xl relative tracking-wider text-sm border-b-4 hover:border-b-0 hover:translate-y-1 transition-all duration-75 ease-in-out bg-slate-100 border-slate-300">
                        <p className="mb-2 font-semibold">Reading Comprehension</p>
                        <p className="text-neutral-500">Adaptive reading exercises with real-time translation, automated grammar analysis, and contextual comprehension quizzes to strengthen your understanding.</p>
                    </div>
                    <div className="p-5 rounded-2xl relative tracking-wider text-sm border-b-4 hover:border-b-0 hover:translate-y-1 transition-all duration-75 ease-in-out bg-slate-100 border-slate-300">
                        <p className="mb-2 font-semibold">Conversation Simulation</p>
                        <p className="text-neutral-500">AI-powered real-time conversation simulations designed to improve grammar, pronunciation, speaking fluency, and confidence in real-world situations.</p>
                    </div>
                    <div className="p-5 rounded-2xl relative tracking-wider text-sm border-b-4 hover:border-b-0 hover:translate-y-1 transition-all duration-75 ease-in-out bg-slate-100 border-slate-300">
                        <p className="mb-2 font-semibold">Cross-Cultural Communication</p>
                        <p className="text-neutral-500">Explore cultural nuances, local customs, and authentic idiomatic expressions from native speakers to communicate naturally across cultures.</p>
                    </div>
                    <div className="p-5 rounded-2xl relative tracking-wider text-sm border-b-4 hover:border-b-0 hover:translate-y-1 transition-all duration-75 ease-in-out bg-slate-100 border-slate-300">
                        <p className="mb-2 font-semibold">Gamification System</p>
                        <p className="text-neutral-500">Make learning feel like a game with XP points, progression levels, achievement badges, and weekly leaderboards that keep you motivated.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}
