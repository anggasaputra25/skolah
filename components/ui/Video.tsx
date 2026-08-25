'use client'
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useState } from "react"

export const Video = ({image}: {image:string}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="rounded-2xl overflow-hidden w-full">
            <div className="fade-up rounded-2xl overflow-hidden relative aspect-video w-full">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={
                        isPlaying 
                            ? "https://www.youtube.com/embed/WThT8sufdBE?autoplay=1&si=y6-73CUPQbNpijKZ" 
                            : "https://www.youtube.com/embed/WThT8sufdBE?si=y6-73CUPQbNpijKZ"
                    }
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                />
                {!isPlaying && (
                    <div 
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 z-10 flex justify-center items-center cursor-pointer group"
                    >
                        <Image 
                            src={image} 
                            alt="image" 
                            fill
                            className="object-cover brightness-50" 
                        />
                        <div className="absolute w-15 h-15 flex justify-center items-center text-white border-4 border-white rounded-full bg-white/25">
                            <FontAwesomeIcon icon={faPlay} className="w-6! h-auto! ml-1" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}