'use client'
import React from "react";
import { fetchRcjngPortfolio } from "@/_apis/fetchRcjngPortfolio";
import { ExperiencesSectionAcademic } from "./ExperiencesSectionAcademic";
import { ExperiencesSectionProfessional } from "./ExperiencesSectionProfessional";
import { Header } from "./Header";
import { HomeLayout } from "./HomeLayout";
import { LocationSection } from "./LocationSection";
import { ExperienceType } from "@/_types/ExperienceType";
import { Footer } from "./Footer";
import { LoadingPlaceholder } from "@/_common/LoadingPlaceholder";

const LOADING_PLACEHOLDER = <LoadingPlaceholder />;

export const HomePage = React.memo(function HomePage() {    
    const { person, summary, experiences } = fetchRcjngPortfolio();
    const professionalExperiences = experiences.filter((experience) => experience.type === ExperienceType.PROFESSIONAL);
    const academicExperiences = experiences.filter((experience) => experience.type === ExperienceType.ACADEMIC);
    const fullName = `🧑🏻‍💻 ${person.firstName} (${person.nickName}) ${person.lastName}`;

    const [isMounted, setIsMounted] = React.useState(false);
    React.useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return LOADING_PLACEHOLDER;
    }
    return (
        <HomeLayout className={"HomePage"}>
            <Header name={fullName} summary={summary} />
            <hr />
            <LocationSection location={summary.location} />
            <ExperiencesSectionProfessional experiences={professionalExperiences} />
            <ExperiencesSectionAcademic experiences={academicExperiences} />
            <hr />
            <Footer name={fullName} />
        </HomeLayout> 
    );
});