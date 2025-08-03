'use client'
import React from "react";
import { fetchRcjngPortfolio } from "@/_apis/fetchRcjngPortfolio";
import { ISkill } from "@/_types/ISkill";

export const SkillsDialogContent = React.memo(function SkillsDialogContent() {
    const skills = fetchRcjngPortfolio().skills;

    const skillsByType = React.useMemo(() => {
        const grouped: Record<string, Readonly<ISkill>[]> = {};
        
        skills.forEach(skill => {
            if (!grouped[skill.type]) {
                grouped[skill.type] = [];
            }
            grouped[skill.type].push(skill);
        });
        
        return grouped;
    }, [skills]);

    
    
    return (
        <div className="flex flex-col items-center gap-4 min-w-[60vw] sm:min-w-auto">
            <h2 className="text-xl font-bold ">
                🧠 <span className="bg-gradient-to-l from-pink-300 via-rose-400 to-pink-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            
            <div className="flex flex-wrap gap-8">
                {Object.entries(skillsByType).map(([type, typeSkills]) => (
                    <div key={type} className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold mb-2">{type}</h3>
                        <ul className="list-disc list-outside ml-6 space-y-1">
                            {typeSkills.map((skill, index) => (
                                <li key={`${skill.type}-${skill.name}-${index}`} className="">
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
});