import { IMightHaveClassName } from "@/_types/IMightHaveClassName";
import clsx from "clsx";
import React, { ReactNode } from "react";

interface IProps extends IMightHaveClassName {
    readonly children: ReactNode;
}

export const HomeLayout = React.memo(function HomeLayout({ children, className }: IProps) {
    return (
        <div className={clsx(className, "flex justify-center")}>
            <div className="flex flex-col max-w-5xl p-8 gap-8">{children}</div>
        </div>
    );
});