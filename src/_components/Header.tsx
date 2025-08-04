import React from "react";
import Image from "next/image";
import { IPortfolioSummary } from "@/_types/IPortfolioSummary";
import { useSearchParams } from "next/navigation";
import { QueryStringParams } from "@/_types/QueryStringParams";
import { ModalType } from "@/_types/ModalType";

interface IProps {
    name: string;
    summary: IPortfolioSummary;
}

export const Header = React.memo(function Header({ name, summary }: Readonly<IProps>) {
    const searchParams = useSearchParams();

    const onModalButtonClick = React.useCallback((modalType: ModalType) => () => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set(QueryStringParams.MODAL, modalType);
        window.history.replaceState(null, "", `?${newSearchParams.toString()}`);
    }, [searchParams]);

    return (
        <header className="flex flex-col gap-8">
            <div className="flex justify-center gap-8 flex-col items-start sm:flex-row">
                <div className="flex flex-col justify-evenly gap-4 h-full">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="text-lg" dangerouslySetInnerHTML={{ __html: summary.description }} />
                </div>
                <div className="m-auto relative w-full min-w-1/4 aspect-square sm:w-1/3">
                    <Image 
                        src={summary.photoUri}
                        alt={summary.photoAltText}
                        fill
                        priority
                        sizes="100vw"
                        loading="eager"
                        className="rounded-2xl object-contain"
                    />
                </div>
            </div>

            <div className="p-[2px] rounded bg-gradient-to-br from-green-700 via-blue-500  to-green-100">
                <ul className="flex flex-wrap items-center justify-evenly gap-4 rounded bg-[var(--background)] p-4">
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
            </div>
        </header>
    );
});