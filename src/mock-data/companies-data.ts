import { appleData } from "mock-data/apple-data";
import { nvidiaData } from "mock-data/nvidia-data";
import { teslaData } from "./tesla-data";

export const companiesData = [
    {
        id: "1",
        name: "Apple Inc.",
        symbol: "AAPL",
        currentPrice: 189.30,
        dayPricesList: appleData,
    },
    {
        id: "2",
        name: "NVIDIA Corporation",
        symbol: "NVDA",
        currentPrice: 682.23,
        dayPricesList: nvidiaData,
    },
    {
        id: "3",
        name: "Tesla Inc",
        symbol: "TSLA",
        currentPrice: 185.10,
        dayPricesList: teslaData,
    }
];