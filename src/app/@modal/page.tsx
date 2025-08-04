'use client'
import React from "react";
import { ModalDialog } from "./ModalDialog";
import { LoadingPlaceholder } from "@/_common/LoadingPlaceholder";

const LOADING_PLACEHOLDER = <LoadingPlaceholder />;

const Modal = React.memo(function Modal() {
    return (
        <React.Suspense fallback={LOADING_PLACEHOLDER}>
            <ModalDialog />
        </React.Suspense>
    );
});

export default Modal;
