import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/layout/StatCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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
            value: "2.800+",
            label: "Users",
            icon: faUsers,
            positionClasses: "bottom-72 right-52",
        },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="pt-22 relative overflow-y-hidden min-h-dvh flex flex-col justify-between items-center">
                <h1 className="text-4xl font-bold w-xl text-center mt-5">Kuasai Bahasa Global untuk <span className="text-blue-600">Karier yang Lebih Pasti</span></h1>
                <ButtonLink href="">Get Started</ButtonLink>
                <Image src={'assets/person.svg'} alt="person" width={300} height={100} />
                <div className="rounded-full bg-blue-100 w-2xl h-168 absolute -bottom-5/12 -z-10"></div>

                <Image src={'assets/star1.svg'} alt="star" width={171} height={276} className="absolute left-52 top-40" />
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
        </>
    );
}
