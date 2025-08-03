export const ModalType = {
    SKILLS: "Skills",
    CONTACT: "Contact",
    RESUME: "Resume"
} as const;

export type ModalType = Readonly<typeof ModalType[keyof typeof ModalType]>;
