import { Flex, Typography } from "antd";
import styled from "styled-components";

export const CompaniesListContainer = styled(Flex)({
    width: "30%",
    flexDirection: "column",
    
    "@media (max-width: 1200px)": {
        width: "100%",

    },
});

export const ListTitle = styled(Typography.Title)({
    cursor: "pointer",
    transition: ".3s ease",
});