import { QueryStringParams } from "@/_types/QueryStringParams";
import React from "react";

interface IProps {
    readonly children: React.ReactNode;
    readonly showClose?: boolean
    readonly searchParams: URLSearchParams;
}

export const DialogWrapper = React.memo(function DialogWrapper(
    { children, showClose = true, searchParams }: Readonly<IProps>
) {
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    
    const closeDialog = React.useCallback(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete(QueryStringParams.MODAL);
        window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    }, [searchParams]);
    
    const handleKeyDown = React.useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            closeDialog();
        }
    }, [closeDialog]);
    
    const handleBackdropClick = React.useCallback((event: React.MouseEvent<HTMLDialogElement>) => {
        const dialog = dialogRef.current;
        if (dialog == null) return;
        
        const rect = dialog.getBoundingClientRect();
        const clickedInDialog = 
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
            
        if (!clickedInDialog) {
            closeDialog();
        }
    }, [closeDialog]);
    
    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog != null && !dialog.open) {
            dialog.showModal();
        }

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            if (dialog != null && dialog.open) {
                dialog.close();
            }
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);
    
    return (
        <dialog 
            ref={dialogRef}
            className="_card pt-6 pb-6 pl-12 pr-12 rounded shadow-xl flex flex-col gap-4 items-end max-w-[90vw] max-h-[90vh] overflow-auto backdrop:bg-black/50 backdrop:backdrop-blur-sm fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0"
            onClick={handleBackdropClick}
        >
            {children}

            {showClose ? <button type="button" onClick={closeDialog} className="hover:cursor-pointer inline-flex justify-center items-center gap-1 rounded-md border border-transparent bg-gray-100 dark:bg-gray-900 px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-500  dark:hover:bg-gray-500">
                ❌ Close
            </button> : null}
        </dialog>
    );
});