import { IPortfolioSummaryAction } from "@/_types/IPortfolioSummaryAction";
import React from "react";

interface IProps {
    readonly action: IPortfolioSummaryAction;
}

export const HomeHeaderActionsListItem = React.memo(function HomeHeaderActionsListItem({ action }: IProps) {
    return (
        <li>
            <a href={action.url} target={action.isExternal ? "_blank" : "_self"} className="button">{action.label}</a>
        </li>
    );
});
