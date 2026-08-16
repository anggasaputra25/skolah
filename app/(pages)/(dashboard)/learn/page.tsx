import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/Button";
import { ButtonLearn } from "@/components/ui/ButtonLearn";
import { LessonCard } from "@/components/ui/LessonCard";
import { faBook, faComment, faHeadphones, faSkull, faStar, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearnPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            <div className="border-r-2 w-full p-5">
                <div className="p-5 rounded-2xl bg-blue-600 flex justify-between items-center">
                    <div>
                        <p className="text-slate-300 text-sm">Level 1, Lesson 1</p>
                        <h1 className="text-white font-semibold text-xl">Order food and drinks</h1>
                    </div>
                    <Button variant="secondary" >Guidebook</Button>
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

                    {/* Level */}
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
                        className="-ml-24"
                    >
                        <FontAwesomeIcon icon={faHeadphones} className="w-8! h-8!" />
                    </LessonCard>
                    <LessonCard
                        href="/learn/1"
                        title="Order food and drinks"
                        lessonText="Lesson 3 of 5"
                        buttonText="Start +0 XP"
                        className="-ml-44"
                    >
                        <FontAwesomeIcon icon={faVolumeHigh} className="w-8! h-8!" />
                    </LessonCard>
                    <LessonCard
                        href="/learn/1"
                        title="Order food and drinks"
                        lessonText="Lesson 4 of 5"
                        buttonText="Start +10 XP"
                        className="-ml-24"
                        active={true}
                    >
                        <FontAwesomeIcon icon={faComment} className="w-8! h-8!" />
                    </LessonCard>
                    <ButtonLearn variant="secondary">
                        <FontAwesomeIcon icon={faStar} className="w-8! h-8!" />
                    </ButtonLearn>
                </div>
            </div>
            <div className="w-full p-5">
                <h1>Tes</h1>
            </div>
        </div>
    )
}

export default LearnPage;