import { faBrain, faScaleBalanced, faScrollTorah, faTrophy, faUserGroup, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Bottombar = ({target = 0}: {target?: number}) => {
    return (
        <div className="py-6 px-4 border-t-2 bg-neutral-50 border-slate-300 text-slate-500 flex justify-between fixed z-40 bottom-0 w-full md:hidden">
            <Link href={'/learn'} className={`w-fit rounded-2xl ${target == 1 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faBrain} className="w-6! h-6!" />
            </Link>
            <Link href={'/quests'} className={`w-fit rounded-2xl ${target == 2 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faScrollTorah} className="w-6! h-6!" />
            </Link>
            <Link href={'/shop'} className={`w-fit rounded-2xl ${target == 3 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faScaleBalanced} className="w-6! h-6!" />
            </Link>
            <Link href={'/leaderboard'} className={`w-fit rounded-2xl ${target == 4 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faTrophy} className="w-6! h-6!" />
            </Link>
            <Link href={'/community'} className={`w-fit rounded-2xl ${target == 5 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faUserGroup} className="w-6! h-6!" />
            </Link>
            <Link href={'/profile'} className={`w-fit rounded-2xl ${target == 6 ? 'text-blue-600' : 'hover:bg-slate-100'}`}>
                <FontAwesomeIcon icon={faUserTie} className="w-6! h-6!" />
            </Link>
        </div>
    )
}

export default Bottombar;