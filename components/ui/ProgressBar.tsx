'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface ProgressBarProps {
    current: number;
    max: number;
    barColor?: string;
    borderColor?: string;
    duration?: number;
}

export const ProgressBar = ({
    current,
    max,
    barColor = "bg-blue-600",
    borderColor = "border-blue-700",
    duration = 1.5,
}: ProgressBarProps) => {
    const barRef = useRef<HTMLDivElement>(null);
    const percentage = Math.min(Math.max((current / max) * 100, 0), 100);

    useEffect(() => {
        gsap.to(barRef.current, {
            width: `${percentage}%`,
            duration,
            ease: "power2.out",
        });
    }, [percentage, duration]);

    return (
        <div className="relative w-full bg-slate-300 rounded-full overflow-hidden">
            <div
                ref={barRef}
                className={`absolute h-full rounded-full border-2 border-b-4 ${barColor} ${borderColor}`}
            />
            <p className="text-white z-10 relative text-center p-2 text-sm font-semibold">
                {current} / {max}
            </p>
        </div>
    );
}