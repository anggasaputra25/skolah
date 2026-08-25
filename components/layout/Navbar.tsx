"use client"

import { useState } from "react"
import Link from "next/link"
import { ButtonLink } from "../ui/ButtonLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia, faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

export const Navbar = ({target = 0}: {target?: number}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className="py-5 fixed w-full bg-neutral-50 z-20">
                <div className="w-11/12 md:w-10/12 m-auto flex justify-between items-center">
                    <Link href={'/'} className="font-semibold text-2xl flex items-center gap-2 text-blue-600 w-36.75">
                        <FontAwesomeIcon icon={faEarthAsia} className="w-6! h-6!" />
                        <span>Skolah</span>
                    </Link>

                    <div className="hidden md:flex gap-4">
                        <Link className={`${target == 1 ? 'text-neutral-900' : 'text-slate-500 hover:text-neutral-900'}`} href={'/courses'}>Courses</Link>
                        <Link className={`${target == 2 ? 'text-neutral-900' : 'text-slate-500 hover:text-neutral-900'}`} href={'/method'}>Method</Link>
                        <Link className={`${target == 3 ? 'text-neutral-900' : 'text-slate-500 hover:text-neutral-900'}`} href={'/about'}>About</Link>
                    </div>

                    <div className="hidden md:block">
                        <ButtonLink href="/register">Get Started</ButtonLink>
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="block md:hidden text-slate-700 hover:text-neutral-900 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="w-6! h-6!" />
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden w-full fixed bg-neutral-50 px-6 py-4 flex flex-col gap-4 transition-transform z-10 pt-[71.99px] ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
                <Link 
                    className="text-slate-500 hover:text-neutral-900" 
                    href={'/courses'}
                    onClick={() => setIsOpen(false)}
                >
                    Courses
                </Link>
                <Link 
                    className="text-slate-500 hover:text-neutral-900" 
                    href={'/method'}
                    onClick={() => setIsOpen(false)}
                >
                    Method
                </Link>
                <Link 
                    className="text-slate-500 hover:text-neutral-900" 
                    href={'/about'}
                    onClick={() => setIsOpen(false)}
                >
                    About
                </Link>
                <div className="pt-2">
                    <ButtonLink href="/register" className="w-full">Get Started</ButtonLink>
                </div>
            </div>
        </>
    )
}