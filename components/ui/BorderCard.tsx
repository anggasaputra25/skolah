import React from 'react';

export const BorderCard = ({ 
    children, 
    className = "", 
    variant = "secondary"
}: {
    children: React.ReactNode; 
    className?: string; 
    variant?: "primary" | "secondary";
}) => {
    const variants = {
        primary: "bg-blue-600 border-blue-800 text-white",
        secondary: "border-slate-300",
    };

    return (
        <div className={`p-5 rounded-2xl relative border-b-4 transition-all duration-75 ease-in-out border-2 ${variants[variant]} ${className}`}>
            {children}
        </div>
    );
};