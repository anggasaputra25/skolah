import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { 
    faBolt, 
    faCalendarDays,
    faFire, 
    faGear, 
    faGraduationCap, 
    faMedal, 
    faShieldHalved, 
    faTrophy, 
    faUserCheck 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const achievements = [
    { title: "Wildfire", level: "Level 3", desc: "Reach a 7 day streak", icon: faFire, color: "text-orange-500", progress: "7/7", completed: true },
    { title: "Sage", level: "Level 2", desc: "Earn 1,000 XP", icon: faGraduationCap, color: "text-blue-600", progress: "450/1000", completed: false },
    { title: "Overachiever", level: "Level 1", desc: "Complete 5 daily quests", icon: faBolt, color: "text-yellow-500", progress: "3/5", completed: false },
    { title: "Champion", level: "Level 1", desc: "Finish top 3 in a league", icon: faTrophy, color: "text-amber-500", progress: "0/1", completed: false },
];

const ProfilePage = () => {
    const targetPage = 5;
    return (
        <div className="flex">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Profile Header Card */}
                <BorderCard className="p-6 space-y-6">
                    <div className="flex justify-between items-start">
                        <div className="flex gap-5 items-center">
                            <div className="relative">
                                <Image 
                                    src="/assets/flags/indonesia.jpeg" 
                                    alt="Profile Avatar" 
                                    width={96} 
                                    height={96} 
                                    className="border-4 aspect-square border-slate-300 rounded-full"
                                />
                                <span className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 border-2 border-white">
                                    <FontAwesomeIcon icon={faUserCheck} className="w-4! h-4!" />
                                </span>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-slate-800">Angga</h1>
                                <p className="text-slate-400 font-semibold text-sm">@angga_dev</p>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold mt-2">
                                    <FontAwesomeIcon icon={faCalendarDays} className="w-4! h-4!" />
                                    <span>Joined August 2026</span>
                                </div>
                            </div>
                        </div>

                        <Link href="/settings">
                            <Button variant="secondary" size="sm" className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faGear} className="w-4! h-4! text-slate-500" />
                                <span>Edit Profile</span>
                            </Button>
                        </Link>
                    </div>
                </BorderCard>

                {/* Statistics Grid */}
                <div className="space-y-3">
                    <h2 className="text-xl font-bold text-slate-700">Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faFire} className="w-8! h-8! text-orange-500" />
                            <div>
                                <p className="text-xl font-black text-slate-700">7</p>
                                <p className="text-sm font-semibold text-slate-400">Day streak</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faBolt} className="w-8! h-8! text-yellow-500" />
                            <div>
                                <p className="text-xl font-black text-slate-700">450</p>
                                <p className="text-sm font-semibold text-slate-400">Total XP</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faShieldHalved} className="w-8! h-8! text-violet-600" />
                            <div>
                                <p className="text-xl font-black text-slate-700">Diamond</p>
                                <p className="text-sm font-semibold text-slate-400">Current league</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faMedal} className="w-8! h-8! text-blue-600" />
                            <div>
                                <p className="text-xl font-black text-slate-700">#13</p>
                                <p className="text-sm font-semibold text-slate-400">League Rank</p>
                            </div>
                        </BorderCard>
                    </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-slate-700">Achievements</h2>
                        <Link href="#" className="text-blue-600 font-bold text-sm">View All</Link>
                    </div>

                    <div className="space-y-3">
                        {achievements.map((item, index) => (
                            <BorderCard key={index} className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-slate-100 border-2 border-slate-200">
                                        <FontAwesomeIcon icon={item.icon} className={`w-8! h-8! ${item.color}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-2">
                                            <p className="font-bold text-slate-700">{item.title}</p>
                                            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-200 font-bold text-slate-600">
                                                {item.level}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-400 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-slate-500">{item.progress}</p>
                                </div>
                            </BorderCard>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />
        </div>
    );
};

export default ProfilePage;