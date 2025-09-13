import { ExperienceType } from "@/_types/ExperienceType";
import { IExperience } from "@/_types/IExperience";
import { IPerson } from "@/_types/IPerson"
import { IPortfolio } from "@/_types/IPortfolio";
import { IPortfolioSummary } from "@/_types/IPortfolioSummary";
import { ISkill } from "@/_types/ISkill";
import { SkillType } from "@/_types/SkillType";

export const RCJNG_EXPERIENCES: Readonly<IExperience>[] = [
    {
        id: "UCSD-09-2020",
        type: ExperienceType.ACADEMIC,
        title: "Bachelor of Science, Computer Science",
        organizationTitle: "University of California, San Diego",
        organizationSubTitle: "3.84/4.00 GPA",
        organizationEmoji: "🧜‍♂",
        organizationSiteUrl: "https://www.ucsd.edu/",
        location: "La Jolla, CA",
        skillsAndAwards: ["Regents Scholar"],
        startDateIso: "2020-09-24",
        endDateIso: "2023-03-24",
    },
    {
        id: "Werfen-06-2022",
        type: ExperienceType.PROFESSIONAL,
        title: "Software Engineer Intern",
        organizationTitle: "Werfen",
        organizationSubTitle: "R&D",
        organizationEmoji: "🩸",
        organizationSiteUrl: "https://werfen.com/",
        location: "San Diego, CA",
        startDateIso: "2022-06-13T07:00:00.000Z",
        endDateIso: "2023-03-24T07:00:00.000Z",
        summary: "At Werfen, I worked on the Whole Blood Hemostasis R&D team, primarily developing new features and internal testing tools for [REDACTED], an upcoming Class II whole blood hemostasis medical device.",
        descriptions: [
            `<strong>Achieved ~5% relative standard deviation in sensor sampling accuracy</strong> by developing a diagnostic test suite for thermal, pneumatic, optical, and cooling subsystems of a Class II whole blood hemostasis testing device.`,
            `<strong>Decreased debugging time by 10%</strong> by adding object-oriented telemetry and debugging interfaces, I2C heater sensor sampling, and analog-to-digital conversion in C/C++.`,
            `<strong>Increased testing efficiency by 20%</strong> by extending Python testing and automation scripts (NumPy, SciPy, Matplotlib, pandas, Tkinter) for optimal device simulation, calibration, and report generation.`
         ],  
        skillsAndAwards: ["C/C++", "Python", "NumPy", "Matplotlib", "Pandas", "Tkinter"]
    },
    {
        id: "Epic-04-2023",
        type: ExperienceType.PROFESSIONAL,
        title: "Software Engineer",
        organizationTitle: "Epic",
        organizationSubTitle: "MyChart",
        organizationEmoji: "🗂️",
        organizationSiteUrl: "https://www.epic.com/",
        location: "Madison, WI",
        startDateIso: "2023-04-03T07:00:00.000Z",
        endDateIso: "2025-06-16T07:00:00.000Z",
        summary: "At Epic, I worked on MyChart's provider discovery, online scheduling, and appointment management team, primarily spearheading a multi-year, cross-platform, full-stack migration of the Visits List and Visit Details activities.",
        descriptions: [
            `<strong>Reduced MyChart Visits List load time by 24%</strong> by creating an incremental, multi-source data loader with client-side caching and pagination using React and Redux.`,
            `<strong>Saved ~8,840 annual staff hours in phone calls for international orgs</strong> by designing and implementing a full-stack MyChart activity end-to-end to display appointment waiting lists to patients.`,
            `<strong>Offered appointments across multiple orgs to patients 29 days sooner on average</strong>, scaling the automated waitlist, Fast Pass, to leverage FHIR APIs and RESTful web services for interoperability.`,
            `<strong>Empowered 300+ MyChart developers to create consistent frontends</strong> by developing reusable Sass mixins, generalized React hooks and components, and shared APIs for an internal SDK.`,
            `<strong>Led a team of 4 developers</strong> in migrating MyChart Visit Details to a full-stack React and .NET architecture, <strong>improving the pre-visit patient experience for 191M+ users across 600+ orgs</strong>.`,
            `<strong>Accelerated MyChart feature development by up to 67%</strong> through unifying native iOS/Android activities into responsive web views with deep link and native OS support.`,
            `Uncovered critical silent-failure bugs by implementing 100% input validation in appointment management Epic APIs serving 150M+ requests annually across 5 patient portals.`,
            `Added launch mode support in MyChart for 3rd-party SAML, Smart-on-FHIR, and Web PACS integration links, aiding pre-visit preparation, video visit launching, hardware testing, and building wayfinding.`
         ],
        skillsAndAwards: ["TypeScript", "React", "Redux", "C#/.NET", "Jest", "Sass", "Java", "Swift"]
    },
    {
        id: "Palantir-06-2025",
        type: ExperienceType.PROFESSIONAL,
        title: "Software Engineer",
        organizationTitle: "Palantir",
        organizationSubTitle: "Gotham",
        organizationEmoji: "🔮",
        organizationSiteUrl: "https://www.palantir.com/",
        location: "Palo Alto, CA",
        startDateIso: "2025-06-23T07:00:00.000Z",
        endDateIso: undefined,
        summary: "At Palantir, I work on Gotham's product care team, primarily developing new enhancements and debugging existing features to ensure optimal quality, usability, and performance.",
        descriptions: [
         `<strong>Improved Gotham graph table column expansion load time by an average of 27%</strong> by trimming Redux Saga workers, optimizing idempotent Redux actions, and applying targeted memoization.`,
         `<strong>Boosted Gotham Listogram keyboard navigation efficiency by 20% across workflows</strong> by adding accelerator keys and power-user shortcuts.`,
         `<strong>Ensured 100% data accuracy across property types</strong> in Gotham graph table by developing a Java (Witchcraft) API endpoint and improving Redux state row data indexing for column-cell mappings.`
        ],
        skillsAndAwards: ["TypeScript", "React", "Redux", "Redux-Saga", "Sass", "Java", "Docker"]
    }
]  as const;

