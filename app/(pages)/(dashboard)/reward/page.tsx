import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { BorderCard } from "@/components/ui/BorderCard";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { faAlarmClock, faCrosshairs, faScrollTorah, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reward = () => {
    return (
        <div className="max-w-lg w-full min-h-dvh mx-auto flex flex-col justify-center items-center gap-5 px-5 md:px-0">
            <h1 className="text-4xl font-bold">Amazing!</h1>
            <BorderCard className="w-full space-y-5">
                <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faStar} className="w-12! h-12! text-blue-600 filter-[drop-shadow(0px_2px_0px_#1e3a8a)]" />
                    <div className="space-y-1 w-full font-semibold">
                        <p>Level 4</p>
                        <ProgressBar current={90} max={120} barColor="bg-blue-600" borderColor="border-blue-700" duration={1.5} />
                    </div>
                </div>
                <div className="bg-slate-300 w-full h-0.5 rounded-full"></div>
                <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faScrollTorah} className="w-12! h-12! text-yellow-500 filter-[drop-shadow(0px_2px_0px_#d97706)]" />
                    <div className="space-y-1 w-full font-semibold">
                        <p>Earn 10 XP</p>
                        <ProgressBar current={10} max={10} barColor="bg-yellow-500" borderColor="border-yellow-600" duration={1.5} />
                    </div>
                </div>
            </BorderCard>
            <div className="flex gap-2 w-full">
                <div className="flex gap-2 justify-center items-center rounded-2xl bg-blue-100 w-full p-3 border-blue-300 border">
                    <FontAwesomeIcon icon={faStar} className="w-5! h-5! text-blue-600" />
                    <AnimatedCounter
                        target={10} 
                        duration={1.5} 
                        className="text-lg font-bold text-blue-600" 
                    />
                </div>
                <div className="flex gap-2 justify-center items-center rounded-2xl bg-green-100 w-full p-3 border-green-300 border">
                    <FontAwesomeIcon icon={faCrosshairs} className="w-5! h-5! text-green-600" />
                    <AnimatedCounter 
                        target={100} 
                        suffix="%" 
                        duration={1.5} 
                        className="text-lg font-bold text-green-600" 
                    />
                </div>
                <div className="flex gap-2 justify-center items-center rounded-2xl bg-violet-100 w-full p-3 border-violet-300 border">
                    <FontAwesomeIcon icon={faAlarmClock} className="w-5! h-5! text-violet-600" />
                    <div className="flex items-center text-lg font-bold text-violet-600">
                        <span>0</span>
                        <AnimatedCounter
                            target={2} 
                            duration={1.5}
                        />
                        <span>:</span>
                        <AnimatedCounter
                            target={15} 
                            duration={1.5} 
                        />
                    </div>
                </div>
            </div>
            <div className="fixed bottom-5 max-w-lg px-5 md:px-0 w-full">
                <ButtonLink href="/learn" className="w-full">
                    Continue
                </ButtonLink>
            </div>
        </div>
    )
}

export default Reward;