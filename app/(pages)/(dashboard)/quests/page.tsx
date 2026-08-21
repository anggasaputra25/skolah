import Bottombar from "@/components/layout/Bottombar";
import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { faCheckCircle, faScrollTorah } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const QuestPage = () => {
    const targetPage = 2;
    return (
        <div className="flex">
            {/* Sidebar*/}
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Section Banner */}
                <div className="shadow p-5 rounded-2xl bg-slate-900 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faScrollTorah} className="w-10! h-10! text-white" />
                    <div>
                        <p className="text-slate-300 text-sm font-semibold">Earn More Coins</p>
                        <h1 className="text-white font-bold text-xl">Quests</h1>
                    </div>
                </div>

                {/* Quests List Container */}
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Daily Quests</h2>
                        <p className="text-slate-500 text-sm font-bold">Resets in 12h 45m</p>
                    </div>

                    {/* Quest Item 1: Ready to Claim */}
                    <BorderCard className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faScrollTorah} className="w-10! h-10! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
                            <div className="space-y-1">
                                <p className="font-semibold">Earn 10 XP</p>
                                <p className="text-sm text-slate-500">10 / 10 XP</p>
                            </div>
                        </div>
                        <Button variant="warning" size="md">Claim</Button>
                    </BorderCard>

                    {/* Quest Item 2: Completed */}
                    <BorderCard className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-10! h-10! text-green-500" />
                        <div className="space-y-1">
                            <p className="font-semibold text-slate-500 line-through">Completed 3 lesson</p>
                            <p className="text-sm text-green-600 font-bold">Reward Claimed +20 Coins</p>
                        </div>
                    </BorderCard>

                    {/* Quest Item 3: Completed */}
                    <BorderCard className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faCheckCircle} className="w-10! h-10! text-green-500" />
                        <div className="space-y-1">
                            <p className="font-semibold text-slate-500 line-through">Score 90% or higher in 1 lesson</p>
                            <p className="text-sm text-green-600 font-bold">Reward Claimed +10 Coins</p>
                        </div>
                    </BorderCard>
                </div>

                {/* Achievement / Weekly Quests Section */}
                <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Weekly Quests</h2>
                        <p className="text-slate-500 text-sm font-bold">Resets in 1d 12h</p>
                    </div>

                    <BorderCard className="flex items-center gap-4">
                        <FontAwesomeIcon icon={faScrollTorah} className="w-10! h-10! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
                        <div className="space-y-1">
                            <p className="font-semibold">Defeat 1 Boss Fight</p>
                            <p className="text-sm text-slate-500">0 / 1 Defeated</p>
                        </div>
                    </BorderCard>
                </div>
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />

            {/* Bottombar */}
            <Bottombar target={targetPage} />
        </div>
    );
};

export default QuestPage;