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

export const Footer = React.memo(function Footer({ name }: Readonly<IProps>) {
    const [lastCommitDate, setLastCommitDate] = React.useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        getLastCommitDate()
            .then(setLastCommitDate)
            .catch(() => setLastCommitDate(undefined))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return undefined;
    }
    return (
        <footer className="flex flex-col items-center gap-2">
            {lastCommitDate != null 
                ? (
                    <p className="text-center text-sm text-gray-500">
                        <span>📅 Last updated: <span className="font-bold">{lastCommitDate}</span>.</span>
                    </p>
                ) : undefined}

            <p className="text-center text-sm text-gray-500">
                🚀 Built with ⚛️ <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="_link">Next.js↗️</a>, 💨 <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="_link">Tailwind CSS↗️</a>, and 🌊 <a href="https://windsurf.com/" target="_blank" rel="noopener noreferrer" className="_link">Windsurf↗️</a>. 
            </p>

            <p className="text-center text-sm text-gray-500">
                ©️ {new Date().getFullYear()} {name}. All rights reserved.
            </p>
        </footer>
    );
});

async function getLastCommitDate(): Promise<string | undefined> {
    const response = await fetch(
        `https://api.github.com/repos/rcjng/rcjng-site/commits?per_page=1`
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