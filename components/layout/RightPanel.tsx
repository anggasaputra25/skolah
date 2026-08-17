import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { LEADERBOARD } from "@/constants/leaderboard";
import { faBolt, faEllipsis, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const RightPanel = ({target = 1}: {target?: number}) => {
    let leaderboard = LEADERBOARD;
    if (target == 1 || target == 3) {
        leaderboard = LEADERBOARD.slice(11, 13);
    } else {
        leaderboard = LEADERBOARD.slice(10, 14);
    }
    return (
        <div className="w-3xl">
            <div className="p-5 space-y-5 sticky top-0">
                {/* Languages */}
                <div className="flex items-center justify-between sticky">
                    <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                    <Image src={'/assets/flags/english.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                    <Image src={'/assets/flags/french.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                    <Image src={'/assets/flags/german.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                    <Link href={'/languages'} className="border-2 aspect-2/1.5 border-slate-300 rounded-lg w-16 h-auto flex justify-center items-center">
                        <FontAwesomeIcon icon={faEllipsis} className="w-8! h-8! text-slate-500" />
                    </Link>
                </div>

                {/* Level */}
                {target != 5 &&
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
                }

                {/* Daily */}
                {target != 2 &&
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
                }

                {/* Seasonal Leaderboard */}
                {target != 4 &&
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Seasonal Leaderboard</p>
                            <Link href={'/leaderboard'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        {leaderboard.map((user, index) => (
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
                }
            </div>
        </div>
    )
}