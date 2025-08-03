import { RCJNG_PORTFOLIO } from "@/_data/rcjng_portfolio";
import { IPortfolio } from "@/_types/IPortfolio";

export function fetchRcjngPortfolio(): Readonly<IPortfolio> {
    return RCJNG_PORTFOLIO;
}