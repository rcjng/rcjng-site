import React from "react";
import { fetchRcjngPortfolio } from "@/_apis/fetchRcjngPortfolio";

export const ResumeDialogContent = React.memo(function ResumeDialogContent() {
    const summary = fetchRcjngPortfolio().summary;
    const resumeRid = summary.resumeRid;
    const googleDocsResumeUrl = `https://docs.google.com/document/d/${resumeRid}/preview?rm=print`;
    return (
        <div className="flex flex-col items-center justify-center gap-4 w-[60vw] sm:w-[80vw]">
            <h2 className="text-xl font-bold ">
                📄 <span className="bg-gradient-to-b from-gray-100 via-gray-300 to-yellow-100 bg-clip-text text-transparent">Resume</span>
            </h2>
            
            <iframe src={googleDocsResumeUrl} className="w-full h-[60vh]" allowFullScreen></iframe>
            
            <div className="flex items-center gap-2">
                <span>📝</span>
                <a href={googleDocsResumeUrl} target="_blank" rel="noopener noreferrer" className="_link">Google Docs</a>
            </div>
        </div>
    );
});