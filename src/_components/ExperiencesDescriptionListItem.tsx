import React from "react";

interface IProps {
    readonly description: string;
}

export const ExperiencesDescriptionListItem = React.memo(function ExperiencesDescriptionListItem({ description }: IProps) {
    return (
        <li className="ExperiencesDescriptionListItem list-disc ml-4" dangerouslySetInnerHTML={{ __html: description }} />
    );
});