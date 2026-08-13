'use client';
import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { BorderCard } from "@/components/ui/BorderCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";

const Courses = () => {
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

    const languages = [
        {
            image: "/assets/flags/english.jpeg",
            title: "English",
            description: "8.6M Learners"
        },
        {
            image: "/assets/flags/indonesia.jpeg",
            title: "Indonesian",
            description: "8.2M Learners"
        },
        {
            image: "/assets/flags/french.jpeg",
            title: "French",
            description: "7.3M Learners"
        },
        {
            image: "/assets/flags/german.jpeg",
            title: "German",
            description: "6.2M Learners"
        },
        {
            image: "/assets/flags/japan.jpeg",
            title: "Japanese",
            description: "6.1M Learners"
        },
        {
            image: "/assets/flags/korea.jpeg",
            title: "Korean",
            description: "5.5M Learners"
        },
        {
            image: "/assets/flags/spain.jpeg",
            title: "Spanish",
            description: "5.2M Learners"
        },
        {
            image: "/assets/flags/india.jpeg",
            title: "Hindi",
            description: "5.1M Learners"
        },
        {
            image: "/assets/flags/brazil.jpeg",
            title: "Portuguese",
            description: "4.9M Learners"
        },
        {
            image: "/assets/flags/russia.jpeg",
            title: "Russian",
            description: "4.7M Learners"
        },
        {
            image: "/assets/flags/china.jpeg",
            title: "Chinese",
            description: "4.6M Learners"
        },
        {
            image: "/assets/flags/italy.jpeg",
            title: "Italian",
            description: "4.2M Learners"
        },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center lg:justify-between items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold md:w-xl text-center mt-5">Learn Beyond Words and <span className="text-blue-600">Connect with the World</span></h1>
                <Button onClick={() => scrollToSection('explore')}>Explore Courses</Button>
                <Image src={'/assets/person2.png'} alt="person" width={300} height={100} className="hidden lg:block" />
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
            
            {/* Main Section */}
            <div id="explore" className="w-11/12 md:w-10/12 mx-auto min-h-dvh py-20 flex flex-col justify-center items-center">
                <h2 className="text-2xl font-semibold text-center">Courses for English Speakers</h2>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {languages.map((item, index) => (
                        <Link href={'/login'} key={index}>
                            <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1">
                                <Image src={item.image} alt="flag" width={120} height={120} className="border-2 border-slate-300 rounded-lg mb-2" />
                                <p className="font-semibold">{item.title}</p>
                                <p>{item.description}</p>
                            </BorderCard>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Courses;