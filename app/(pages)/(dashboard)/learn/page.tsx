import { LevelLock } from "@/components/layout/LevelLock";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLearn } from "@/components/ui/ButtonLearn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LessonCard } from "@/components/ui/LessonCard";
import { faBolt, faBook, faComment, faEllipsis, faHeadphones, faSkull, faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const LearnPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="w-full p-5">
                {/* Section 1 */}
                <div>
                    <div className="shadow p-5 rounded-2xl bg-blue-600 flex justify-between items-center sticky top-5 z-30">
                        <div>
                            <p className="text-slate-300 text-sm font-semibold">Section 1, Lesson 1</p>
                            <h1 className="text-white font-bold text-xl">Order food and drinks</h1>
                        </div>
                        <ButtonLink href="/guidebook" variant="secondary" >Guidebook</ButtonLink>
                    </div>
                    
                    <div className="relative p-5 flex flex-col items-center justify-center gap-8 my-5">
                        {/* Boss Fight */}
                        <LessonCard
                            href="/learn/boss"
                            title="The Hollow Gourmet"
                            lessonText="Boss Fight"
                            buttonText="Start +50 XP"
                            className="absolute! ms-40"
                            variant="danger"
                        >
                            <FontAwesomeIcon icon={faSkull} className="w-12! h-12! m-1" />
                        </LessonCard>

                        {/* Lesson */}
                        <LessonCard
                            href="/learn/1"
                            title="Order food and drinks"
                            lessonText="Lesson 1 of 5"
                            buttonText="Start +0 XP"
                        >
                            <FontAwesomeIcon icon={faBook} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/learn/1"
                            title="Order food and drinks"
                            lessonText="Lesson 2 of 5"
                            buttonText="Start +0 XP"
                            className="-ms-24"
                        >
                            <FontAwesomeIcon icon={faHeadphones} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/learn/1"
                            title="Order food and drinks"
                            lessonText="Lesson 3 of 5"
                            buttonText="Start +0 XP"
                            className="-ms-44"
                        >
                            <FontAwesomeIcon icon={faVolumeHigh} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/learn/1"
                            title="Order food and drinks"
                            lessonText="Lesson 4 of 5"
                            buttonText="Start +10 XP"
                            className="-ms-24"
                            active={true}
                        >
                            <FontAwesomeIcon icon={faComment} className="w-8! h-8!" />
                        </LessonCard>
                        <ButtonLearn variant="secondary">
                            <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
                        </ButtonLearn>
                    </div>
                </div>

                {/* Section 2 */}
                <div>
                    <div className="shadow p-5 rounded-2xl bg-red-600 flex justify-between items-center sticky top-5 z-30">
                        <div>
                            <p className="text-slate-300 text-sm font-semibold">Section 2, Lesson 1</p>
                            <h1 className="text-white font-bold text-xl">Great and say goodbye</h1>
                        </div>
                        <ButtonLink href="/guidebook" variant="secondary" className="text-red-600">Guidebook</ButtonLink>
                    </div>
                    
                    {/* Lesson */}
                    <LevelLock />
                </div>

                {/* Section 3 */}
                <div>
                    <div className="shadow p-5 rounded-2xl bg-violet-600 flex justify-between items-center sticky top-5 z-30">
                        <div>
                            <p className="text-slate-300 text-sm font-semibold">Section 3, Lesson 1</p>
                            <h1 className="text-white font-bold text-xl">Tell time</h1>
                        </div>
                        <ButtonLink href="/guidebook" variant="secondary" className="text-violet-600">Guidebook</ButtonLink>
                    </div>
                    
                    {/* Lesson */}
                    <LevelLock align="left" />
                </div>
            </div>
            <div className="w-3xl">
                <div className="p-5 space-y-5 sticky top-0">
                    {/* Languages */}
                    <div className="flex items-center justify-between sticky">
                        <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/english.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/french.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Image src={'/assets/flags/german.jpeg'} alt="flag" width={64} height={64} className="block cursor-pointer border-2 aspect-2/1.5 border-slate-300 rounded-lg" />
                        <Link href={'/languages'} className="border-2 aspect-2/1.5 border-slate-300 rounded-lg w-16 h-auto flex justify-center items-center">
                            <FontAwesomeIcon icon={faEllipsis} className="w-8 h-8 text-slate-500" />
                        </Link>
                    </div>

                    {/* Level */}
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

                    {/* Daily */}
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

                    {/* Season Leaderboard */}
                    <BorderCard className="border-b-2! space-y-5 text-slate-700">
                        <div className="flex justify-between items-center">
                            <p className="font-bold">Seasonal Leaderboard</p>
                            <Link href={'/leaderboard'} className="text-blue-600 font-bold text-sm">View All</Link>
                        </div>
                        <BorderCard className="flex justify-between items-center border-b-2! p-3! font-semibold">
                            <div className="flex gap-1 items-center">
                                <p className="text-xl me-1">#12</p>
                                <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={40} height={40} className="border-2 aspect-square border-slate-300 rounded-full" />
                                <p>Putra</p>
                            </div>
                            <div className="flex justify-center gap-1">
                                <FontAwesomeIcon icon={faStar} className="w-6! h-6! text-blue-600 " />
                                <p className="text-blue-600 font-bold">30</p>
                            </div>
                        </BorderCard>
                        <BorderCard variant="primary" className="flex justify-between items-center border-b-2! p-3! font-semibold">
                            <div className="flex gap-1 items-center">
                                <p className="text-xl me-1">#13</p>
                                <Image src={'/assets/flags/indonesia.jpeg'} alt="flag" width={40} height={40} className="border-2 aspect-square border-slate-300 rounded-full" />
                                <p>Angga</p>
                            </div>
                            <div className="flex justify-center gap-1">
                                <FontAwesomeIcon icon={faStar} className="w-6! h-6!" />
                                <p className="font-bold">20</p>
                            </div>
                        </BorderCard>
                    </BorderCard>
                </div>
            </div>
        </div>
    )
}

export default LearnPage;