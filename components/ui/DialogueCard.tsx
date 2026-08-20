import React, { forwardRef } from "react";

interface DialogueCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary";
}

export const DialogueCard = forwardRef<HTMLDivElement, DialogueCardProps>(
    ({ children, className = "", variant = "secondary" }, ref) => {
        const variants = {
            primary: "bg-blue-600 border-blue-800 text-white",
            secondary: "border-slate-300",
        };

        return (
            <div
                ref={ref}
                className={`p-5 rounded-2xl relative border-b-4 transition-all duration-75 ease-in-out border-2 ${variants[variant]} ${className}`}
            >
                {children}
            </div>
        );
    }
);

DialogueCard.displayName = "DialogueCard";