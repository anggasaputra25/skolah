"use client";

import React, { useState } from "react";
import { ButtonLearn } from "./ButtonLearn";
import { ButtonLink } from "./ButtonLink";

interface LessonCardProps {
    href: string;
    children: React.ReactNode;
    title: string;
    lessonText: string;
    buttonText: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({
    href,
    children,
    title,
    lessonText,
    buttonText,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-flex flex-col items-center">
            {/* Popover / Popup Window */}
            {isOpen && (
                <div className="absolute top-full mt-3 z-50 w-72 rounded-2xl border-2 border-slate-200 bg-white p-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* Panah Atas (Tailwind Triangle) */}
                    <div className="absolute -top-2.25 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t-2 border-l-2 border-slate-200 rotate-45" />

                    {/* Konten Card */}
                    <div className="relative z-10 space-y-3 text-left">
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-700">{title}</h3>
                            <p className="text-sm font-semibold text-slate-400">{lessonText}</p>
                        </div>

                        {/* Tombol Start Duolingo Style */}
                        <ButtonLink
                            href={href}
                            className="flex w-full items-center justify-center rounded-xl border-2 border-b-4 border-blue-800 bg-blue-500 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all active:border-b-2 active:translate-y-0.5 hover:bg-blue-600"
                        >
                            {buttonText}
                        </ButtonLink>
                    </div>
                </div>
            )}

            <ButtonLearn
                onClick={() => setIsOpen(!isOpen)}
            >
                {children}
            </ButtonLearn>
        </div>
    );
};