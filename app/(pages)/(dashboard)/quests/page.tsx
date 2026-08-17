import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { LEADERBOARD } from "@/constants/leaderboard";
import { faBolt, faCheckCircle, faEllipsis, faFire, faShield, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const QuestPage = () => {
    return (
        <div className="flex">
            {/* Sidebar*/}
            <Sidebar target={2} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-6 rounded-2xl bg-yellow-500 text-white flex justify-between items-center sticky top-5 z-30">
                    <div>
                        <p className="text-yellow-100 text-sm font-semibold uppercase tracking-wider">Daily & Weekly</p>
                        <h1 className="font-bold text-2xl">Quests & Challenges</h1>
                    </div>
                    <div className="bg-yellow-600 px-4 py-2 rounded-xl text-sm font-bold border-2 border-yellow-700">
                        Resets in 12h 45m
                    </div>
                </div>

                {/* Quests List Container */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-slate-700">Daily Quests</h2>

                    {/* Quest Item 1: Ready to Claim */}
                    <BorderCard className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faBolt} className="w-10 h-10 text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
                            <div className="space-y-1">
                                <p className="font-bold text-slate-700">Earn 10 XP</p>
                                <div className="w-48 bg-slate-200 rounded-full h-3 overflow-hidden">
                                    <div className="bg-yellow-500 h-full w-full"></div>
                                </div>
                                <p className="text-xs text-slate-400 font-semibold">10 / 10 XP</p>
                            </div>
                        </div>
                        <Button variant="warning" size="md">Claim</Button>
                    </BorderCard>

                    {/* Quest Item 2: In Progress */}
                    <BorderCard className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faFire} className="w-10 h-10 text-orange-500 filter-[drop-shadow(0px_2px_0px_#c2410c)]" />
                            <div className="space-y-1">
                                <p className="font-bold text-slate-700">Complete 3 Lessons</p>
                                <div className="w-48 bg-slate-200 rounded-full h-3 overflow-hidden">
                                    <div className="bg-orange-500 h-full w-2/3"></div>
                                </div>
                                <p className="text-xs text-slate-400 font-semibold">2 / 3 Completed</p>
                            </div>
                        </div>
                        <Button variant="secondary" size="md" disabled className="opacity-60 cursor-not-allowed">
                            In Progress
                        </Button>
                    </BorderCard>

                    {/* Quest Item 3: Completed */}
                    <BorderCard className="flex items-center justify-between gap-4 bg-slate-50 border-slate-200">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faCheckCircle} className="w-10 h-10 text-green-500" />
                            <div className="space-y-1">
                                <p className="font-bold text-slate-400 line-through">Score 90% or higher in 1 lesson</p>
                                <p className="text-xs text-green-600 font-bold">Reward Claimed +20 XP</p>
                            </div>
                        </div>
                    </BorderCard>
                </div>

                {/* Achievement / Special Quests Section */}
                <div className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold text-slate-700">Special Quests</h2>

                    <BorderCard className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faShield} className="w-10 h-10 text-violet-600 filter-[drop-shadow(0px_2px_0px_#4c1d95)]" />
                            <div className="space-y-1">
                                <p className="font-bold text-slate-700">Defeat 1 Boss Fight</p>
                                <div className="w-48 bg-slate-200 rounded-full h-3 overflow-hidden">
                                    <div className="bg-violet-600 h-full w-0"></div>
                                </div>
                                <p className="text-xs text-slate-400 font-semibold">0 / 1 Defeated</p>
                            </div>
                        </div>
                        <Button variant="primary" size="md">Start</Button>
                    </BorderCard>
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

                    {/* Seasonal Leaderboard */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Seasonal Leaderboard</p>
                            <Link href={'/leaderboard'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        {LEADERBOARD.slice(10, 14).map((user, index) => (
                            <BorderCard
                                key={index}
                                variant={user.isCurrentUser ? "primary" : undefined}
                                className="flex justify-between items-center border-b-2! p-3! font-semibold"
                                >
                                <div className="flex gap-1 items-center">
                                    <p className="text-xl me-1">#{user.rank}</p>
                                    <Image
                                        src={user.avatar}
                                        alt={`${user.name} flag`}
                                        width={40}
                                        height={40}
                                        className="border-2 aspect-square border-slate-300 rounded-full"
                                    />
                                    <p>{user.name}</p>
                                </div>
                                <div className="flex justify-center gap-1">
                                    <FontAwesomeIcon
                                    icon={faStar}
                                    className={`w-6! h-6! ${!user.isCurrentUser ? "text-blue-600" : ""}`}
                                    />
                                    <p className={!user.isCurrentUser ? "text-blue-600 font-bold" : "font-bold"}>
                                        {user.score}
                                    </p>
                                </div>
                            </BorderCard>
                        ))}
                    </BorderCard>
                </div>
            </div>
        </div>
    );
};

export default QuestPage;