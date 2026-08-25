'use client'
import { CTASection } from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Video } from "@/components/ui/Video";
import { WordAnimation } from "@/components/ui/WordAnimation";
import { useScroll } from "@/hooks/useScroll";
import { scrollToSection } from "@/lib/scroll";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
    const ref1 = useScroll();
    const ref2 = useScroll();
    return (
        <>
            <Navbar target={3} />

            {/* Hero Section */}
            <div ref={ref1} className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center items-center gap-5">
                <div className="space-y-3 max-w-3xl text-center">
                    <p className="fade-down text-blue-600 font-semibold">Behind the Brand</p>
                    <h1 className="text-2xl md:text-4xl font-bold text-center">
                        <WordAnimation>
                            The Story Behind Skolah
                        </WordAnimation>
                    </h1>
                    <p className="fade-up text-slate-500 md:text-lg">See how we combined cognitive science, smart gamification, and social connection to create a language learning experience you&apos;ll actually stick with.</p>
                </div>
                <div className="flex gap-2">
                    <Button className="fade-up transition-none!" onClick={() => scrollToSection('explore')}>Our Story</Button>
                    <ButtonLink className="fade-up transition-none!" variant="secondary" href="/register">Get Started</ButtonLink>
                </div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="fade-up absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 md:top-auto md:bottom-72 lg:top-28 lg:bottom-auto rotate-12 animate-[spin_20s_linear_infinite]" />
                <FontAwesomeIcon icon={faUserGroup} className="fade-up w-9! h-auto! p-5 bg-blue-600 text-neutral-50 rounded-2xl absolute bottom-28 right-72 md:top-72 lg:bottom-28 lg:top-auto md:right-60 rotate-12 shadow" />
            </div>
            
            {/* Our Teams */}
            <div ref={ref2} id="explore" className="w-11/12 md:w-10/12 max-w-5xl mx-auto min-h-dvh mb-10 flex flex-col justify-center gap-10 overflow-hidden">
                <div className="space-y-3 text-center w-full">
                    <p className="fade-down text-blue-600 font-semibold">Our Team</p>
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            Meet the Mindset
                        </WordAnimation>
                    </h2>
                </div>
                <div className="flex gap-10 items-center flex-col md:flex-row">
                    <Video image="/assets/about/engineer.jpg" />
                    <div className="w-full space-y-2 over">
                        <p className="fade-up text-2xl font-bold">Engineering</p>
                        <p className="fade-up text-slate-500 text-lg">Engineering is our largest function at Skolah. They build, run, and maintain our product and features.</p>
                        <Link href={''} className="fade-up text-blue-600 font-semibold text-lg">Explore Engineering</Link>
                    </div>
                </div>
                <div className="flex gap-10 items-center flex-col-reverse md:flex-row">
                    <div className="w-full space-y-2 over">
                        <p className="fade-up text-2xl font-bold">Design</p>
                        <p className="fade-up text-slate-500 text-lg">Design combines product design, art, animation, brand, and experiential to bring delight to our product.</p>
                        <Link href={''} className="fade-up text-blue-600 font-semibold text-lg">Explore Design</Link>
                    </div>
                    <div className="rounded-2xl overflow-hidden w-full">
                        <Video image="/assets/about/design.jpg" />
                    </div>
                </div>
                <div className="flex gap-10 items-center flex-col md:flex-row">
                    <Video image="/assets/about/research.jpg" />
                    <div className="w-full space-y-2 over">
                        <p className="fade-up text-2xl font-bold">Research</p>
                        <p className="fade-up text-slate-500 text-lg">Research turns user insights into smarter learning experiences. They explore how people learn, test new ideas, and shape every feature we build.</p>
                        <Link href={''} className="fade-up text-blue-600 font-semibold text-lg">Explore Research</Link>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <CTASection />

            <Footer />
        </>
    )
}

export default AboutPage;