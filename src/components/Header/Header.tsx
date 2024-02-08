import { SliderSingleProps, Typography } from "antd";
import { HeaderContainer, StyledSlider } from "./styled-components";
import { CompanyInformation } from "types/company";
import dayjs from "dayjs";

interface HeaderProps {
    selectedCompany?: CompanyInformation;
    handleDateRangeChange: (newDateRange: [number, number]) => void;
}

export function Header({selectedCompany, handleDateRangeChange}: HeaderProps): JSX.Element {
    const sortedDatePrices = selectedCompany?.dayPricesList;
    const maxValue = sortedDatePrices?.length || 100;

    const marks: SliderSingleProps["marks"] = {
        0: sortedDatePrices ? dayjs(sortedDatePrices[0]?.date).format("DD/MM/YYYY") : null,
        maxValue: {
            label: sortedDatePrices ? dayjs(sortedDatePrices[maxValue]?.date).format("DD/MM/YYYY") : null,
            style: {
                transform: "translateX(400%)",
                color: "#000"
            }
        }
    };

    return (
        <HeaderContainer>
            <Typography.Title>Portfolio Tracker</Typography.Title>
            <StyledSlider
                range
                style={{display: "inline-block"}}
                marks={marks}
                tooltip={{
                    formatter: (value)=><div>{(sortedDatePrices && value !== undefined) ? dayjs(sortedDatePrices[value]?.date).format("DD/MM/YYYY") : value}</div>
                }}
                min={0}
                max={maxValue}
                defaultValue={[0, maxValue]} 
                onChange={(value) => handleDateRangeChange([value[0], value[1]])}
            />
        </HeaderContainer>
    );
}