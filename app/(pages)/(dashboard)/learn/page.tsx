import { LevelLock } from "@/components/layout/LevelLock";
import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar";
import { ButtonLearn } from "@/components/ui/ButtonLearn";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LessonCard } from "@/components/ui/LessonCard";
import { faBook, faComment, faHeadphones, faSkull, faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearnPage = () => {
    const targetPage = 1;
    return (
        <div className="flex">
            <Sidebar target={targetPage} />

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
                            href="/lesson/reading"
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
                            href="/lesson/reading"
                            title="Order food and drinks"
                            lessonText="Lesson 1 of 5"
                            buttonText="Start +0 XP"
                        >
                            <FontAwesomeIcon icon={faBook} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/lesson/listening"
                            title="Order food and drinks"
                            lessonText="Lesson 2 of 5"
                            buttonText="Start +0 XP"
                            className="-ms-24"
                        >
                            <FontAwesomeIcon icon={faHeadphones} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/lesson/speaking"
                            title="Order food and drinks"
                            lessonText="Lesson 3 of 5"
                            buttonText="Start +0 XP"
                            className="-ms-44"
                        >
                            <FontAwesomeIcon icon={faVolumeHigh} className="w-8! h-8!" />
                        </LessonCard>
                        <LessonCard
                            href="/lesson/conversation"
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
            
            {/* Right Panel */}
            <RightPanel target={targetPage} />
        </div>
    )
}

export default LearnPage;