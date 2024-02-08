import { Flex } from "antd";
import styled from "styled-components";

export const HomeDashboardContainer = styled("div")({
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: "32px",
});

export const CompaniesChartContainer = styled(Flex)({
    width: "100%",
    flexDirection: "row",
    gap: "32px",

    "@media (max-width: 1400px)": {
        flexDirection: "column-reverse",

    },
});

export const ProfileNewsContainer = styled(Flex)({
    width: "100%",
    flexDirection: "row",
    gap: "32px",
    justifyContent: "space-between",

    "@media (max-width: 1400px)": {
        flexDirection: "column",

    },
});