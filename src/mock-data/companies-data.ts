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
        profile: {
            sector: "Information Technology",
            industry: "Technology",
            employees: 161000,
            equity: 63.09
        }
        
    },
    {
        id: "2",
        name: "NVIDIA Corporation",
        symbol: "NVDA",
        currentPrice: 682.23,
        dayPricesList: nvidiaData,
        profile: {
            sector: "Information Technology",
            industry: "Semiconductor",
            employees: 26196,
            equity: 33.26
        }
    },
    {
        id: "3",
        name: "Tesla Inc",
        symbol: "TSLA",
        currentPrice: 185.10,
        dayPricesList: teslaData,
        profile: {
            sector: "Consumer Discretionary",
            industry: "Automotive (Electric Vehicles), Energy Storage, Solar Energ",
            employees: 140473,
            equity: 63.609
        }
    }
];