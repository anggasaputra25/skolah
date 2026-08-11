import { Navbar } from "@/components/layout/Navbar";
import { StatCard } from "@/components/ui/StatCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Footer from "@/components/layout/Footer";

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
            positionClasses: "bottom-72 right-52",
        },
    ];

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div className="lg:pt-22 relative overflow-hidden min-h-dvh flex flex-col justify-center lg:justify-between items-center gap-5">
                <h1 className="text-2xl md:text-4xl font-bold md:w-xl text-center mt-5">Learn Beyond Words and <span className="text-blue-600">Connect with the World</span></h1>
                <ButtonLink href="">Explore Courses</ButtonLink>
                <Image src={'/assets/person3.png'} alt="person" width={300} height={100} className="hidden lg:block" />
                <div className="rounded-full bg-blue-100 w-2xl h-168 absolute -bottom-5/12 -z-10 hidden lg:block"></div>

                <Image src={'/assets/star1.svg'} alt="star" width={171} height={276} className="absolute left-52 bottom-12 md:top-40" />
                <Image src={'/assets/star2.svg'} alt="star" width={150} height={148} className="absolute right-32 top-28 rotate-12" />

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
            
            {/*  */}

            {/* Footer */}
            <Footer />
        </>
    );
}

export default Courses;