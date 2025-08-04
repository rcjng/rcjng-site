import React from "react";

interface Commit {
    commit?: {
        committer?: {
            date?: string;
        };
    };
}

interface IProps {
    readonly name: string;
}

export const Footer = React.memo(async function Footer({ name }: Readonly<IProps>) {
    const lastCommitDate = await getLastCommitDate();

    return (
        <footer className="flex flex-col items-center gap-2">
            {lastCommitDate != null 
                ? (
                    <p className="text-center text-sm text-gray-500">
                        <span>📅 Last updated: <span className="font-bold">{lastCommitDate}</span>.</span>
                    </p>
                )
                : undefined}

            <p className="text-center text-sm text-gray-500">
                🚀 Built with <span className="font-bold">Next.js</span> ⚛️, <span className="font-bold">Tailwind CSS</span> 💨, and <span className="font-bold">Windsurf 🌊</span>. 
            </p>

            <p className="text-center text-sm text-gray-500">
                ©️ {new Date().getFullYear()} {name}. All rights reserved.
            </p>
        </footer>
    );
});

async function getLastCommitDate(): Promise<string | undefined> {
    const response = await fetch(
        `https://api.github.com/repos/rcjng/rcjng-site/commits?per_page=1`,
        { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
        return undefined;
    }
    const responseData = await response.json() as Commit[];
    const commitDate = responseData[0]?.commit?.committer?.date;
    if (commitDate == null) {
        return undefined;
    }
    return formatDate(commitDate);
}

function formatDate(isoDate: string) {
    const date = new Date(isoDate);

    const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();

    return`${mm}.${dd}.${yyyy}`;
}