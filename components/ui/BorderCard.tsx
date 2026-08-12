import React from 'react';

export const BorderCard = ({ children, className }: {children: React.ReactNode; className?: string;}) => {
    return (
        <div className={`p-5 rounded-2xl relative tracking-wider text-sm border-b-4 transition-all duration-75 ease-in-out border-2 border-slate-300 ${className}`}>
            {children}
        </div>
    );
}