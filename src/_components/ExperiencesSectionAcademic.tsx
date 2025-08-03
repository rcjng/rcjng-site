import React from "react";
import { IExperience } from "@/_types/IExperience";
import { ExperiencesListItem } from "./ExperiencesListItem";
import { HomeSection } from "./HomeSection";

interface IProps {
    readonly experiences: readonly Readonly<IExperience>[];
}

export const ExperiencesSectionAcademic = React.memo(function ExperiencesSectionAcademic({ experiences }: IProps) {
    const Content = (
        <ul className="ExperiencesSectionAcademic flex flex-col gap-8">
            {experiences.map((experience) => (
                <ExperiencesListItem key={experience.id} experience={experience} />
            ))}
        </ul>
    );
    return (
        <HomeSection heading="🎓 Education" Content={Content} />
    );
});