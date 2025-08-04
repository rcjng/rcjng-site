import React from "react";
import { QueryStringParams } from "@/_types/QueryStringParams";
import { useSearchParams } from "next/navigation";
import { DialogWrapper } from "./DialogWrapper";
import { ModalDialogContentFactory } from "./ModalDialogContentFactory";

export const ModalDialog = React.memo(function ModalDialog() {
    const searchParams = useSearchParams();
    const modalType = searchParams.get(QueryStringParams.MODAL);

    if (modalType == null) {
        return undefined;
    }
    return (
        <DialogWrapper searchParams={searchParams}>
            <ModalDialogContentFactory modalType={modalType} />
        </DialogWrapper>
    );    
});
