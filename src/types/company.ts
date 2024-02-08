import { CompanyDayPrice } from "./companyDayPrice";

export interface CompanyInformation {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    dayPricesList: CompanyDayPrice[];
}