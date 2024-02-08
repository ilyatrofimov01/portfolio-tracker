import { ChartCompanyDayPrice, ChartValue } from "types/charts";
import { CompanyDayPrice } from "types/company";
import dayjs from "dayjs";

interface GetChartProps {
    dataList: ChartCompanyDayPrice[];
    maxY: number;
    minY: number;
}

export function getChartProps(prices: CompanyDayPrice[], dateRange?: [number, number]): GetChartProps {
    const displayPrices = dateRange ? prices.slice(dateRange[0], dateRange[1] + 1) : prices;
    const priceDate: ChartValue[] = displayPrices.map((price) => ({
        x: dayjs(price.date).format("DD/MM"),
        y: parseFloat(price.price)
    }));

    const highestPrice = displayPrices.map((price) => ({
        x: dayjs(price.date).format("DD/MM"),
        y: parseFloat(price.high)
    }));

    const maxY = highestPrice.reduce((acc, price) => price.y > acc ? price.y : acc, 0);
    const minY = priceDate.reduce((acc, price) => price.y < acc ? price.y : acc, maxY);

    const dataList = [{
        id:"Price vs Date",
        data: priceDate
    },
    {
        id: "Highest Price vs Date",
        data: highestPrice
    }];

    return {
        dataList,
        maxY,
        minY
    };
}