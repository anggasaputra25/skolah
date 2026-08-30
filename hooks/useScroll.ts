// hooks/useScroll.ts
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function useScroll(stagger = 0.18) {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const fadeWords = gsap.utils.toArray<HTMLElement>(".fade-word", containerRef.current);
            if (fadeWords.length > 0) {
                gsap.fromTo(
                    fadeWords,
                    { y: "100%", opacity: 0 },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }

            const fadeDowns = gsap.utils.toArray<HTMLElement>(".fade-down", containerRef.current);
            if (fadeDowns.length > 0) {
                gsap.fromTo(
                    fadeDowns,
                    { y: "-100%", opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: stagger,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }

            const fadeUps = gsap.utils.toArray<HTMLElement>(".fade-up", containerRef.current);
            if (fadeUps.length > 0) {
                gsap.fromTo(
                    fadeUps,
                    { y: "100%", opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: stagger,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                        },
                    }
                );
            }
        },
        { scope: containerRef }
    );

    return containerRef;
}