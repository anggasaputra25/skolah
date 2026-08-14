import { faBrain, faEarthAsia, faScaleBalanced, faScroll, faTrophy, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Sidebar = ({target = 0}: {target?: number}) => {
    return (
        <div className="min-h-dvh border-r-2 border-slate-300 w-fit min-w-72">
            <div className="p-8 sticky top-0">
                <p className="font-bold text-2xl flex items-center gap-2 text-blue-600">
                    <FontAwesomeIcon icon={faEarthAsia} className="w-6 h-6" />
                    <span>Skolah</span>
                </p>
                <div className="space-y-2 mt-5 text-slate-500">
                    <Link href={'/Learn'} className={`w-full rounded-2xl px-4 py-2 flex items-center gap-2 ${target == 1 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faBrain} className="w-4 h-4" />
                        <span>Learn</span>
                    </Link>
                    <Link href={'/Learn'} className={`w-full rounded-2xl px-4 py-2 flex items-center gap-2 ${target == 2 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faScroll} className="w-4 h-4" />
                        <span>Quest</span>
                    </Link>
                    <Link href={'/Learn'} className={`w-full rounded-2xl px-4 py-2 flex items-center gap-2 ${target == 3 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faScaleBalanced} className="w-4 h-4" />
                        <span>Shop</span>
                    </Link>
                    <Link href={'/Learn'} className={`w-full rounded-2xl px-4 py-2 flex items-center gap-2 ${target == 4 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faTrophy} className="w-4 h-4" />
                        <span>Leaderboards</span>
                    </Link>
                    <Link href={'/Learn'} className={`w-full rounded-2xl px-4 py-2 flex items-center gap-2 ${target == 5 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faUserTie} className="w-4 h-4" />
                        <span>Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;