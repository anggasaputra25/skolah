import Link from "next/link"
import { ButtonLink } from "../ui/ButtonLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAsia } from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
    return (
        <nav className="py-5 fixed w-full bg-neutral-50 z-10">
            <div className="w-11/12 m-auto flex justify-between items-center">
                <Link href={'/'} className="font-semibold text-2xl flex items-center gap-2 text-blue-600 w-36.75">
                    <FontAwesomeIcon icon={faEarthAsia} className="w-6 h-6" />
                    <p>Skolah</p>
                </Link>
                <div className="flex gap-4">
                    <Link className="text-slate-500 hover:text-neutral-900" href={''}>Courses</Link>
                    <Link className="text-slate-500 hover:text-neutral-900" href={''}>Method</Link>
                    <Link className="text-slate-500 hover:text-neutral-900" href={''}>About</Link>
                </div>
                <ButtonLink href="">Get Started</ButtonLink>
            </div>
        </nav>
    )
}