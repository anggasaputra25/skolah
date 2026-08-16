import React from "react";

interface PopoverProps {
    children: React.ReactNode;
    align?: "right" | "left";
    width?: string;
    className?: string;
}

export const Popover: React.FC<PopoverProps> = ({
    children,
    align = "right",
    width = "w-72",
    className = "",
}) => {
    const alignStyles = align === "right" ? "right-0" : "left-0";
    const arrowPosition = align === "right" ? "right-5" : "left-5";

    return (
        <div
            className={`
                absolute top-full mt-3 z-10 ${alignStyles} ${width}
                rounded-2xl border-2 border-slate-200 bg-white p-2.5 shadow-lg
                animate-in fade-in slide-in-from-top-2 duration-150
                ${className}
            `}
        >
            {/* Arrow Popover */}
            <div
                className={`
                    absolute -top-2.25 ${arrowPosition} w-4 h-4 
                    bg-white border-t-2 border-l-2 border-slate-200 
                    rotate-45 rounded-tl-sm
                `}
            />

            {/* Content Container */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};