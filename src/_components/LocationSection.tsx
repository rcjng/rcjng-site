import React from "react";
import { HomeSection } from "./HomeSection";

interface IProps {
    readonly location: string;
}

export const LocationSection = React.memo(function LocationSection({ location }: Readonly<IProps>) {
    const Content = (
        <figure className="w-full flex flex-col gap-2 items-center">
            <iframe
                width="100%"
                height="200"
                loading="eager"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={encodeURI(`https://maps.google.com/maps?q=${location}&z=9&output=embed`)}
                className="rounded-2xl"
            />
            <figcaption className="text-center">{location}</figcaption>
        </figure>
    );
    return (
        <HomeSection heading="📍 Location" Content={Content} />
    );
});