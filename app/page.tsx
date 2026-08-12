import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { BorderCard } from "@/components/ui/BorderCard";

const Home = () => {
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
            positionClasses: "bottom-72 right-80 lg:right-52",
        },
    ];

    const features = [
        {
            title: "Reading Comprehension",
            description: "Adaptive reading exercises with real-time translation, automated grammar analysis, and contextual comprehension quizzes to strengthen your understanding."
        },
        {
            title: "Conversation Simulation",
            description: "AI-powered real-time conversation simulations designed to improve grammar, pronunciation, speaking fluency, and confidence in real-world situations."
        },
        {
            title: "Cross-Cultural Communication",
            description: "Explore cultural nuances, local customs, and authentic idiomatic expressions from native speakers to communicate naturally across cultures."
        },
        {
            title: "Gamification System",
            description: "Make learning feel like a game with XP points, progression levels, achievement badges, and weekly leaderboards that keep you motivated."
        }
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center lg:justify-between items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold md:w-xl text-center mt-5">Speak the World and Elevate <span className="text-blue-600">Your Career</span></h1>
                <ButtonLink href="/register">Get Started</ButtonLink>
                <Image src={'/assets/person.png'} alt="person" width={300} height={100} className="hidden lg:block" />
                <div className="rounded-full bg-blue-100 w-2xl h-168 absolute -bottom-5/12 -z-10 hidden lg:block"></div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto rotate-12" />

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
            {/* ### 1. Reading Comprehension
                Adaptive reading exercises with real-time translation, automated grammar analysis, and contextual comprehension quizzes to strengthen your understanding

                ### 2. Conversation Simulation
                AI-powered real-time conversation simulations designed to improve grammar, pronunciation, speaking fluency, and confidence in real-world situations

                ### 3. Cross-Cultural Communication
                Explore cultural nuances, local customs, and authentic idiomatic expressions from native speakers to communicate naturally across cultures

                ### 4. Gamification System
                Make learning feel like a game with XP points, progression levels, achievement badges, and weekly leaderboards that keep you motivated
            */}
            <div className="w-11/12 md:w-10/12 mx-auto min-h-dvh flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold">Features</h2>
                <div className="mt-5 grid grid-cols-4 gap-5">
                    {features.map((item, index) => (
                        <BorderCard key={index} className="hover:border-b-2 hover:translate-y-1">
                            <p className="mb-2 font-semibold">{item.title}</p>
                            <p className="text-neutral-500">{item.description}</p>
                        </BorderCard>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Home;