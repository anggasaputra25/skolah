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

const initialPosts = [
    {
        id: 1,
        author: "Sarah Jenkins",
        username: "@sarah_j",
        avatar: "/assets/flags/english.jpeg",
        badge: "Polyglot",
        timeAgo: "2 hours ago",
        title: "Best tips for remembering vocabulary faster?",
        content: "I've been struggling with Section 2 vocabulary lately. Does anyone have specific spaced repetition methods or mnemonic tricks that worked well for you?",
        likes: 24,
        comments: 8,
        category: "Learning Tips",
        isLiked: false,
    },
    {
        id: 2,
        author: "Budi Santoso",
        username: "@budi_s",
        avatar: "/assets/flags/indonesia.jpeg",
        badge: "Top 3 Leaderboard",
        timeAgo: "5 hours ago",
        title: "Completed my 30-day streak today! 🎉",
        content: "Consistency is key! Making time for just 15 minutes every morning before work really made a huge difference. Don't give up on your daily quests!",
        likes: 56,
        comments: 14,
        category: "Achievement",
        isLiked: true,
    },
    {
        id: 3,
        author: "Claire Dupont",
        username: "@claire_d",
        avatar: "/assets/flags/french.jpeg",
        badge: "Level 5",
        timeAgo: "1 day ago",
        title: "Grammar Question: Difference between 'Tolong' and 'Silakan'?",
        content: "Can a native speaker clarify when it's appropriate to use 'Tolong' versus 'Silakan' when asking someone to do something politely?",
        likes: 12,
        comments: 6,
        category: "Grammar Help",
        isLiked: false,
    },
];

const categories = ["All Topics", "Learning Tips", "Grammar Help", "Achievement", "Discussion"];

const CommunityPage = () => {
    const targetPage = 5;
    const [selectedCategory, setSelectedCategory] = useState("All Topics");
    const [posts, setPosts] = useState(initialPosts);
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

    const filteredPosts = selectedCategory === "All Topics" 
        ? posts 
        : posts.filter(post => post.category === selectedCategory);

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
                            className="w-full bg-slate-100 border-2 border-slate-200 rounded-xl px-4 py-2.5 font-semibold text-slate-700 outline-none focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="flex justify-between items-center pt-1 border-t border-slate-100">
                        <span className="text-xs font-bold text-slate-400">Keep it friendly and constructive!</span>
                        <Button 
                            variant="primary" 
                            size="sm" 
                            disabled={!newPostText.trim()}
                            className={!newPostText.trim() ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            <FontAwesomeIcon icon={faPenToSquare} className="w-4 h-4 me-2" />
                            Post
                        </Button>
                    </div>
                </BorderCard>

                {/* Category Filters */}
                <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl border-2 font-bold text-sm whitespace-nowrap transition ${
                                selectedCategory === cat
                                    ? "bg-blue-600 border-blue-800 text-white"
                                    : "bg-white border-slate-300 text-slate-600 hover:bg-slate-100"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Forum Posts List */}
                <div className="space-y-4">
                    {filteredPosts.map((post) => (
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
                                        <div className="flex items-center gap-2">
                                            <p className="font-extrabold text-slate-800">{post.author}</p>
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-extrabold uppercase">
                                                {post.badge}
                                            </span>
                                        </div>
                                        <p className="text-xs font-semibold text-slate-400">
                                            {post.username} • {post.timeAgo}
                                        </p>
                                    </div>
                                </div>

                                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 border border-slate-200">
                                    {post.category}
                                </span>
                            </div>

                            {/* Post Body */}
                            <div className="space-y-1">
                                <h2 className="text-lg font-bold text-slate-800">{post.title}</h2>
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">{post.content}</p>
                            </div>

                            {/* Post Actions Footer */}
                            <div className="flex items-center gap-4 pt-2 border-t border-slate-100 text-slate-500 font-bold text-sm">
                                <button
                                    onClick={() => handleLike(post.id)}
                                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition ${
                                        post.isLiked
                                            ? "bg-red-50 border-red-300 text-red-500"
                                            : "border-slate-200 hover:bg-slate-100 text-slate-500"
                                    }`}
                                >
                                    <FontAwesomeIcon icon={faHeart} className={`w-4 h-4 ${post.isLiked ? "text-red-500" : ""}`} />
                                    <span>{post.likes}</span>
                                </button>

                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition">
                                    <FontAwesomeIcon icon={faMessage} className="w-4 h-4 text-slate-400" />
                                    <span>{post.comments} Comments</span>
                                </button>

                                <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 transition ms-auto">
                                    <FontAwesomeIcon icon={faShareNodes} className="w-4 h-4 text-slate-400" />
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