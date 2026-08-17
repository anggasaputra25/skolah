import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { LEADERBOARD } from "@/constants/leaderboard";
import { faBolt, faEllipsis, faMedal, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const LeaderboardPage = () => {
    return (
        <div className="flex">
            {/* Sidebar dengan target 4 untuk highlight Leaderboard */}
            <Sidebar target={4} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-6 rounded-2xl bg-amber-500 text-white flex justify-between items-center sticky top-5 z-30">
                    <div className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faTrophy} className="w-10 h-10 text-yellow-200" />
                        <div>
                            <p className="text-amber-100 text-sm font-semibold uppercase tracking-wider">Weekly League</p>
                            <h1 className="font-bold text-2xl">Bronze League</h1>
                        </div>
                    </div>
                </div>

                {/* Top 3 Podiums Showcase */}
                <div className="grid grid-cols-3 gap-4 pt-2 items-end">
                    {/* Rank 2 */}
                    <BorderCard className="flex flex-col items-center text-center p-4 bg-slate-50 border-slate-300">
                        <div className="relative mb-2">
                            <Image src={LEADERBOARD[1].avatar} alt="avatar" width={56} height={56} className="border-2 aspect-square object-cover border-slate-300 rounded-full" />
                            <span className="absolute -bottom-2 -right-1 bg-slate-400 text-white font-black text-xs px-2 py-0.5 rounded-full border border-white">2</span>
                        </div>
                        <p className="font-bold text-slate-700 truncate w-full">{LEADERBOARD[1].name}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-blue-600" />
                            <span>{LEADERBOARD[1].score} XP</span>
                        </div>
                    </BorderCard>

                    {/* Rank 1 */}
                    <BorderCard className="flex flex-col items-center text-center p-4 bg-yellow-50 border-yellow-400 border-b-6">
                        <FontAwesomeIcon icon={faMedal} className="w-8 h-8 text-yellow-500 mb-1" />
                        <div className="relative mb-2">
                            <Image src={LEADERBOARD[0].avatar} alt="avatar" width={64} height={64} className="border-2 aspect-square object-cover border-yellow-400 rounded-full" />
                            <span className="absolute -bottom-2 -right-1 bg-yellow-500 text-white font-black text-xs px-2 py-0.5 rounded-full border border-white">1</span>
                        </div>
                        <p className="font-bold text-slate-800 truncate w-full">{LEADERBOARD[0].name}</p>
                        <div className="flex items-center gap-1 text-yellow-600 text-sm font-bold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-yellow-500" />
                            <span>{LEADERBOARD[0].score} XP</span>
                        </div>
                    </BorderCard>

                    {/* Rank 3 */}
                    <BorderCard className="flex flex-col items-center text-center p-4 bg-amber-50 border-amber-300">
                        <div className="relative mb-2">
                            <Image src={LEADERBOARD[2].avatar} alt="avatar" width={56} height={56} className="border-2 aspect-square object-cover border-amber-300 rounded-full" />
                            <span className="absolute -bottom-2 -right-1 bg-amber-600 text-white font-black text-xs px-2 py-0.5 rounded-full border border-white">3</span>
                        </div>
                        <p className="font-bold text-slate-700 truncate w-full">{LEADERBOARD[2].name}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4 h-4 text-amber-600" />
                            <span>{LEADERBOARD[2].score} XP</span>
                        </div>
                    </BorderCard>
                </div>

                {/* Leaderboard List */}
                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold text-slate-700">All Rankings</h2>

                    {LEADERBOARD.map((item) => (
                        <BorderCard
                            key={item.rank}
                            variant={item.isCurrentUser ? "primary" : "secondary"}
                            className={`flex justify-between items-center border-b-2! p-3! font-semibold ${
                                item.isCurrentUser ? "" : "hover:bg-slate-50"
                            }`}
                        >
                            <div className="flex gap-3 items-center">
                                <p className={`text-lg font-bold w-8 text-center ${item.isCurrentUser ? "text-white" : "text-slate-500"}`}>
                                    #{item.rank}
                                </p>
                                <Image
                                    src={item.avatar}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 border-2 aspect-square object-cover border-slate-300 rounded-full"
                                />
                                <p className={item.isCurrentUser ? "text-white font-extrabold" : "text-slate-700"}>
                                    {item.name}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-1.5">
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={`w-5 h-5 ${item.isCurrentUser ? "text-white" : "text-blue-600"}`}
                                />
                                <p className={`font-bold ${item.isCurrentUser ? "text-white" : "text-blue-600"}`}>
                                    {item.score} XP
                                </p>
                            </div>
                        </BorderCard>
                    ))}
                </div>
            </div>

            {/* Right Sidebar Panel */}
            <div className="w-3xl">
                <div className="p-5 space-y-5 sticky top-0">
                    {/* Languages Selection */}
                    <div className="flex items-center justify-between sticky">
                        <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/english.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/french.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/german.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Link href={'/languages'} className="border-2 aspect-2/1.5 border-slate-300 rounded-lg w-16 h-auto flex justify-center items-center">
                            <FontAwesomeIcon icon={faEllipsis} className="w-8 h-8 text-slate-500" />
                        </Link>
                    </div>

                    {/* Level Progress */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Point Experience</p>
                            <Link href={'/profile'} className="text-blue-600 font-bold text-sm">View Detail</Link>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faStar} className="w-12! h-12! text-blue-600 filter-[drop-shadow(0px_2px_0px_#1e3a8a)_drop-shadow(0px_1px_0px_#1e40af)]" />
                            <div className="space-y-1 w-full font-semibold">
                                <p>Level 3</p>
                                <div className="relative w-full bg-slate-300 rounded-full">
                                    <div className="absolute bg-blue-600 h-full rounded-full w-3/5 border-2 border-b-4 border-blue-700"></div>
                                    <p className="text-white z-10 relative text-center p-2 text-sm">40 / 60</p>
                                </div>
                            </div>
                        </div>
                    </BorderCard>

                    {/* Daily Quests Widget */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Daily Quests</p>
                            <Link href={'/quests'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        <div className="flex gap-5 items-center">
                            <FontAwesomeIcon icon={faBolt} className="w-12! h-12! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)_drop-shadow(0px_1px_0px_#b45309)]" />
                            <div className="space-y-1 w-full font-semibold">
                                <p>Earn 10 XP</p>
                                <Button variant="warning" size="sm" className="w-full">Claim</Button>
                            </div>
                        </div>
                    </BorderCard>
                </div>
            </div>
        </div>
    );
};

export default LeaderboardPage;