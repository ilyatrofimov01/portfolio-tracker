import { ResponsiveLine } from "@nivo/line";
import { getChartProps } from "./utils/getChartProps";
import { CompanyDayPrice } from "types/company";

interface DatePriceChartProps {
    prices: CompanyDayPrice[];
    dateRange?: [number, number];
}

export function DatePriceChart({prices, dateRange}: DatePriceChartProps): JSX.Element {
    const {dataList, maxY, minY} = getChartProps(prices, dateRange);

    return (
        <ResponsiveLine
            data={dataList}
            margin={{
                top: 0,
                right: 0,
                bottom: 50,
                left: 60 
            }}
            xScale={{ type: "point" }}
            colors={{scheme: "red_yellow_blue"}}
            yScale={{
                type: "linear",
                min: minY - 1,
                max: maxY + 1,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Date",
                legendOffset: 36,
                legendPosition: "middle"
            }}
            axisLeft={{
                tickSize: 1,
                tickPadding: 1,
                tickRotation: 0,
                legend: "Price",
                legendOffset: -40,
                legendPosition: "middle"
            }}
            pointSize={7}
            pointBorderWidth={1}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: "top-right",
                    direction: "row",
                    justify: false,
                    translateX: 40,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: "left-to-right",
                    itemWidth: 140,
                    itemHeight: 15,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: "square",
                    symbolBorderColor: "rgba(0, 0, 0, .5)",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemBackground: "rgba(0, 0, 0, .03)",
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );

}