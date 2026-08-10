import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBook, faHandshake, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
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

                <div className="bg-blue-100 absolute bottom-20 left-32 p-5 rounded-lg min-w-36">
                    <p className="font-semibold text-xl">30+</p>
                    <p>Courses</p>
                    <div className="absolute top-0 right-0 p-2 bg-slate-50 rounded-bl-lg">
                        <FontAwesomeIcon icon={faBook} className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-blue-100 absolute bottom-20 right-32 p-5 rounded-lg min-w-36">
                    <p className="font-semibold text-xl">100+</p>
                    <p>Partners</p>
                    <div className="absolute top-0 right-0 p-2 bg-slate-50 rounded-bl-lg">
                        <FontAwesomeIcon icon={faHandshake} className="w-5 h-5" />
                    </div>
                </div>
                <div className="bg-blue-100 absolute bottom-72 right-52 p-5 rounded-lg min-w-36">
                    <p className="font-semibold text-xl">2.800+</p>
                    <p>Users</p>
                    <div className="absolute top-0 right-0 p-2 bg-slate-50 rounded-bl-lg">
                        <FontAwesomeIcon icon={faUsers} className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </>
    );
}
