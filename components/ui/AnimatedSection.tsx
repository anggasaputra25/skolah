'use client'
import { ReactNode } from "react";
import { useScroll } from "@/hooks/useScroll";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    stagger?: number;
}

export const AnimatedSection = ({
    children,
    className = "",
    id,
    stagger = 0.18,
}: AnimatedSectionProps) => {
    const ref = useScroll(stagger);

    return (
        <div ref={ref} id={id} className={className}>
            {children}
        </div>
    );
};