"use client";

import React, { useState, useRef } from "react";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { 
    faCheck, 
    faMicrophone, 
    faPause, 
    faPlay, 
    faRotateRight, 
    faStar, 
    faVolumeHigh, 
    faXmark 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SPEAKING } from "@/constants/lesson";

const SpeakingPage = () => {
    const [recordState, setRecordState] = useState<"idle" | "recording" | "recorded">("idle");
    const [isPlayingPlayback, setIsPlayingPlayback] = useState<boolean>(false);
    const [status, setStatus] = useState<"idle" | "correct" | "incorrect">("idle");
    const [audioUrl, setAudioUrl] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const audioPlaybackRef = useRef<HTMLAudioElement | null>(null);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Frontend Speech Recording logic using Web Audio API
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
                const url = URL.createObjectURL(audioBlob);
                setAudioUrl(url);
            };

            mediaRecorderRef.current.start();
            setRecordState("recording");
        } catch (err) {
            console.error("Microphone access denied or unsupported:", err);
            setRecordState("recording");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
            mediaRecorderRef.current.stream.getTracks().forEach((track) => track.stop());
        }
        setRecordState("recorded");
    };

    const togglePlayback = () => {
        if (!audioPlaybackRef.current) return;
        if (isPlayingPlayback) {
            audioPlaybackRef.current.pause();
            setIsPlayingPlayback(false);
        } else {
            audioPlaybackRef.current.play();
            setIsPlayingPlayback(true);
        }
    };

    // Handle Audio
    const handleAudio = () => {
        if (audioRef.current && !audioRef.current.paused) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            return;
        }

        if (!audioRef.current) {
            audioRef.current = new Audio("/assets/audio/listening.m4a");

            audioRef.current.onended = () => {
                audioRef.current = null;
            };
        }

        audioRef.current.play().catch((err) => {
            console.error("Error playing sound:", err);
        });
    };

    // Frontend validation mock
    const handleCheck = () => {
        if (recordState !== "recorded") return;

        if (true) {
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

            {/* Hidden audio element for user recording playback */}
            {audioUrl && (
                <audio
                    ref={audioPlaybackRef}
                    src={audioUrl}
                    onEnded={() => setIsPlayingPlayback(false)}
                />
            )}

            {/* Main Lesson Content */}
            <div className="max-w-2xl w-full mx-auto p-5 space-y-6 flex-1 flex flex-col justify-center">
                
                {/* Sentence Prompt Card */}
                <BorderCard className="p-6 space-y-3">
                    <div className="flex justify-between items-center text-blue-600 font-bold text-sm">
                        <div className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faMicrophone} className="w-5! h-5!" />
                            <span>Speaking</span>
                        </div>
                        <button className="cursor-pointer" onClick={handleAudio}>
                            <FontAwesomeIcon icon={faVolumeHigh} className="w-5! h-5!" />
                        </button>
                    </div>

                    <p className="leading-relaxed font-bold text-lg">
                        &quot;{SPEAKING.targetText}&quot;
                    </p>

                    {SPEAKING.phoneticHint && (
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                            Hint: {SPEAKING.phoneticHint}
                        </p>
                    )}
                </BorderCard>

                {/* Question / Instruction Prompt */}
                <h2 className="text-lg font-bold pt-2">
                    Read the sentence out loud clearly into your microphone.
                </h2>

                {/* Microphone Record Controls */}
                <div className="py-6 flex flex-col items-center justify-center space-y-4">
                    {recordState === "idle" && (
                        <Button
                            onClick={startRecording}
                            className="w-24 h-24 rounded-full flex items-center justify-center"
                            aria-label="Start recording"
                        >
                            <FontAwesomeIcon icon={faMicrophone} className="w-8! h-8!" />
                        </Button>
                    )}

                    {recordState === "recording" && (
                        <div className="flex flex-col items-center space-y-3">
                            <div className="relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <Button
                                    variant="danger"
                                    onClick={stopRecording}
                                    className="relative w-24 h-24 rounded-full flex items-center justify-center"
                                    aria-label="Stop recording"
                                >
                                    <FontAwesomeIcon icon={faPause} className="w-8! h-8!" />
                                </Button>
                            </div>
                            <span className="text-xs font-extrabold text-red-500 uppercase tracking-wider animate-pulse">
                                Recording... Tap to stop
                            </span>
                        </div>
                    )}

                    {recordState === "recorded" && (
                        <div className="flex items-center gap-4">
                            <Button
                                variant="secondary"
                                onClick={startRecording}
                                disabled={status !== "idle"}
                                className="w-14 h-14 flex items-center justify-center"
                                aria-label="Re-record"
                            >
                                <FontAwesomeIcon icon={faRotateRight} className="w-6! h-6!" />
                            </Button>

                            <Button
                                onClick={togglePlayback}
                                className="w-20 h-20 flex items-center justify-center"
                                aria-label="Play recording preview"
                            >
                                <FontAwesomeIcon
                                    icon={isPlayingPlayback ? faPause : faPlay}
                                    className="w-8! h-8! ml-1"
                                />
                            </Button>
                        </div>
                    )}

                    <p className="text-sm font-semibold text-slate-500">
                        {recordState === "idle" && "Tap the mic to start speaking"}
                        {recordState === "recorded" && "Listen to your recording or click Check Answer"}
                    </p>
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
                <div className="max-w-2xl w-full mx-auto flex gap-5 flex-col-reverse md:flex-row items-center justify-between">
                    {/* Status Feedback */}
                    <div>
                        {status === "correct" && (
                            <div className="flex items-center gap-3 text-blue-600">
                                <div className="shrink-0 w-10! h-10! bg-blue-600 text-white rounded-full flex justify-center items-center">
                                    <FontAwesomeIcon icon={faCheck} className="w-6! h-6!" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Great pronunciation!</p>
                                    <p>Your speech match was clear and accurate.</p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-600">
                                <div className="shrink-0 w-10! h-10! bg-red-600 text-white rounded-full flex justify-center items-center">
                                    <FontAwesomeIcon icon={faXmark} className="w-6! h-6!" />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Needs practice</p>
                                    <p>Try speaking a bit slower and clearer.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    {status === "idle" ? (
                        <Button
                            variant={recordState === "recorded" ? "primary" : "disabled"}
                            onClick={handleCheck}
                            size="lg"
                            className="w-full"
                        >
                            Check Answer
                        </Button>
                    ) : (
                        <ButtonLink
                            href="/learn"
                            variant={status === "correct" ? "primary" : "danger"}
                            size="lg"
                            className="w-full"
                        >
                            Continue
                        </ButtonLink>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SpeakingPage;