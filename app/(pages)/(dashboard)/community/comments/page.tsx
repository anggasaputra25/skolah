'use client'
import Bottombar from "@/components/layout/Bottombar";
import { RightPanel } from "@/components/layout/RightPanel";
import Sidebar from "@/components/layout/Sidebar"
import { BorderCard } from "@/components/ui/BorderCard";
import { Button } from "@/components/ui/Button";
import { COMMENTS, POSTS } from "@/constants/posts";
import { faHeart, faMessage, faPaperPlane, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CommentsPage = () => {
    const targetPage = 5;
    const [comments, setComments] = useState(COMMENTS);
    const [newPostText, setNewPostText] = useState("");
    const handleLike = (id: number) => {
        setComments((prevComments) =>
            prevComments.map((comment) => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                        isLiked: !comment.isLiked,
                    };
                }
                return comment;
            })
        );
    };

    return (
        <div className="flex mb-20 md:mb-0">
            <Sidebar target={targetPage} />

            {/* Main Content Area */}
            <div className="w-full p-5 space-y-6">
                {/* Header Banner */}
                <div className="shadow p-5 rounded-2xl bg-slate-900 flex gap-3 items-center">
                    <FontAwesomeIcon icon={faMessage} className="w-10! h-10! text-white" />
                    <div className="w-full">
                        <p className="text-slate-300 text-sm font-semibold">Discuss</p>
                        <h1 className="text-white font-bold text-xl">Comments</h1>
                    </div>
                </div>

                {/* Main Comment */}
                <div className="space-y-4">
                    <BorderCard className="p-5 space-y-4 bg-white">
                        {/* Post Header */}
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={POSTS[0].avatar}
                                    alt={POSTS[0].author}
                                    width={48}
                                    height={48}
                                    className="border-2 aspect-square border-slate-300 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold">{POSTS[0].author}</p>
                                    <p className="text-sm text-slate-500">
                                        {POSTS[0].username} • {POSTS[0].timeAgo}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                                {POSTS[0].badge}
                            </span>
                        </div>

                        {/* Post Content */}
                        <p className="leading-relaxed">{POSTS[0].content}</p>
                    </BorderCard>
                </div>

                {/* Create Comment Box */}
                <BorderCard className="p-4 space-y-3 bg-white">
                    <div className="flex gap-3 items-center">
                        <Image 
                            src="/assets/person/person-6.jpg" 
                            alt="Your Avatar" 
                            width={44} 
                            height={44} 
                            className="border-2 aspect-square border-slate-300 rounded-full object-cover"
                        />
                        <input
                            type="text"
                            placeholder="Add comment..."
                            value={newPostText}
                            onChange={(e) => setNewPostText(e.target.value)}
                            className="w-full border-2 border-slate-300 rounded-xl px-4 py-2.5 outline-none focus:border-blue-500 transition"
                        />
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row justify-between items-center pt-1 border-t border-slate-100">
                        <span className="text-sm text-slate-500">Keep it friendly and constructive!</span>
                        <Button 
                            variant="primary" 
                            size="sm" 
                            disabled={!newPostText.trim()}
                            className={`w-full md:w-fit ${!newPostText.trim() ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            <FontAwesomeIcon icon={faPaperPlane} className="w-4! h-4! me-2" />
                            Comment
                        </Button>
                    </div>
                </BorderCard>

                {/* Forum Posts List */}
                <BorderCard className="space-y-10">
                    {comments.map((comment) => (
                        <div key={comment.id} className="space-y-4">
                            {/* Comment Header */}
                            <div className="flex gap-3">
                                <Image
                                    src={comment.avatar}
                                    alt={comment.author}
                                    width={48}
                                    height={48}
                                    className="border-2 aspect-square h-fit border-slate-300 rounded-full object-cover"
                                />
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold">{comment.author}</p>
                                        <p className="text-sm text-slate-500">
                                            {comment.username} • {comment.timeAgo}
                                        </p>
                                    </div>
                                    
                                    {/* Comment Content */}
                                    <p className="leading-relaxed">{comment.content}</p>

                                    {/* Comment Actions Footer */}
                                    <div className="flex items-center gap-4 text-slate-500 text-sm font-semibold">
                                        <button
                                            onClick={() => handleLike(comment.id)}
                                            className={`flex items-center gap-2 cursor-pointer ${
                                                comment.isLiked
                                                    ? "text-red-500"
                                                    : ""
                                            }`}
                                        >
                                            <FontAwesomeIcon icon={faHeart} className="w-4! h-4!" />
                                            <span>{comment.likes}</span>
                                        </button>

                                        <button className="flex items-center gap-2 cursor-pointer">
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </BorderCard>
            </div>

            {/* Right Panel */}
            <RightPanel target={targetPage} />

            {/* Bottombar */}
            <Bottombar target={targetPage} />
        </div>
    )
}

export default CommentsPage;