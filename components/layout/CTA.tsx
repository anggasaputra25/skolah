'use client'
import Image from "next/image"
import { ButtonLink } from "../ui/ButtonLink"
import { useScroll } from "@/hooks/useScroll";
import { WordAnimation } from "../ui/WordAnimation";

export const CTASection = () => {
    const ctaRef = useScroll();
    return (
        <div ref={ctaRef} className="w-11/12 md:w-10/12 mx-auto mb-10 overflow-hidden">
            <div className="fade-up flex flex-col-reverse lg:flex-row gap-10 bg-blue-600 text-neutral-50 p-10 pb-0 rounded-2xl items-center">
                <Image src={'/assets/screenshots/cta.jpg'} alt="cta" width={500} height={500} className="fade-up rounded-t-xl" />
                <div className="space-y-3 lg:pb-10">
                    <p className="fade-up text-slate-300">Join Skolah Today</p>
                    <h2 className="fade-up text-2xl md:text-4xl font-bold">
                        <WordAnimation>
                            How Many Achievements Can You Unlock?
                        </WordAnimation>
                    </h2>
                    <p className="fade-up md:text-lg">Challenge yourself daily, max out your rewards, and prove your language skills one milestone at a time.</p>
                    <ButtonLink href="/register" variant="secondary" className="fade-up transition-none!">Get Started</ButtonLink>
                </div>
            </div>
        </div>
    )
}