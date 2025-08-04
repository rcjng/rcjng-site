'use client'
import React from "react";
import Image from "next/image";
import { IPortfolioSummary } from "@/_types/IPortfolioSummary";
import { useRouter, useSearchParams } from "next/navigation";
import { QueryStringParams } from "@/_types/QueryStringParams";
import { ModalType } from "@/_types/ModalType";

interface IProps {
    title: string;
    summary: IPortfolioSummary;
}

export const Header = React.memo(function Header({ title, summary }: Readonly<IProps>) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const onModalButtonClick = React.useCallback((modalType: ModalType) => () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(QueryStringParams.MODAL, modalType);
        
        router.push(`?${newSearchParams.toString()}`, { scroll: false });
    }, [router, searchParams]);

    return (
        <header className="flex flex-col gap-4">
            <div className="flex justify-center gap-8 flex-col items-start sm:flex-row">
                <div className="flex flex-col justify-evenly gap-4 h-full">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <p className="text-lg">{summary.description}</p>
                </div>
                <div className="m-auto relative w-full min-w-1/4 aspect-square sm:w-1/3">
                    <Image 
                        src={summary.photoUri}
                        alt={summary.photoAltText}
                        fill
                        loading="eager"
                        className="rounded-2xl object-contain"
                    />
                </div>
            </div>

            <ul className="flex flex-wrap justify-center gap-4">
                <li>
                    <span>🧠 <button type="button" onClick={onModalButtonClick(ModalType.SKILLS)} className="_link">Skills</button></span>
                </li>
                <li>
                    <span>📄 <button type="button" onClick={onModalButtonClick(ModalType.RESUME)} className="_link">Resume</button></span>
                </li>
                <li>
                    <span>📩 <button type="button" onClick={onModalButtonClick(ModalType.CONTACT)} className="_link">Contact</button></span>
                </li>
                <li>
                    <span>🔗 <a href={`https://www.linkedin.com/in/${summary.username}`} target="_blank" rel="noopener noreferrer" className="_link">LinkedIn</a></span>
                </li>
                <li>
                    <span>🐙 <a href={`https://github.com/${summary.username}`} target="_blank" rel="noopener noreferrer" className="_link">GitHub</a></span>
                </li>
            </ul>
        </header>
    );
});