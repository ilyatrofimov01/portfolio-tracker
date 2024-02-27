import { CustomLayerProps, ResponsiveLine } from "@nivo/line";
import { getChartProps } from "./utils/getChartProps";
import { CompanyDayPrice } from "types/company";
import { DotsItem, DotsItemSymbolProps } from "@nivo/core";
import { FunctionComponent } from "react";

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
                bottom: 25,
                left: 35 
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

            // axisBottom={{
            //     tickSize: 5,
            //     tickPadding: 5,
            //     tickRotation: 0,
            //     legend: "Date",
            //     legendOffset: 36,
            //     legendPosition: "middle"
            // }}
            // axisLeft={{
            //     tickSize: 1,
            //     tickPadding: 1,
            //     tickRotation: 0,
            //     legend: "Price",
            //     legendOffset: -40,
            //     legendPosition: "middle"
            // }}
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
            layers={[
                "grid",
                "markers",
                "axes",
                "areas",
                "crosshair",
                "lines",
                "slices",
                "points",
                "mesh",
                "legends",
                (props) => HighestPricePoint({
                    maxPriceIndex: dataList[0].data.findIndex((price) => price.y === maxY),
                    ...props
                })
            ]}
        />
    );
}

interface HighestPricePointProps extends CustomLayerProps {
    maxPriceIndex: number;
}

function HighestPricePoint({maxPriceIndex, ...props}: HighestPricePointProps): React.ReactNode {

    if (!props.points[maxPriceIndex]) {
        return null;
    }

    return (
        <g className="arrow-test" style={{fill: "red"}}>
            <DotsItem
                key={"highlighted-point"}
                x={props.points[maxPriceIndex].x}
                y={props.points[maxPriceIndex].y}
                datum={{
                    x: props.points[maxPriceIndex].x,
                    y: props.points[maxPriceIndex].y
                }}
                symbol={props.pointSymbol as FunctionComponent<DotsItemSymbolProps>}
                size={props.pointSize ?? 1}
                color={"#000"}
                borderWidth={props.pointBorderWidth ?? 1}
                borderColor={"#000"}
                label={"Highest Price"}
                labelYOffset={props.pointLabelYOffset}
            />
        </g>
    );
}