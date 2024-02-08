export interface CompanyInformation {
    id: string;
    name: string;
    symbol: string;
    currentPrice: number;
    dayPricesList: CompanyDayPrice[];
    profile: CompanyProfile;
}

export interface CompanyDayPrice {
    date: string;
    price: string;
    open: string;
    high: string;
    low: string;
    vol: string;
    change: string;
}

export interface CompanyProfile {
    sector: string;
    industry: string;
    employees: number;
    equity: number;
}