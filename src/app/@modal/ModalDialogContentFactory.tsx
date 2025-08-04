import React from "react";
import { ModalType } from "@/_types/ModalType";
import { ContactDialogContent } from "./ContactDialogContent";
import { ResumeDialogContent } from "./ResumeDialogContent";
import { SkillsDialogContent } from "./SkillsDialogContent";

interface IProps {
    readonly modalType: string;
}

export const ModalDialogContentFactory = React.memo(function ModalDialogContentFactory(
    { modalType }: Readonly<IProps>
) {
    switch (modalType) {
        case ModalType.SKILLS:
            return <SkillsDialogContent />;
        case ModalType.CONTACT:
            return <ContactDialogContent />;
        case ModalType.RESUME:
            return <ResumeDialogContent />;
        default:
            return undefined;
    }
});