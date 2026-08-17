import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { LEADERBOARD } from "@/constants/leaderboard";
import { 
    faBolt, 
    faCalendarDays,
    faEllipsis, 
    faFire, 
    faGear, 
    faGraduationCap, 
    faMedal, 
    faShieldHalved, 
    faStar, 
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
    return (
        <div className="flex">
            {/* Sidebar dengan target 5 untuk highlight Profile */}
            <Sidebar target={5} />

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
                            <FontAwesomeIcon icon={faEllipsis} className="w-8! h-8! text-slate-500" />
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

                    {/* Seasonal Leaderboard */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Seasonal Leaderboard</p>
                            <Link href={'/leaderboard'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        {LEADERBOARD.slice(11, 13).map((user, index) => (
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

export default ProfilePage;