'use client'
import gsap from "gsap";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
    target: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export const AnimatedCounter = ({
    target,
    suffix = "",
    duration = 1.5,
    className = "",
}: AnimatedCounterProps) => {
    const countRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        const obj = { value: 0 };

        gsap.to(obj, {
            value: target,
            duration,
            ease: "power2.out",
            onUpdate: () => {
                if (countRef.current) {
                    countRef.current.textContent = `${Math.round(obj.value)}${suffix}`;
                }
            },
        });
    }, [target, suffix, duration]);

    return <p ref={countRef} className={className}>0{suffix}</p>;
};