import React from "react";
import { IExperience } from "@/_types/IExperience";
import { ExperiencesDescriptionListItem } from "./ExperiencesDescriptionListItem";


interface IProps {
    readonly experience: Readonly<IExperience>;
}
const DEFAULT_END_DATE = "Present";
const DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  });

export const ExperiencesListItem = React.memo(function ExperiencesListItem({ experience }: IProps) {
    const {
        title,
        organizationTitle,
        organizationSubTitle,
        organizationEmoji,
        organizationSiteUrl,
        location,
        startDateIso,
        endDateIso,
        summary,
        descriptions,
        skillsAndAwards,
    } = experience;
    const OrganizationTitle = organizationSiteUrl == null 
        ? `${organizationTitle}`
        : (
            <a href={organizationSiteUrl} target="_blank" rel="noopener noreferrer" className="_link">
                {organizationTitle}↗️
            </a>
        );

    const startDate = DATE_FORMATTER.format(new Date(startDateIso));
    const endDate = endDateIso == null ? DEFAULT_END_DATE : DATE_FORMATTER.format(new Date(endDateIso));
    const skillsAndAwardsList = skillsAndAwards?.join(", ");
    return (
        <li className="ExperienceListItem flex flex-col gap-4">
            <div className="experienceHeader flex flex-col">
                <div className="row-1 flex flex-col sm:flex-row justify-between text-lg">
                    <h3 className="font-bold w-fit">
                        <span>{organizationEmoji} {OrganizationTitle}</span>
                    </h3>
                    <p className="w-fit font-bold">{organizationSubTitle}</p>
                </div>
                <div className="row-2 flex flex-col sm:flex-row justify-between text-lg">
                    <p className="w-fit">{title}</p>
                    <p className="w-fit">{startDate} - {endDate}</p>
                </div>
                <div className="row-3 flex flex-col sm:flex-row justify-between">
                    <p className="w-fit italic">{skillsAndAwardsList}</p>
                    <p className="w-fit">{location}</p>
                </div>
            </div>

            {summary != null 
                ? <pre className="outline-2 outline-gray-400 p-4 rounded text-sm whitespace-pre-wrap break-words">
                    <code className="summary">BLUF: {summary}</code>
                </pre>
                : null}
            <ul className="description flex flex-col gap-1">
                {descriptions?.map((description, index) => <ExperiencesDescriptionListItem key={index} description={description} />)}
            </ul>
        </li>
    );
});
