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
            // Fallback state simulation for UI testing without mic access
            setRecordState("recording");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
            mediaRecorderRef.current.stop();
            // Stop media stream tracks
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

    // Frontend validation mock
    const handleCheck = () => {
        if (recordState !== "recorded") return;

        // Frontend simulation logic: toggle pass/fail or randomize for frontend review
        const isPass = true; 
        if (isPass) {
            setStatus("correct");
        } else {
            setStatus("incorrect");
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
                {/* Header Title */}
                <div>
                    <h1 className="text-2xl font-black text-slate-700">{SPEAKING.title}</h1>
                    <p className="text-slate-400 font-semibold">{SPEAKING.subtitle}</p>
                </div>

                {/* Sentence Prompt Card */}
                <BorderCard className="p-6 bg-blue-50 border-blue-200 border-b-4 space-y-4">
                    <div className="flex justify-between items-center text-blue-600">
                        <div className="flex items-center gap-2 font-bold text-sm">
                            <FontAwesomeIcon icon={faMicrophone} className="w-5 h-5" />
                            <span>Speak Prompt</span>
                        </div>
                        <button className="text-blue-600 hover:text-blue-800 transition">
                            <FontAwesomeIcon icon={faVolumeHigh} className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-xl font-extrabold text-slate-800 leading-relaxed">
                        &quot;{SPEAKING.targetText}&quot;
                    </p>

                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        Hint: {SPEAKING.phoneticHint}
                    </p>
                </BorderCard>

                {/* Microphone Record Controls */}
                <div className="py-6 flex flex-col items-center justify-center space-y-4">
                    {recordState === "idle" && (
                        <button
                            onClick={startRecording}
                            className="w-24 h-24 rounded-full bg-blue-600 hover:bg-blue-700 active:translate-y-1 text-white border-b-4 border-blue-800 flex items-center justify-center shadow-lg transition-all"
                            aria-label="Start recording"
                        >
                            <FontAwesomeIcon icon={faMicrophone} className="w-10 h-10" />
                        </button>
                    )}

                    {recordState === "recording" && (
                        <div className="flex flex-col items-center space-y-3">
                            {/* Animated Pulse Ring */}
                            <div className="relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <button
                                    onClick={stopRecording}
                                    className="relative w-24 h-24 rounded-full bg-red-500 hover:bg-red-600 active:translate-y-1 text-white border-b-4 border-red-700 flex items-center justify-center shadow-lg transition-all"
                                    aria-label="Stop recording"
                                >
                                    <FontAwesomeIcon icon={faPause} className="w-10 h-10" />
                                </button>
                            </div>
                            <span className="text-xs font-extrabold text-red-500 uppercase tracking-wider animate-pulse">
                                Recording... Tap to stop
                            </span>
                        </div>
                    )}

                    {recordState === "recorded" && (
                        <div className="flex items-center gap-4">
                            {/* Re-record Button */}
                            <button
                                onClick={startRecording}
                                disabled={status !== "idle"}
                                className="w-14 h-14 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-600 border-b-4 border-slate-400 flex items-center justify-center transition disabled:opacity-50"
                                aria-label="Re-record"
                            >
                                <FontAwesomeIcon icon={faRotateRight} className="w-6 h-6" />
                            </button>

                            {/* Play Recorded Audio */}
                            <button
                                onClick={togglePlayback}
                                className="w-20 h-20 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white border-b-4 border-blue-800 flex items-center justify-center shadow-md transition"
                                aria-label="Play recording preview"
                            >
                                <FontAwesomeIcon
                                    icon={isPlayingPlayback ? faPause : faPlay}
                                    className="w-8 h-8 ml-1"
                                />
                            </button>
                        </div>
                    )}

                    <p className="text-sm font-semibold text-slate-400">
                        {recordState === "idle" && "Tap the mic to start speaking"}
                        {recordState === "recorded" && "Listen to your recording or click Check Answer"}
                    </p>
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
                                    <p className="font-extrabold text-lg">Great pronunciation!</p>
                                    <p className="text-sm font-semibold">Your speech match was clear and accurate.</p>
                                </div>
                            </div>
                        )}
                        {status === "incorrect" && (
                            <div className="flex items-center gap-3 text-red-700">
                                <div className="p-2 bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-extrabold text-lg">Needs practice</p>
                                    <p className="text-sm font-semibold">Try speaking a bit slower and clearer.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    {status === "idle" ? (
                        <Button
                            variant="primary"
                            size="lg"
                            disabled={recordState !== "recorded"}
                            onClick={handleCheck}
                            className={recordState !== "recorded" ? "opacity-50 cursor-not-allowed" : ""}
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

export default SpeakingPage;