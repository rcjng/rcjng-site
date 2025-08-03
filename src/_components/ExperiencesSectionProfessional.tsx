import React from "react";
import { ExperiencesListItem } from "./ExperiencesListItem";
import { IExperience } from "@/_types/IExperience";
import { HomeSection } from "./HomeSection";

interface IProps {
    readonly experiences: readonly Readonly<IExperience>[];
}

export const ExperiencesSectionProfessional = React.memo(function ExperiencesSectionProfessional(
    { experiences }: IProps
) {
    const sortedExperiences = React.useMemo(() => {
        return [...experiences].sort((a, b) => {
            // If endDateIso is undefined, treat as most recent (current)
            const aEndDateIso = a.endDateIso || '9999-12-31';
            const bEndDateIso = b.endDateIso || '9999-12-31';
            
            // Sort by most recent end date (descending)
            if (aEndDateIso !== bEndDateIso) {
                return bEndDateIso.localeCompare(aEndDateIso);
            }
            
            // If end dates are the same, sort by most recent start date (descending)
            return b.startDateIso.localeCompare(a.startDateIso);
        });
    }, [experiences]);

    const Content = (
        <ul className="flex flex-col gap-8">
            {sortedExperiences.map(
                (experience) => <ExperiencesListItem key={experience.id} experience={experience} />
            )}
        </ul>
    );
    return (
        <HomeSection heading="💼 Experience" Content={Content} />
    );
});