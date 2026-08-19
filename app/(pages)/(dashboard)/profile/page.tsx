import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { 
    faDiamond, 
    faFire, 
    faGear, 
    faPen, 
    faStar, 
    faTrophy, 
    faUserCheck 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

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
                                <button className="absolute cursor-pointer bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 border-2 border-white">
                                    <FontAwesomeIcon icon={faPen} className="w-3! h-3!" />
                                </button>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold">Angga Saputra</h1>
                                <p className="text-slate-500 font-semibold text-sm">@angga</p>
                            </div>
                        </div>

                        <Link href="">
                            <Button variant="primary" size="sm" className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faGear} className="w-4! h-4!" />
                                <span>Edit Profile</span>
                            </Button>
                        </Link>
                    </div>
                </BorderCard>

                {/* Statistics Grid */}
                <div className="space-y-3">
                    <h2 className="text-xl font-bold">Statistics</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faFire} className="w-8! h-8! text-orange-500 filter-[drop-shadow(0px_2px_0px_#c2410c)]" />
                            <div>
                                <p className="font-semibold">3</p>
                                <p className="text-sm text-slate-500">Day streak</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faStar} className="w-8! h-8! text-blue-600 filter-[drop-shadow(0px_2px_0px_#1c398e)]" />
                            <div>
                                <p className="font-semibold">90</p>
                                <p className="text-sm text-slate-500">Total XP</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faDiamond} className="w-8! h-8! text-violet-600 filter-[drop-shadow(0px_2px_0px_#4d179a)]" />
                            <div>
                                <p className="font-semibold">Diamond</p>
                                <p className="text-sm text-slate-500">Current league</p>
                            </div>
                        </BorderCard>

                        <BorderCard className="flex items-center gap-4">
                            <FontAwesomeIcon icon={faTrophy} className="w-8! h-8! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
                            <div>
                                <p className="font-semibold">#13</p>
                                <p className="text-sm text-slate-500">League Rank</p>
                            </div>
                        </BorderCard>
                    </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Achievements</h2>
                        <Link href="#" className="text-blue-600 font-bold text-sm">View All</Link>
                    </div>

                    <div className="space-y-3">
                        {ACHIEVEMENTS.map((item, index) => (
                            <BorderCard key={index} className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-slate-100 border-2 border-slate-200">
                                        <FontAwesomeIcon icon={item.icon} className={`w-8! h-8! ${item.color}`} />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-semibold">{item.title}</p>
                                        <p className="text-sm text-slate-500">{item.desc}</p>
                                    </div>
                                </div>
                                {!item.completed &&
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-slate-500">{item.progress}</p>
                                    </div>
                                }
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