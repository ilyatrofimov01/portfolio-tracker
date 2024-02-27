import { Flex, Typography } from "antd";
import styled from "styled-components";

export const DatePriceChartContainer = styled(Flex)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    backgroundColor: "#fff",
    "@media (max-width: 600px)": {
        overflow: "auto"
    }
});

export const DatePriceChartWrapper = styled("div")({
    width: "100%",
    height: "350px",
    "@media (max-width: 600px)": {
        width: "800px"
    },
});

export const StyledTitle = styled(Typography.Title)({
    margin: "0",
    textAlign: "center"
});