import { QueryStringParams } from "@/_types/QueryStringParams";
import { useRouter } from "next/navigation";
import React from "react";

interface IProps {
    readonly children: React.ReactNode;
    readonly showClose?: boolean
    readonly searchParams: URLSearchParams;
}

export const DialogWrapper = React.memo(function DialogWrapper({ children, showClose = true, searchParams }: Readonly<IProps>) {
    const router = useRouter();
    
    const dialogRef = React.useRef<HTMLDialogElement>(null);
    const closeDialog = React.useCallback(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete(QueryStringParams.MODAL);
        router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, [router, searchParams]);
    
    const handleOutsideClick = React.useCallback((event: MouseEvent) => {
        const dialog = dialogRef.current
        if (!dialog || !dialog.open) return

        const rect = dialog.getBoundingClientRect()
        const clickedInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom

        if (!clickedInside) {
            closeDialog();
        }
    }, [closeDialog, dialogRef]);
    
    React.useEffect(() => {
        window.addEventListener('mousedown', handleOutsideClick)
        return () => {
            window.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [handleOutsideClick]);
    
    React.useEffect(() => {
        dialogRef.current?.showModal();
    }, []);
    return (
        <dialog 
            ref={dialogRef} 
            className="_card pt-6 pb-6 pl-12 pr-12 rounded shadow-xl top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-4 items-end backdrop:bg-black/50 backdrop:backdrop-blur-sm"
        >
            {children}

            {showClose ? <button type="button" onClick={closeDialog} className="hover:cursor-pointer inline-flex justify-center items-center gap-1 rounded-md border border-transparent bg-gray-100 dark:bg-gray-900 px-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-500  dark:hover:bg-gray-500">
                ❌ Close
            </button> : null}
        </dialog>
    );
});