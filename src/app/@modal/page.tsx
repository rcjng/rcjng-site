'use client'
import React from "react";
import { SkillsDialogContent } from "./SkillsDialogContent";
import { useSearchParams } from "next/navigation";
import { QueryStringParams } from "@/_types/QueryStringParams";
import { ModalType } from "@/_types/ModalType";
import { DialogWrapper } from "./DialogWrapper";
import { ContactDialogContent } from "./ContactDialogContent";
import { ResumeDialogContent } from "./ResumeDialogContent";

const Modal = React.memo(function Modal() {
    const searchParams = useSearchParams();
    const modalQsp = searchParams.get(QueryStringParams.MODAL);

    if (modalQsp == null) {
        return null;
    }
    return (
        <DialogWrapper searchParams={searchParams}>
            {modalQsp === ModalType.SKILLS && <SkillsDialogContent />}
            {modalQsp === ModalType.CONTACT && <ContactDialogContent />}
            {modalQsp === ModalType.RESUME && <ResumeDialogContent />}
        </DialogWrapper>
    );
});

export default Modal;
