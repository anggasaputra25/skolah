import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faTriangleExclamation,
    faCircleXmark,
    faCircleInfo,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: React.ReactNode;
    onClose?: () => void;
    className?: string;
}

const variantStyles: Record<
    AlertVariant,
    {
        container: string;
        icon: typeof faCircleCheck;
        iconColor: string;
    }
> = {
    error: {
        container: "bg-red-50 border-red-300 text-red-900",
        icon: faCircleXmark,
        iconColor: "text-red-500",
    },
    success: {
        container: "bg-emerald-50 border-emerald-300 text-emerald-900",
        icon: faCircleCheck,
        iconColor: "text-emerald-500",
    },
    warning: {
        container: "bg-amber-50 border-amber-300 text-amber-900",
        icon: faTriangleExclamation,
        iconColor: "text-amber-500",
    },
    info: {
        container: "bg-blue-50 border-blue-300 text-blue-900",
        icon: faCircleInfo,
        iconColor: "text-blue-500",
    },
};

export const Alert: React.FC<AlertProps> = ({
    variant = "error",
    title,
    children,
    onClose,
    className = "",
}) => {
    const currentVariant = variantStyles[variant];

    return (
        <div
            role="alert"
            className={`
                animate-alert-bounce
                relative flex items-start gap-3 p-4
                rounded-2xl border-2 border-b-4
                transition-all duration-200 ease-in-out
                ${currentVariant.container}
                ${className}
            `}
        >
            <FontAwesomeIcon
                icon={currentVariant.icon}
                className={`w-5 h-5 mt-0.5 shrink-0 ${currentVariant.iconColor}`}
            />

            <div className="flex-1 text-sm">
                {title && <h5 className="font-bold mb-0.5">{title}</h5>}
                <div className="font-medium text-slate-700 leading-relaxed">
                    {children}
                </div>
            </div>

            {onClose && (
                <button
                    onClick={onClose}
                    type="button"
                    aria-label="Close alert"
                    className="p-1 -mr-1 -mt-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-black/5 transition-colors"
                >
                    <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};