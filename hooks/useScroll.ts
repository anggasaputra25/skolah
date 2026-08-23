// hooks/useScrollFadeIn.ts
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function useScroll(stagger = 0.18) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.from(".fade-word", {
                y: "100%",
                duration: 0.5,
                stagger: stagger,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                },
            });

            gsap.from(".fade-up", {
                y: "100%",
                opacity: 0,
                duration: 0.8,
                stagger: stagger,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                },
            });

            gsap.from(".fade-down", {
                y: "-100%",
                opacity: 0,
                duration: 0.8,
                stagger: stagger,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 50%",
                },
            });
        },
        { scope: containerRef }
    );

    return containerRef;
}