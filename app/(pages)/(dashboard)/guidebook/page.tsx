import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { GUIDEBOOK } from "@/constants/guidebook";
import { 
    faArrowLeft,
    faBookOpen, 
    faComments, 
    faLightbulb, 
    faVolumeHigh 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuidebookPage = () => {
    const targetPage = 1;
    return (
        <div className="flex">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Banner */}
                <div className="shadow p-6 rounded-2xl bg-blue-600 text-white flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <ButtonLink href="/learn" variant="secondary" className="px-3! min-h-10">
                            <FontAwesomeIcon icon={faArrowLeft} className="w-5! h-5! text-blue-600" />
                        </ButtonLink>
                        <div>
                            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wider">Unit Guidebook</p>
                            <h1 className="font-bold text-2xl">{GUIDEBOOK.sectionTitle}</h1>
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
                        {GUIDEBOOK.description}
                    </p>
                </BorderCard>

                {/* Key Phrases Section */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-700 font-extrabold text-xl">
                        <FontAwesomeIcon icon={faComments} className="w-6 h-6 text-blue-600" />
                        <h2>Key Phrases</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {GUIDEBOOK.keyPhrases.map((item, index) => (
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
                        <h3 className="font-extrabold text-slate-800 text-lg">{GUIDEBOOK.grammarTip.title}</h3>
                        <p className="text-slate-700 font-medium text-sm leading-relaxed">
                            {GUIDEBOOK.grammarTip.explanation}
                        </p>
                        <div className="p-3 rounded-xl bg-white border border-amber-200 font-bold text-slate-800 text-sm">
                            <span className="text-amber-600 font-extrabold">Example: </span>
                            {GUIDEBOOK.grammarTip.example}
                        </div>
                    </BorderCard>
                </div>

                {/* Vocabulary Grid */}
                <div className="space-y-3 pt-2">
                    <h2 className="text-xl font-bold text-slate-700">Vocabulary Words</h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {GUIDEBOOK.vocabulary.map((item, index) => (
                            <BorderCard key={index} className="p-4 text-center space-y-1 bg-slate-50">
                                <p className="font-black text-slate-800 text-base">{item.word}</p>
                                <p className="text-xs font-semibold text-slate-400">{item.meaning}</p>
                            </BorderCard>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidebookPage;