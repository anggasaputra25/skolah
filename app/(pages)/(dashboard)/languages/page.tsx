'use client'
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

            <div className="mx-auto min-h-dvh py-20 flex flex-col justify-center items-center">
                <div className="flex justify-between items-center w-full">
                    <h1 className="text-2xl font-bold">Courses for English Speakers</h1>
                    <div className="relative">
                        <button onClick={() => setOpen(!isOpen)} className="text-slate-500 flex gap-2 items-center cursor-pointer font-semibold">
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