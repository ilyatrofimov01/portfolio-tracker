export interface ChartCompanyDayPrice {
    id: string;
    data: ChartValue[];
}

export interface ChartValue {
    x: string;
    y: number;
}