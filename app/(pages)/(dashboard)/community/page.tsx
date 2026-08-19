"use client";

import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { 
    faHeart, 
    faMessage, 
    faPenToSquare, 
    faShareNodes, 
    faUserGroup 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { RightPanel } from "@/components/layout/RightPanel";
import { POSTS } from "@/constants/posts";

const CommunityPage = () => {
    const targetPage = 5;
    const [posts, setPosts] = useState(POSTS);
    const [newPostText, setNewPostText] = useState("");

    const handleLike = (id: number) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) => {
                if (post.id === id) {
                    return {
                        ...post,
                        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                        isLiked: !post.isLiked,
                    };
                }
                return post;
            })
        );
    };

    return (
        <div className="flex">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Banner */}
                <div className="shadow p-5 rounded-2xl bg-slate-900 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faUserGroup} className="w-10! h-10! text-white" />
                    <div className="flex justify-between items-center w-full">
                        <div>
                            <p className="text-slate-300 text-sm font-semibold">Learners Hub</p>
                            <h1 className="text-white font-bold text-xl">Community Forum</h1>
                        </div>
                        <p className="font-bold text-sm px-4 py-2 bg-neutral-50 rounded-lg text-blue-600">1,420 Active Learners</p>
                    </div>
                </div>

                {/* Create Post Box */}
                <BorderCard className="p-4 space-y-3 bg-white">
                    <div className="flex gap-3 items-center">
                        <Image 
                            src="/assets/flags/indonesia.jpeg" 
                            alt="Your Avatar" 
                            width={44} 
                            height={44} 
                            className="border-2 aspect-square border-slate-300 rounded-full"
                        />
                        <input
                            type="text"
                            placeholder="Share your learning progress or ask a question..."
                            value={newPostText}
                            onChange={(e) => setNewPostText(e.target.value)}
                            className="w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                        <span className="text-sm text-slate-500">Keep it friendly and constructive!</span>
                        <Button 
                            variant="primary" 
                            size="sm" 
                            disabled={!newPostText.trim()}
                            className={!newPostText.trim() ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} className="w-4! h-4! me-2" />
                            Post
                        </Button>
                    </div>
                </BorderCard>

                {/* Forum Posts List */}
                <div className="space-y-4">
                    {posts.map((post) => (
                        <BorderCard key={post.id} className="p-5 space-y-4 bg-white">
                            {/* Post Header */}
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={post.avatar}
                                        alt={post.author}
                                        width={48}
                                        height={48}
                                        className="border-2 aspect-square border-slate-300 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold">{post.author}</p>
                                        <p className="text-sm text-slate-500">
                                            {post.username} • {post.timeAgo}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                                    {post.badge}
                                </span>
                            </div>

                            {/* Post Content */}
                            <p className="leading-relaxed">{post.content}</p>

                            {/* Post Actions Footer */}
                            <div className="flex items-center gap-4 pt-2 border-t border-slate-100 text-slate-500 text-sm font-semibold">
                                <button
                                    onClick={() => handleLike(post.id)}
                                    className={`flex items-center gap-2 cursor-pointer ${
                                        post.isLiked
                                            ? "text-red-500"
                                            : ""
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faHeart} className="w-4! h-4!" />
                                    <span>{post.likes}</span>
                                </button>

                                <button className="flex items-center gap-2 cursor-pointer">
                                    <FontAwesomeIcon icon={faMessage} className="w-4! h-4!" />
                                    <span>{post.comments} Comments</span>
                                </button>

                                <button className="flex items-center gap-2 cursor-pointer ms-auto">
                                    <FontAwesomeIcon icon={faShareNodes} className="w-4! h-4!" />
                                    <span>Share</span>
                                </button>
                            </div>
                        </BorderCard>
                    ))}
                </div>
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />
        </div>
    );
};

export default CommunityPage;