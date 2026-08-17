import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { 
    faArrowLeft, 
    faBolt, 
    faBookOpen, 
    faComments, 
    faEllipsis, 
    faLightbulb, 
    faStar, 
    faVolumeHigh 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

const guidebookData = {
    sectionTitle: "Section 1: Order food and drinks",
    description: "Key phrases, vocabulary, and tips to help you navigate ordering at restaurants and cafes.",
    keyPhrases: [
        { phrase: "Saya mau pesan...", translation: "I would like to order...", audio: "/audio/phrase1.mp3" },
        { phrase: "Berapa harganya?", translation: "How much is it?", audio: "/audio/phrase2.mp3" },
        { phrase: "Bisa minta bilnya?", translation: "Can I have the bill, please?", audio: "/audio/phrase3.mp3" },
        { phrase: "Terima kasih banyak!", translation: "Thank you very much!", audio: "/audio/phrase4.mp3" },
    ],
    vocabulary: [
        { word: "Nasi Goreng", meaning: "Fried Rice" },
        { word: "Es Teh Manis", meaning: "Sweet Iced Tea" },
        { word: "Air Mineral", meaning: "Mineral Water" },
        { word: "Pelayan", meaning: "Waiter / Waitress" },
        { word: "Meja", meaning: "Table" },
        { word: "Sendok & Garpu", meaning: "Spoon & Fork" },
    ],
    grammarTip: {
        title: "Polite Requests with 'Tolong' & 'Bisa'",
        explanation: "When ordering food or asking for help, use 'Tolong' (Please) at the start of a sentence or 'Bisa' (Can I/Could you) to make your request sound polite.",
        example: "Tolong air putih satu lagi. (Please bring one more plain water.)",
    },
};

const GuidebookPage = () => {
    return (
        <div className="flex">
            <Sidebar target={1} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Banner */}
                <div className="shadow p-6 rounded-2xl bg-blue-600 text-white flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <ButtonLink href="/learn" variant="secondary" className="px-3! min-h-10 border-b-2!">
                            <FontAwesomeIcon icon={faArrowLeft} className="w-5 h-5 text-blue-600" />
                        </ButtonLink>
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Unit Guidebook</p>
                            <h1 className="font-bold text-2xl">{guidebookData.sectionTitle}</h1>
                        </div>
                    </div>
                </div>

                {/* Section Overview */}
                <BorderCard className="p-6 bg-blue-50 border-blue-200 space-y-2">
                    <div className="flex items-center gap-2 text-blue-600 font-bold">
                        <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" />
                        <span>Overview</span>
                    </div>
                    <p className="text-slate-700 font-medium leading-relaxed">
                        {guidebookData.description}
                    </p>
                </BorderCard>

                {/* Key Phrases Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 font-extrabold text-xl">
                        <FontAwesomeIcon icon={faComments} className="w-6 h-6 text-blue-600" />
                        <h2>Key Phrases</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {guidebookData.keyPhrases.map((item, index) => (
                            <BorderCard key={index} className="flex justify-between items-center p-4">
                                <div className="space-y-1">
                                    <p className="font-black text-slate-800 text-base">{item.phrase}</p>
                                    <p className="text-sm font-semibold text-slate-400">{item.translation}</p>
                                </div>
                                <button className="p-3 bg-neutral-50 hover:bg-slate-100 rounded-2xl border-2 border-slate-300 text-blue-600 active:translate-y-0.5 transition">
                                    <FontAwesomeIcon icon={faVolumeHigh} className="w-5 h-5" />
                                </button>
                            </BorderCard>
                        ))}
                    </div>
                </div>

                {/* Grammar Tips Section */}
                <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-2 text-slate-700 font-extrabold text-xl">
                        <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 text-yellow-500" />
                        <h2>Grammar Tip</h2>
                    </div>

                    <BorderCard className="p-6 bg-amber-50 border-amber-300 space-y-3">
                        <h3 className="font-extrabold text-slate-800 text-lg">{guidebookData.grammarTip.title}</h3>
                        <p className="text-slate-700 font-medium text-sm leading-relaxed">
                            {guidebookData.grammarTip.explanation}
                        </p>
                        <div className="p-3 rounded-xl bg-white border border-amber-200 font-bold text-slate-800 text-sm">
                            <span className="text-amber-600 font-extrabold">Example: </span>
                            {guidebookData.grammarTip.example}
                        </div>
                    </BorderCard>
                </div>

                {/* Vocabulary Grid */}
                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold text-slate-700">Vocabulary Words</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {guidebookData.vocabulary.map((item, index) => (
                            <BorderCard key={index} className="p-4 text-center space-y-1 bg-slate-50">
                                <p className="font-black text-slate-800 text-base">{item.word}</p>
                                <p className="text-xs font-semibold text-slate-400">{item.meaning}</p>
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
                            <FontAwesomeIcon icon={faEllipsis} className="w-8 h-8 text-slate-500" />
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
                </div>
            </div>
        </div>
    );
};

export default GuidebookPage;