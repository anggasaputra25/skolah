import Link from "next/link";
import React from "react";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    href,
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) => {
    const baseStyles = `
        shrink-0
        relative inline-flex items-center justify-center
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
        danger:
            "bg-red-600 border-red-800 text-white hover:bg-red-700",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm min-h-[44px]",
        md: "px-4 py-2 text-base min-h-[45.6px]",
        lg: "px-6 py-3 text-lg min-h-[57.6px]",
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </Link>
    );
};