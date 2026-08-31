'use client';
import { Navbar } from "@/components/layout/Navbar";
import { faChevronDown, faLanguage } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";
import { BorderCard } from "@/components/ui/BorderCard";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { scrollToSection } from "@/lib/scroll";
import { LANGUAGES } from "@/constants/languages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Popover } from "@/components/ui/PopOver";
import { useState } from "react";
import { CTASection } from "@/components/layout/CTA";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WordAnimation } from "@/components/ui/WordAnimation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CoursesPage = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <Navbar target={1} />

            {/* Hero Section */}
            <AnimatedSection className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center items-center gap-5">
                <div className="space-y-3 max-w-3xl text-center">
                    <p className="fade-down text-blue-600 font-semibold">Choose Your Journey</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                        <WordAnimation>
                            What Do You Want to Learn?
                        </WordAnimation>
                    </h1>
                    <p className="fade-up text-slate-500 md:text-lg">Pick a path, dive into interactive quests, and start building real-world fluency.</p>
                </div>
                <div className="flex gap-2 z-10">
                    <Button className="fade-up transition-none!" onClick={() => scrollToSection('explore')}>Explore Paths</Button>
                    <ButtonLink className="fade-up transition-none!" variant="secondary" href="/register">Get Started</ButtonLink>
                </div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="fade-up absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto rotate-12 animate-[spin_20s_linear_infinite]" />
                <FontAwesomeIcon icon={faLanguage} className="fade-up w-9! h-auto! p-5 bg-blue-600 text-neutral-50 rounded-2xl absolute bottom-28 right-72 md:top-72 lg:bottom-28 lg:top-auto md:right-60 rotate-12 shadow" />
            </AnimatedSection>
            
            {/* Main Section */}
            <AnimatedSection id="explore" className="w-11/12 md:w-fit mx-auto min-h-dvh py-20 flex flex-col justify-center items-center overflow-hidden">
                <div className="flex justify-between items-center w-full">
                    <h2 className="text-2xl font-bold">
                        <WordAnimation>
                            Courses for English Speakers
                        </WordAnimation>
                    </h2>
                    <div className="relative">
                        <button onClick={() => setOpen(!isOpen)} className="fade-down text-slate-500 flex gap-2 items-center cursor-pointer font-semibold">
                            <span>I speak English</span>
                            <FontAwesomeIcon icon={faChevronDown} className="w-4! h-4!" />
                        </button>
                        
                        {/* Window */}
                        {isOpen && 
                            <Popover align="right" width="w-72">
                                <div className="text-left h-96 overflow-y-auto space-y-1">
                                    {LANGUAGES.map((item, index) => (
                                        <button
                                            onClick={() => setOpen(false)}
                                            key={index}
                                            className="w-full text-left cursor-pointer p-2.5 rounded-xl hover:bg-slate-100 transition-colors"
                                        >
                                            {item.title}
                                        </button>
                                    ))}
                                </div>
                            </Popover>
                        }
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {LANGUAGES.map((item, index) => (
                        <Link href={'/login'} key={index} className="fade-up rounded-2xl">
                            <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1">
                                <Image src={item.image} alt="flag" width={120} height={120} className="border-2 border-slate-300 rounded-lg mb-2" />
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm">{item.description}</p>
                            </BorderCard>
                        </Link>
                    ))}
                </div>
            </AnimatedSection>

            {/* CTA */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </>
    );
}

export default CoursesPage;