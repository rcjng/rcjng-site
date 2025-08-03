export const ExperienceType = {
    ACADEMIC: "ACADEMIC",
    PROFESSIONAL: "PROFESSIONAL",
} as const;

export type ExperienceType = Readonly<typeof ExperienceType[keyof typeof ExperienceType]>;