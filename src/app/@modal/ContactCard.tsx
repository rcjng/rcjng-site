import React from "react";
import Image from "next/image";
import { IContactCard } from "@/_types/IContactCard";

interface IProps {
    readonly contactCard: Readonly<IContactCard>;
}

export const ContactCard = React.memo(function ContactCard({ contactCard }: IProps) {
  return (
    <div className="relative w-[60vw] max-w-lg rounded-3xl shadow-2xl">
      {/* Background layer */}
        <div className="absolute top-2 left-2 w-full h-full rounded-3xl -z-10"></div>

        {/* Main card */}
        <div className="bg-gradient-to-br from-[#fdf6e3] to-[#eee8d5] rounded-3xl overflow-hidden text-black">
            {/* Top section */}
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row p-6">
                <div className="flex flex-col sm:flex-row items-center grow gap-4">
                        <div className="relative w-[64px] aspect-square">
                            <Image 
                                src={contactCard.photoUri}
                                alt={contactCard.photoAltText}
                                fill
                                priority
                                sizes="64px"
                                loading="eager"
                                className="rounded-full object-contain"
                            />
                        </div>
                    <div className="flex flex-col justify-start">
                        <h2 className="text-lg font-semibold">{contactCard.name}</h2>
                        <div className="flex items-center gap-2">
                            <span>🏢</span>
                            <a
                                href={`https://${contactCard.organization}.com`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_link"
                            >
                                {contactCard.organization}
                            </a>
                        </div>
                        {contactCard.address && <div className="flex items-center gap-2">
                            <span>📍</span>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${contactCard.address}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_link"
                            >
                                {contactCard.address}
                            </a>
                        </div>}
                    </div>
                </div>
                <div>
                    <span>🪪</span>
                    <a
                        href={contactCard.vCardUri}
                        download
                            className="_link"
                        >
                        vCard⬇️
                    </a>
                </div>
            </div>

            {/* Bottom section */}
            <div className="bg-gradient-to-tl from-[#002b36] to-[#586e75] text-white p-6 space-y-3 text-sm">
                <div className="flex flex-row flex-wrap items-center justify-between gap-2">
                    <div className="left flex flex-col items-start gap-2">
                        {contactCard.email && <div className="flex items-center gap-2">
                            <span>📧</span>
                            <a
                                href={`mailto:${contactCard.email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_link"
                            >
                                {contactCard.email}
                            </a>
                        </div>}
                    </div>
                    <div className="right flex flex-col items-start gap-2">
                        {contactCard.phone && <div className="flex items-center gap-2">
                            <span>📞</span>
                            <a
                                href={`tel:${contactCard.phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_link"
                            >
                                {contactCard.phone}
                            </a>
                        </div>}
                        {contactCard.website && <div className="flex items-center gap-2">
                            <span>🌐</span>
                            <a
                                href={`https://${contactCard.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="_link"
                            >
                                {contactCard.website}
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
});
