import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { faBolt, faCheckCircle, faFire, faShield } from "@fortawesome/free-solid-svg-icons";
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
                            <FontAwesomeIcon icon={faBolt} className="w-10! h-10! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
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
                            <FontAwesomeIcon icon={faFire} className="w-10! h-10! text-orange-500 filter-[drop-shadow(0px_2px_0px_#c2410c)]" />
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
                            <FontAwesomeIcon icon={faCheckCircle} className="w-10! h-10! text-green-500" />
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
                            <FontAwesomeIcon icon={faShield} className="w-10! h-10! text-violet-600 filter-[drop-shadow(0px_2px_0px_#4c1d95)]" />
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

            {/* Right Panel */}
            <RightPanel target={targetPage} />
        </div>
    );
};

export default QuestPage;