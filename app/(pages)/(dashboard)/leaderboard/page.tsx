import Bottombar from "@/components/layout/Bottombar";
import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { LEADERBOARD } from "@/constants/leaderboard";
import { faMedal, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const LeaderboardPage = () => {
    const targetPage = 4;
    return (
        <div className="flex mb-20 md:mb-0">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-5 rounded-2xl bg-slate-900 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faTrophy} className="w-10! h-10! text-white" />
                    <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center w-full">
                        <div>
                            <p className="text-slate-300 text-sm font-semibold">Seasonal League</p>
                            <h1 className="text-white font-bold text-xl">Diamond League</h1>
                        </div>
                        <p className="font-bold text-sm px-4 py-2 bg-neutral-50 rounded-lg text-blue-600 w-fit">Resets in 1d 12h</p>
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
                        <p className="font-bold truncate w-full">{LEADERBOARD[1].name}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4! h-4! text-blue-600" />
                            <span>{LEADERBOARD[1].score} XP</span>
                        </div>
                    </BorderCard>

                    {/* Rank 1 */}
                    <BorderCard className="flex flex-col items-center text-center p-4 bg-yellow-50 border-yellow-400 border-b-6">
                        <FontAwesomeIcon icon={faMedal} className="w-8! h-8! text-yellow-500 mb-1" />
                        <div className="relative mb-2">
                            <Image src={LEADERBOARD[0].avatar} alt="avatar" width={64} height={64} className="border-2 aspect-square object-cover border-yellow-400 rounded-full" />
                            <span className="absolute -bottom-2 -right-1 bg-yellow-500 text-white font-black text-xs px-2 py-0.5 rounded-full border border-white">1</span>
                        </div>
                        <p className="font-bold truncate w-full">{LEADERBOARD[0].name}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4! h-4! text-blue-600" />
                            <span>{LEADERBOARD[0].score} XP</span>
                        </div>
                    </BorderCard>

                    {/* Rank 3 */}
                    <BorderCard className="flex flex-col items-center text-center p-4 bg-slate-50 border-slate-300">
                        <div className="relative mb-2">
                            <Image src={LEADERBOARD[2].avatar} alt="avatar" width={56} height={56} className="border-2 aspect-square object-cover border-slate-300 rounded-full" />
                            <span className="absolute -bottom-2 -right-1 bg-amber-600 text-white font-black text-xs px-2 py-0.5 rounded-full border border-white">3</span>
                        </div>
                        <p className="font-bold truncate w-full">{LEADERBOARD[2].name}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm font-semibold mt-1">
                            <FontAwesomeIcon icon={faStar} className="w-4! h-4! text-blue-600" />
                            <span>{LEADERBOARD[2].score} XP</span>
                        </div>
                    </BorderCard>
                </div>

                {/* Leaderboard List */}
                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold">All Rankings</h2>

                    {LEADERBOARD.map((item) => (
                        <BorderCard
                            key={item.rank}
                            variant={item.isCurrentUser ? "primary" : "secondary"}
                            className={`flex justify-between items-center border-b-2! p-3! font-semibold text-slate-700 ${
                                item.isCurrentUser ? "" : "hover:bg-slate-50"
                            }`}
                        >
                            <div className="flex gap-3 items-center">
                                <p className={`text-lg font-bold w-8 text-center ${item.isCurrentUser ? "text-white" : ""}`}>
                                    #{item.rank}
                                </p>
                                <Image
                                    src={item.avatar}
                                    alt="avatar"
                                    width={40}
                                    height={40}
                                    className="w-10 h-10 border-2 aspect-square object-cover border-slate-300 rounded-full"
                                />
                                <p className={item.isCurrentUser ? "font-bold" : ""}>
                                    {item.name}
                                </p>
                            </div>

                            <div className="flex justify-center items-center gap-1.5">
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className={`w-5! h-5! ${item.isCurrentUser ? "text-white" : "text-blue-600"}`}
                                />
                                <p className={`font-bold ${item.isCurrentUser ? "text-white" : "text-blue-600"}`}>
                                    {item.score} XP
                                </p>
                            </div>
                        </BorderCard>
                    ))}
                </div>
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />

            {/* Bottombar */}
            <Bottombar target={targetPage} />
        </div>
    );
};

export default LeaderboardPage;