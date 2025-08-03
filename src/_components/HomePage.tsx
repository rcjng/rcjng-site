import React from "react";
import { fetchRcjngPortfolio } from "@/_apis/fetchRcjngPortfolio";
import { ExperiencesSectionAcademic } from "./ExperiencesSectionAcademic";
import { ExperiencesSectionProfessional } from "./ExperiencesSectionProfessional";
import { Header } from "./Header";
import { HomeLayout } from "./HomeLayout";
import { LocationSection } from "./LocationSection";
import { ExperienceType } from "@/_types/ExperienceType";
import { Footer } from "./Footer";

export const HomePage = React.memo(function HomePage() {
    const { person, summary, experiences } = fetchRcjngPortfolio();

    const professionalExperiences = experiences.filter((experience) => experience.type === ExperienceType.PROFESSIONAL);
    const academicExperiences = experiences.filter((experience) => experience.type === ExperienceType.ACADEMIC);

    const pageTitle = `🧑🏻‍💻 ${person.firstName} ${person.lastName}`;
    return (
        <HomeLayout className={"HomePage"}>
            <Header title={pageTitle} summary={summary} />
            
            <hr />

            <LocationSection location={summary.location} />
            <ExperiencesSectionProfessional experiences={professionalExperiences} />
            <ExperiencesSectionAcademic experiences={academicExperiences} />

            <hr />

            <Footer />
        </HomeLayout> 
    );
});