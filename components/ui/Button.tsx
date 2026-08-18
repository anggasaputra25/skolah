import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "warning" | "disabled";
    size?: "sm" | "md" | "lg";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const baseStyles = `
        relative inline-flex items-center justify-center
        font-bold uppercase tracking-wider
        rounded-2xl
        
        border-2
        border-b-4 active:border-b-2
        active:translate-y-1
        transition-all duration-75 ease-in-out
        
        select-none cursor-pointer
    `;

    const variants = {
        primary:
            "bg-blue-600 border-blue-800 text-white hover:bg-blue-700",
        secondary:
            "bg-neutral-50 border-slate-300 text-blue-600 hover:bg-slate-100",
        warning:
            "bg-yellow-500 border-yellow-700 text-white hover:bg-yellow-600",
        disabled:
            "bg-neutral-200 border-neutral-300 text-neutral-400 cursor-not-allowed pointer-events-none",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm min-h-[44px]",
        md: "px-4 py-2 text-base min-h-[45.6px]",
        lg: "px-6 py-3 text-lg min-h-[57.6px]",
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