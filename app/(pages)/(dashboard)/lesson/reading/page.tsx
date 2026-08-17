"use client";

import React, { useState } from "react";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faBookOpen, faCheck, faStar, faVolumeHigh, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { READING } from "@/constants/lesson";

const ReadingPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");

    const handleCheck = () => {
        if (!selectedOption) return;
        const selected = READING.options.find((opt) => opt.id === selectedOption);
        
        if (selected?.isCorrect) {
            setStatus("correct");
            const correctAudio = new Audio("/assets/audio/correct.mp3");
            correctAudio.play().catch((err) => console.error("Error playing correct sound:", err));
        } else {
            setStatus("incorrect");
            const wrongAudio = new Audio("/assets/audio/wrong.mp3");
            wrongAudio.play().catch((err) => console.error("Error playing wrong sound:", err));
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-between bg-slate-50">
            {/* Header / Progress Bar */}
            <div className="max-w-4xl w-full mx-auto p-5 flex items-center gap-6">
                <ButtonLink href="/learn" variant="secondary" className="px-3! min-h-10 border-b-2!">
                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5 text-slate-400" />
                </ButtonLink>

                {/* Progress Bar */}
                <div className="w-full bg-slate-200 h-4 rounded-full overflow-hidden border-2 border-slate-300">
                    <div className="bg-blue-600 h-full w-1/5 transition-all duration-300"></div>
                </div>

                {/* Point */}
                <div className="flex items-center gap-1 font-black text-blue-600 text-lg">
                    <FontAwesomeIcon icon={faStar} className="w-6 h-6" />
                    <span>2</span>
                </div>
            </div>

            {/* Main Lesson Content */}
            <div className="max-w-2xl w-full mx-auto p-5 space-y-6 flex-1 flex flex-col justify-center">
                {/* Header Title */}
                <div>
                    <h1 className="text-2xl font-black text-slate-700">{READING.title}</h1>
                    <p className="text-slate-400 font-semibold">{READING.subtitle}</p>
                </div>

                {/* Reading Passage Card */}
                <BorderCard className="p-6 bg-blue-50 border-blue-200 border-b-4 space-y-3">
                    <div className="flex justify-between items-center text-blue-600">
                        <div className="flex items-center gap-2 font-bold text-sm">
                            <FontAwesomeIcon icon={faBookOpen} className="w-5 h-5" />
                            <span>Passage</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 transition">
                            <FontAwesomeIcon icon={faVolumeHigh} className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="text-lg font-medium text-slate-800 leading-relaxed">
                        &quot;{READING.passage}&quot;
                    </p>
                </BorderCard>

                {/* Question Prompt */}
                <h2 className="text-lg font-extrabold text-slate-700 pt-2">
                    {READING.question}
                </h2>

                {/* Multiple Choice Options */}
                <div className="space-y-3">
                    {READING.options.map((option) => {
                        const isSelected = selectedOption === option.id;
                        return (
                            <Button
                                key={option.id}
                                variant="secondary"
                                onClick={() => status === "idle" && setSelectedOption(option.id)}
                                className={`flex items-center justify-between! py-4! w-full ${
                                    isSelected
                                        ? "bg-blue-100 border-blue-400 text-blue-700"
                                        : "hover:bg-slate-100 border-slate-300 text-slate-700"
                                }`}
                            >
                                <span className="font-bold text-base">{option.text}</span>
                                <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs ${
                                        isSelected
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-slate-300 text-slate-400"
                                    }`}
                                >
                                    {option.id.toUpperCase()}
                                </div>
                            </Button>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Action / Validation Bar */}
            <div
                className={`border-t-2 p-5 transition-colors ${
                    status === "correct"
                        ? "bg-green-100 border-green-300"
                        : status === "incorrect"
                        ? "bg-red-100 border-red-300"
                        : "bg-white border-slate-200"
                }`}
            >
                <div className="max-w-2xl w-full mx-auto flex items-center justify-between">
                    {/* Status Feedback */}
                    <div>
                        {status === "correct" && (
                            <div className="flex items-center gap-3 text-green-700">
                                <div className="p-2 bg-green-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faCheck} className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-lg">Excellent!</p>
                                    <p className="text-sm font-semibold">You selected the right answer.</p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-700">
                                <div className="p-2 bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-lg">Not quite right</p>
                                    <p className="text-sm font-semibold">Correct Answer: Fresh bread for her bakery</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    {status === "idle" ? (
                        <Button
                            variant="primary"
                            size="lg"
                            disabled={!selectedOption}
                            onClick={handleCheck}
                            className={!selectedOption ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            Check Answer
                        </Button>
                    ) : (
                        <ButtonLink
                            href="/learn"
                            variant={status === "correct" ? "primary" : "danger"}
                            size="lg"
                        >
                            Continue
                        </ButtonLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReadingPage;