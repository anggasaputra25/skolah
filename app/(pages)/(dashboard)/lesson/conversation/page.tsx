"use client";

import React, { useState } from "react";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { 
    faComments, 
    faCheck, 
    faStar, 
    faUserGroup, 
    faVolumeHigh, 
    faXmark 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DialogueMessage } from "@/types/dialogue";
import { CONVERSATION } from "@/constants/lesson";

const ConversationPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
    const [messages, setMessages] = useState<DialogueMessage[]>(CONVERSATION.chatHistory);

    const handleCheck = () => {
        if (!selectedOption) return;
        const selected = CONVERSATION.options.find((opt) => opt.id === selectedOption);
        
        if (selected) {
            // Dynamically append user's selected response to the chat stream
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
                wrongAudio.play().catch((err) => console.error("Error playing correct sound:", err));
            }
        }
    };

    const selectedOptionObj = CONVERSATION.options.find((opt) => opt.id === selectedOption);

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
                    <h1 className="text-2xl font-black text-slate-700">{CONVERSATION.title}</h1>
                    <p className="text-slate-400 font-semibold">{CONVERSATION.subtitle}</p>
                </div>

                {/* Dialogue Chat Feed Container */}
                <BorderCard className="p-6 bg-slate-100 border-slate-300 border-b-4 space-y-4 max-h-85 overflow-y-auto">
                    <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-200">
                        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                            <FontAwesomeIcon icon={faUserGroup} className="w-4 h-4 text-slate-400" />
                            <span>Roleplay with {CONVERSATION.partner.name} ({CONVERSATION.partner.role})</span>
                        </div>
                        <FontAwesomeIcon icon={faComments} className="w-4 h-4 text-slate-400" />
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
                </BorderCard>

                {/* Prompt Label */}
                <h2 className="text-lg font-extrabold text-slate-700 pt-1">
                    {CONVERSATION.questionPrompt}
                </h2>

                {/* Option Selector List */}
                <div className="space-y-3">
                    {CONVERSATION.options.map((option) => {
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
                                <span className="font-bold text-base text-left pr-4">{option.text}</span>
                                <div
                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center font-bold text-xs shrink-0 ${
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
                                    <p className="font-extrabold text-lg">Well said!</p>
                                    <p className="text-sm font-semibold">
                                        {selectedOptionObj?.feedback || "That is the right response."}
                                    </p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-700">
                                <div className="p-2 bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-lg">Not quite fitting</p>
                                    <p className="text-sm font-semibold">
                                        {selectedOptionObj?.feedback || "Try picking a response that matches the conversation context."}
                                    </p>
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

export default ConversationPage;