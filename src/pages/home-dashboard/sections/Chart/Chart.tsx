import { Typography } from "antd";
import { DatePriceChartContainer, DatePriceChartWrapper } from "./styled-components";
import { DatePriceChart } from "components/DatePriceChart";
import { CompanyInformation } from "types/company";

interface ChartsProps {
    dateRange?: [number, number];
    selectedCompany?: CompanyInformation;
}

export function Charts({selectedCompany, dateRange}: ChartsProps): JSX.Element {  
  
    return (
        <DatePriceChartContainer>
            <Typography.Title level={2}>Apple Inc. Prices</Typography.Title>
            <DatePriceChartWrapper>
                {selectedCompany ? 
                    <DatePriceChart prices={selectedCompany.dayPricesList} dateRange={dateRange} /> :
                    <Typography.Text>Select a company to see its prices</Typography.Text>}
            </DatePriceChartWrapper>
        </DatePriceChartContainer>
    );
}