export const RCJNG_SKILLS: Readonly<ISkill>[] = [
    {
        name: "TypeScript",
        type: SkillType.FRONTEND,
     },
     {
        name: "React",
        type: SkillType.FRONTEND,
     },
     {
        name: "Redux",
        type: SkillType.FRONTEND,
     },
     {
        name: "CSS/Sass",
        type: SkillType.FRONTEND,
     },
     {
        name: "Next.js",
        type: SkillType.FRONTEND,
     },
     {
        name: "Tailwind",
        type: SkillType.FRONTEND,
     },
     {
        name: "Java",
        type: SkillType.BACKEND,
     },
     {
        name: "C#/.NET",
        type: SkillType.BACKEND,
     },
     {
        name: "SQL",
        type: SkillType.BACKEND,
     },
     {
        name: "Dagger",
        type: SkillType.BACKEND,
     },
     {
        name: "REST APIs",
        type: SkillType.BACKEND,
     },
     {
        name: "Android",
        type: SkillType.MOBILE,
     },
     {
        name: "iOS",
        type: SkillType.MOBILE,
     },
     {
        name: "Swift",
        type: SkillType.MOBILE,
     },
     {
        name: "Jest",
        type: SkillType.TESTING,
     },
     {
        name: "Enzyme",
        type: SkillType.TESTING,
     },
     {
        name: "JUnit",
        type: SkillType.TESTING,
     },
     {
        name: "Docker",
        type: SkillType.BACKEND,
     }
] as const;

export const RCJNG_PERSON: IPerson = {
    id: "rcjng",
    username: "rcjng",
    firstName: "Robert",
    lastName: "Jiang",
    nickName: "Rob",
    email: "robertcjiang@gmail.com",
} as const;

export const RCJNG_SUMMARY: Readonly<IPortfolioSummary> = {
    username: "rcjng",
    title: "Software Engineer",
    organization: "Palantir",
    location: "🌉 San Mateo, CA",
    description: `👋🌎! I'm a <strong>Full-Stack Software Engineer, currently at 🔮 Palantir</strong>. I can hold a conversation with ChatGPT and have over decades of experience Googling things.`,
    photoUri: "/profile_photo_2500x2500.png",
    photoAltText: "Rob at the Griffith Observatory in Los Angeles, CA",
    resumeRid: "1Fv_pmVRsmLcegiHDmO9AyOseKZWTNXPbqW1lr0Yij64"
} as const;

export const RCJNG_PORTFOLIO: Readonly<IPortfolio> = {
    experiences: RCJNG_EXPERIENCES,
    person: RCJNG_PERSON,
    skills: RCJNG_SKILLS,
    summary: RCJNG_SUMMARY,
    timestamp: "2025-08-02"
} as const;