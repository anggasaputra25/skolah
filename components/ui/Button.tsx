import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "sm",
    className = "",
    ...props
}) => {
    const baseStyles = `
        relative inline-flex items-center justify-center
        px-6 py-3
        font-bold uppercase tracking-wider
        rounded-2xl
        
        border-2
        border-b-4 active:border-b-2
        active:translate-y-1
        transition-all duration-75 ease-in-out
        min-h-[49.6px]
        
        select-none cursor-pointer
    `;

    const variants = {
        primary:
            "bg-blue-600 border-blue-800 text-white hover:bg-blue-700",
        secondary:
            "bg-neutral-50 border-slate-300 text-blue-600 hover:bg-slate-100",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};