import React from "react";

interface IProps {
    readonly message?: string;
}

export const LoadingPlaceholder = React.memo(function LoadingPlaceholder({ 
    message = "Loading" 
}: IProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
            <div className="flex flex-col items-center gap-2">
                <div className="text-lg font-medium">
                    {message}
                </div>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[var(--solarized-base1)] dark:bg-[var(--solarized-base03)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-[var(--solarized-base2)] dark:bg-[var(--solarized-base02)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-[var(--solarized-base3)] dark:bg-[var(--solarized-base01)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
});
