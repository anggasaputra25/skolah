import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { LANGUAGES } from "@/constants/languages";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const LanguagesPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="mx-auto min-h-dvh py-20 flex flex-col justify-center items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Courses for English Speakers</h1>
                    <button className="text-slate-500 flex gap-2 items-center cursor-pointer font-semibold">
                        <span>I speak english</span>
                        <FontAwesomeIcon icon={faChevronDown} className="w-4! h-4!" />
                    </button>
                </div>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-8">
                    {LANGUAGES.map((item, index) => (
                        <Link href={'/learn'} key={index} className="rounded-2xl cursor-pointer">
                            <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1 text-left">
                                <Image src={item.image} alt="flag" width={120} height={120} className="border-2 border-slate-300 rounded-lg mb-2" />
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm">{item.description}</p>
                            </BorderCard>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LanguagesPage;