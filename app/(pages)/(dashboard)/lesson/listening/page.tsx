"use client";

import React, { useState, useRef } from "react";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { faCheck, faEarListen, faPause, faPlay, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LISTENING } from "@/constants/lesson";

const ListeningPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const correctAnswer = LISTENING.options.find((opt) => opt.isCorrect)?.text;

    const togglePlay = () => {
        if (!audioRef.current) return;
        
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    const handleCheck = () => {
        if (!selectedOption) return;
        const selected = LISTENING.options.find((opt) => opt.id === selectedOption);
        
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
        <div className="min-h-screen flex flex-col justify-between">
            {/* Header / Progress Bar */}
            <div className="max-w-4xl w-full mx-auto p-5 flex items-center gap-6">
                <ButtonLink href="/learn" variant="secondary" className="px-3! min-h-10 border-b-2!">
                    <FontAwesomeIcon icon={faXmark} className="w-5! h-5! text-slate-500" />
                </ButtonLink>

                {/* Progress Bar */}
                <div className="w-full bg-slate-300 h-4 rounded-full">
                    <div className="bg-blue-600 h-full w-1/5 border-2 border-b-4 border-blue-700 rounded-full"></div>
                </div>

                {/* Point */}
                <div className="flex items-center gap-1 font-black text-blue-600 text-lg">
                    <FontAwesomeIcon icon={faStar} className="w-6! h-6!" />
                    <span>2</span>
                </div>
            </div>

            {/* Audio Element */}
            <audio 
                ref={audioRef} 
                src={LISTENING.audioUrl} 
                onEnded={handleAudioEnded} 
            />

            {/* Main Lesson Content */}
            <div className="max-w-2xl w-full mx-auto p-5 space-y-6 flex-1 flex flex-col justify-center">

                {/* Audio Player Card */}
                <BorderCard className="p-6 space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm text-blue-600">
                        <FontAwesomeIcon icon={faEarListen} className="w-5! h-5!" />
                        <span>Listening</span>
                    </div>
                    
                    {/* Big Audio Play Control */}
                    <div className="flex items-center justify-center py-4">
                        <button
                            onClick={togglePlay}
                            className="cursor-pointer w-20 h-20 rounded-2xl bg-blue-600 hover:bg-blue-700 active:translate-y-1 text-white border-b-4 border-blue-800 flex items-center justify-center shadow-lg transition-all"
                            aria-label={isPlaying ? "Pause audio" : "Play audio"}
                        >
                            <FontAwesomeIcon 
                                icon={isPlaying ? faPause : faPlay} 
                                className="w-8! h-8! ml-1" 
                            />
                        </button>
                    </div>
                </BorderCard>

                {/* Question Prompt */}
                <h2 className="text-lg font-bold pt-2">
                    {LISTENING.question}
                </h2>

                {/* Multiple Choice Options */}
                <div className="space-y-3">
                    {LISTENING.options.map((option) => {
                        const isSelected = selectedOption === option.id;
                        const isCorrectOption = option.isCorrect;

                        let variant: "primary" | "secondary" | "success" | "danger" = "secondary";

                        if (status === "idle") {
                            variant = isSelected ? "primary" : "secondary";
                        } else {
                            if (isCorrectOption) {
                                variant = "primary";
                            } else if (isSelected && !isCorrectOption) {
                                variant = "danger";
                            } else {
                                variant = "secondary";
                            }
                        }

                        return (
                            <Button
                                key={option.id}
                                variant={variant}
                                onClick={() => status === "idle" && setSelectedOption(option.id)}
                                className={`flex items-center justify-between! py-4! w-full normal-case! font-semibold min-h-[61.6px]! ${
                                    isSelected || (status !== "idle" && isCorrectOption) ? "" : "text-slate-500"
                                }`}
                            >
                                <span>{option.text}</span>
                                <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs ${
                                        isSelected || (status !== "idle" && isCorrectOption)
                                            ? "border-white bg-white text-blue-600"
                                            : "border-slate-300 text-slate-400"
                                    }
                                    ${
                                        status !== "idle" && variant === "danger" ? "border-white bg-white text-red-600!" : ""
                                    }
                                            `}
                                >
                                    <p className="ps-px">{option.id.toUpperCase()}</p>
                                </div>
                            </Button>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Action / Validation Bar */}
            <div
                className={`border-t-2 p-5 transition-colors border-slate-300 ${
                    status !== "idle"
                        ? "bg-slate-100"
                        : ""
                }`}
            >
                <div className="max-w-2xl w-full mx-auto flex items-center justify-between">
                    {/* Status Feedback */}
                    <div>
                        {status === "correct" && (
                            <div className="flex items-center gap-3 text-blue-600">
                                <div className="w-10! h-10! bg-blue-600 text-white rounded-full flex justify-center items-center">
                                    <FontAwesomeIcon icon={faCheck} className="w-6! h-6!" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Excellent!</p>
                                    <p>You selected the right answer.</p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-600">
                                <div className="w-10! h-10! bg-red-600 text-white rounded-full flex justify-center items-center">
                                    <FontAwesomeIcon icon={faXmark} className="w-6! h-6!" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Not quite right</p>
                                    <p>Correct Answer: {correctAnswer}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    {status === "idle" ? (
                        <Button
                            variant={selectedOption ? "primary" : "disabled"}
                            onClick={handleCheck}
                            size="lg"
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

export default ListeningPage;