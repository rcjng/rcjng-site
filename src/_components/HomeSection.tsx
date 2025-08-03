import React from "react";
import { CardSegment } from "../_common/CardSegment";

interface IProps {
    readonly heading: string;
    readonly Content: React.ReactNode;
}
export const HomeSection = React.memo(function HomeSection({ heading, Content }: Readonly<IProps>) {
    return (
        <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">{heading}</h2>

           <CardSegment>
                {Content}
           </CardSegment>
        </section>
    );
});