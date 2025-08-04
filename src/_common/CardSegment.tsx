import React from "react";
import { IMightHaveClassName } from "@/_types/IMightHaveClassName";
import clsx from "clsx";

interface IProps extends IMightHaveClassName {
    readonly children: React.ReactNode;
}

export const CardSegment = React.memo(function CardSegment({ children, className }: Readonly<IProps>) {
    const intrinsicClassName = "CardSegment _card";
    return (
        <div className={clsx(intrinsicClassName, className)}>
            {children}
        </div>
    );
});