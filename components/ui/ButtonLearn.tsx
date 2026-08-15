import React from "react";

interface ButtonLearnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export const ButtonLearn: React.FC<ButtonLearnProps> = ({
    children,
    variant = "primary",
    size = "sm",
    className = "",
    ...props
}) => {
    const baseStyles = `
    relative inline-flex items-center justify-center
    p-5
    font-bold uppercase tracking-wider
    rounded-full
    
    border-2
    border-b-5 active:border-b-2
    active:translate-y-1
    transition-all duration-75 ease-in-out
    
    select-none cursor-pointer
    `;

    const variants = {
        primary:
            "bg-blue-600 border-blue-800 text-white hover:bg-blue-700",
        secondary:
            "bg-neutral-50 border-slate-300 text-slate-500 hover:bg-slate-100",
    };

    const sizes = {
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
    };

    return (
        <div className="relative flex justify-center items-center">
            <div className={`absolute rounded-full border-4 p-11 animate-[spin_10s_linear_infinite] border-blue-300 border-t-blue-600 ${variant == 'primary' ? 'block' : 'hidden'}`}></div>
            <button
                className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
                {...props}
            >
                {children}
            </button>
        </div>
    );
};