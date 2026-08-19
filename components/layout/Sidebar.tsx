import { faBrain, faEarthAsia, faScaleBalanced, faScrollTorah, faTrophy, faUserGroup, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Sidebar = ({target = 0}: {target?: number}) => {
    return (
        <div className="min-h-dvh border-r-2 border-slate-300 w-fit lg:min-w-72">
            <div className="p-8 sticky top-0">
                <p className="font-bold text-2xl flex items-center justify-center lg:justify-start gap-2 text-blue-600">
                    <FontAwesomeIcon icon={faEarthAsia} className="w-8! h-8!" />
                    <span className="hidden lg:block">Skolah</span>
                </p>
                <div className="space-y-2 mt-5 text-slate-500">
                    <Link href={'/learn'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 1 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faBrain} className="w-6! h-6!" />
                        <span className="hidden lg:block">Learn</span>
                    </Link>
                    <Link href={'/quests'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 2 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faScrollTorah} className="w-6! h-6!" />
                        <span className="hidden lg:block">Quests</span>
                    </Link>
                    <Link href={'/shop'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 3 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faScaleBalanced} className="w-6! h-6!" />
                        <span className="hidden lg:block">Shop</span>
                    </Link>
                    <Link href={'/leaderboard'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 4 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faTrophy} className="w-6! h-6!" />
                        <span className="hidden lg:block">Leaderboard</span>
                    </Link>
                    <Link href={'/community'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 5 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faUserGroup} className="w-6! h-6!" />
                        <span className="hidden lg:block">Community</span>
                    </Link>
                    <Link href={'/profile'} className={`w-fit lg:w-full rounded-2xl p-4 lg:px-4 lg:py-2 flex items-center gap-2 ${target == 6 ? 'border-2 border-blue-300 bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`}>
                        <FontAwesomeIcon icon={faUserTie} className="w-6! h-6!" />
                        <span className="hidden lg:block">Profile</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;