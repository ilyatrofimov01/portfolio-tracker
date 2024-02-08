export interface ChartCompanyDayPrice {
    id: string;
    color: string;
    data: ChartValue[];
}

export interface ChartValue {
    x: string;
    y: number;
}