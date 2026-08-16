"use client";

import React, { useState } from "react";
import { ButtonLearn } from "./ButtonLearn";
import { ButtonLink } from "./ButtonLink";

interface LessonCardProps {
    href: string;
    variant?: "primary" | "secondary" | "danger";
    children: React.ReactNode;
    title: string;
    lessonText: string;
    buttonText: string;
    className?: string;
    active?: boolean;
}

export const LessonCard: React.FC<LessonCardProps> = ({
    href,
    children,
    variant = "primary",
    title,
    lessonText,
    buttonText,
    className,
    active = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`relative inline-flex flex-col items-center ${className}`}>
            {isOpen && (
                <div className="absolute top-full mt-3 z-10 w-72 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="absolute -top-2.25 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-slate-200 rotate-45" />

                    <div className="relative space-y-3 text-left">
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-700">{title}</h3>
                            <p className="text-sm font-semibold text-slate-400">{lessonText}</p>
                        </div>

                        <ButtonLink
                            href={href}
                            variant={variant}
                            className="flex w-full items-center justify-center rounded-xl border-2 border-b-4 border-blue-800 bg-blue-500 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all active:border-b-2 active:translate-y-0.5 hover:bg-blue-600"
                        >
                            {buttonText}
                        </ButtonLink>
                    </div>
                </div>
            )}

            <ButtonLearn
                onClick={() => setIsOpen(!isOpen)}
                variant={variant}
                active={active}
            >
                {children}
            </ButtonLearn>
        </div>
    );
};