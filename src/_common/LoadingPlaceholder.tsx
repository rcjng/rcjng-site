import React from "react";

interface IProps {
    readonly message?: string;
}

export const LoadingPlaceholder = React.memo(function LoadingPlaceholder({ 
    message = "Loading..." 
}: IProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
            <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 dark:border-gray-700 rounded-full animate-spin border-t-blue-500 dark:border-t-blue-400"></div>
                <div className="absolute top-2 left-2 w-12 h-12 border-4 border-gray-100 dark:border-gray-800 rounded-full animate-spin border-t-purple-500 dark:border-t-purple-400 animate-reverse"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-4 border-gray-50 dark:border-gray-900 rounded-full animate-spin border-t-green-500 dark:border-t-green-400"></div>
            </div>

            <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {message}
                </span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>

            <div className="text-2xl animate-pulse">
                ⚛️💨🌊
            </div>
            <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full animate-pulse"></div>
            </div>
        </div>
    );
});
