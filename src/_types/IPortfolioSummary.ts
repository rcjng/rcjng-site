import { IPortfolioSummaryAction } from "./IPortfolioSummaryAction";

export interface IPortfolioSummary {
    readonly username: string;
    readonly title: string;
    readonly organization: string;
    readonly location: string;
    readonly description: string;
    readonly photoUri: string;
    readonly photoAltText: string;
    readonly resumeRid: string;
    readonly actions?: readonly Readonly<IPortfolioSummaryAction>[];
}