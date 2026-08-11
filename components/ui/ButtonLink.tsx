import Link from "next/link";
import React from "react";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
    href,
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
    
    border-b-4 active:border-b-0
    active:translate-y-1
    transition-all duration-75 ease-in-out
    
    select-none cursor-pointer
    `;

    const variants = {
        primary:
            "bg-blue-600 border-blue-800 text-white hover:bg-blue-700",
        secondary:
            "bg-slate-100 border-slate-300 text-blue-600 hover:bg-slate-200",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg",
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