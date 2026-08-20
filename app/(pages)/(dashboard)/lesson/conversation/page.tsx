"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { 
    faCheck, 
    faStar, 
    faUserGroup, 
    faVolumeHigh, 
    faXmark 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogueMessage } from "@/types/dialogue";
import { CONVERSATION } from "@/constants/lesson";
import { DialogueCard } from "@/components/ui/DialogueCard";

const ConversationPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
    const [messages, setMessages] = useState<DialogueMessage[]>([CONVERSATION[0].partnerMessage]);

    const chatContainerRef = useRef<HTMLDivElement>(null);

    const currentConversation = CONVERSATION[currentIndex];

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleCheck = () => {
        if (!selectedOption) return;
        const selected = currentConversation.options.find((opt) => opt.id === selectedOption);
        
        if (selected) {
            const userResponse: DialogueMessage = {
                id: Date.now(),
                speaker: "user",
                name: "You",
                text: selected.text,
                avatarBg: "bg-blue-600",
            };
            setMessages((prev) => [...prev, userResponse]);

            if (selected.isCorrect) {
                setStatus("correct");
                const correctAudio = new Audio("/assets/audio/correct.mp3");
                correctAudio.play().catch((err) => console.error("Error playing correct sound:", err));
            } else {
                setStatus("incorrect");
                const wrongAudio = new Audio("/assets/audio/wrong.mp3");
                wrongAudio.play().catch((err) => console.error("Error playing wrong sound:", err));
            }
        }
    };

    const handleContinue = () => {
        const nextIndex = currentIndex + 1;

        if (nextIndex < CONVERSATION.length) {
            setCurrentIndex(nextIndex);

            const nextPartnerMessage = CONVERSATION[nextIndex].partnerMessage;
            setMessages((prev) => [...prev, nextPartnerMessage]);

            setSelectedOption(null);
            setStatus("idle");
        }
    };

    const selectedOptionObj = currentConversation.options.find((opt) => opt.id === selectedOption);
    const isLastConversation = currentIndex === CONVERSATION.length - 1;

    return (
        <div className="min-h-screen flex flex-col justify-between">
            {/* Header / Progress Bar */}
            <div className="max-w-4xl w-full mx-auto p-5 flex items-center gap-6">
                <ButtonLink href="/learn" variant="secondary" className="px-3! min-h-10 border-b-2!">
                    <FontAwesomeIcon icon={faXmark} className="w-5! h-5! text-slate-500" />
                </ButtonLink>

                {/* Progress Bar Dinamis */}
                <div className="w-full bg-slate-300 h-4 rounded-full overflow-hidden">
                    <div 
                        className="bg-blue-600 h-full border-2 border-b-4 border-blue-700 rounded-full transition-all duration-300"
                        style={{ width: `${((currentIndex + 1) / CONVERSATION.length) * 100}%` }}
                    ></div>
                </div>

                {/* Point */}
                <div className="flex items-center gap-1 font-black text-blue-600 text-lg">
                    <FontAwesomeIcon icon={faStar} className="w-6! h-6!" />
                    <span>2</span>
                </div>
            </div>

            {/* Main Lesson Content */}
            <div className="max-w-2xl w-full mx-auto p-5 space-y-6 flex-1 flex flex-col justify-center">

                {/* Dialogue Chat Feed Container */}
                <DialogueCard 
                    ref={chatContainerRef} 
                    className="p-6 space-y-3 h-72 overflow-y-auto scroll-smooth"
                >
                    <div className="flex items-center gap-2 text-blue-600 pb-2 border-b border-slate-200 font-bold text-sm">
                        <FontAwesomeIcon icon={faUserGroup} className="w-5! h-5!" />
                        <span>Roleplay with {currentConversation.partner.name} ({currentConversation.partner.role})</span>
                    </div>

                    {/* Speech Bubbles Stream */}
                    <div className="space-y-4 pt-1">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex items-start gap-3 ${
                                    msg.speaker === "user" ? "flex-row-reverse" : "flex-row"
                                }`}
                            >
                                {/* Character Avatar */}
                                <div
                                    className={`w-9 h-9 rounded-full ${msg.avatarBg} text-white font-extrabold flex items-center justify-center text-sm shadow-sm shrink-0`}
                                >
                                    {msg.name.charAt(0)}
                                </div>

                                {/* Speech Bubble */}
                                <div
                                    className={`relative p-4 rounded-2xl max-w-[80%] text-sm font-semibold leading-relaxed shadow-sm ${
                                        msg.speaker === "user"
                                            ? "bg-blue-600 text-white rounded-tr-none"
                                            : "bg-white text-slate-700 border-2 border-slate-200 rounded-tl-none"
                                    }`}
                                >
                                    <div className="flex items-center justify-between gap-3 mb-1">
                                        <span
                                            className={`text-xs font-bold ${
                                                msg.speaker === "user" ? "text-blue-200" : "text-slate-400"
                                            }`}
                                        >
                                            {msg.name}
                                        </span>
                                        {msg.speaker === "partner" && (
                                            <button 
                                                className="text-slate-400 hover:text-slate-600 transition"
                                                aria-label="Listen to audio"
                                            >
                                                <FontAwesomeIcon icon={faVolumeHigh} className="w-3.5 h-3.5" />
                                            </button>
                                        )}
                                    </div>
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </DialogueCard>

                {/* Option Selector List */}
                <div className="space-y-3">
                    {currentConversation.options.map((option) => {
                        const isSelected = selectedOption === option.id;
                        const isCorrectOption = option.isCorrect;

                        let variant: "primary" | "secondary" | "danger" = "secondary";

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
                                <span className="text-left pr-4">{option.text}</span>
                                <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0 ${
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
                                    <p className="font-bold text-lg">Well said!</p>
                                    <p>{selectedOptionObj?.feedback || "That is the right response."}</p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-600">
                                <div className="w-10! h-10! bg-red-600 text-white rounded-full flex justify-center items-center">
                                    <FontAwesomeIcon icon={faXmark} className="w-6! h-6!" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Not quite fitting</p>
                                    <p>{selectedOptionObj?.feedback || "Try picking a response that matches the conversation context."}</p>
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
                    ) : isLastConversation ? (
                        <ButtonLink
                            href="/learn"
                            variant="primary"
                            size="lg"
                        >
                            Finish Lesson
                        </ButtonLink>
                    ) : (
                        <Button
                            onClick={handleContinue}
                            variant={status === "correct" ? "primary" : "danger"}
                            size="lg"
                        >
                            Continue
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ConversationPage;