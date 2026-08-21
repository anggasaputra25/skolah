'use client'
import Bottombar from "@/components/layout/Bottombar";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Popover } from "@/components/ui/PopOver";
import { LANGUAGES } from "@/constants/languages";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LanguagesPage = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="min-h-dvh py-20 max-w-5xl flex flex-col justify-center items-center mx-auto md:px-10 lg:px-0">
                <div className="flex justify-between items-center w-full gap-2 flex-col md:flex-row">
                    <h1 className="text-2xl font-bold">Courses for English Speakers</h1>
                    <div className="relative w-full md:w-fit px-4 md:px-0">
                        <button onClick={() => setOpen(!isOpen)} className="text-slate-500 flex gap-2 items-center cursor-pointer font-semibold">
                            <span>I speak English</span>
                            <FontAwesomeIcon icon={faChevronDown} className="w-4! h-4!" />
                        </button>
                        
                        {/* Window */}
                        {isOpen && 
                            <Popover align="left" width="w-72">
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
                <div className="mt-10 flex flex-wrap gap-3 justify-between px-3 md:px-0">
                    {LANGUAGES.map((item, index) => (
                        <Link href={'/learn'} key={index} className="rounded-2xl cursor-pointer w-40">
                            <BorderCard className="hover:bg-neutral-100 active:border-b-2 active:translate-y-1 text-left">
                                <Image src={item.image} alt="flag" width={120} height={120} className="border-2 border-slate-300 rounded-lg mb-2" />
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-sm">{item.description}</p>
                            </BorderCard>
                        </Link>
                    ))}
                </div>
            </div>
            <Bottombar target={1} />
        </div>

    )
}

export default LanguagesPage;