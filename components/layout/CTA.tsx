import Image from "next/image"
import { ButtonLink } from "../ui/ButtonLink"

export const CTASection = () => {
    return (
        <div className="w-11/12 md:w-10/12 mx-auto mb-10 flex flex-col-reverse lg:flex-row gap-10 bg-blue-600 text-neutral-50 p-10 pb-0 rounded-2xl items-center">
            <Image src={'/assets/cta.jpg'} alt="cta" width={500} height={500} className="rounded-t-xl" />
            <div className="space-y-3 lg:pb-10">
                <p className="text-slate-300">Join Skolah Today</p>
                <h2 className="text-2xl md:text-4xl font-bold">How Many Achievements Can You Unlock?</h2>
                <p className="md:text-lg">Challenge yourself daily, max out your rewards, and prove your language skills one milestone at a time.</p>
                <ButtonLink href="/register" variant="secondary">Get Started</ButtonLink>
            </div>
        </div>
    )
}