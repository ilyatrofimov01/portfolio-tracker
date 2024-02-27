import { Flex, Typography } from "antd";
import styled from "styled-components";

interface CompaniesListItemProps {
    selected: boolean;
}

export const CompaniesListContainer = styled(Flex)({
    flexDirection: "column",
    gap: "10px"
});

export const CompaniesListItem = styled(Flex)<CompaniesListItemProps>(({selected}) => ({
    textTransform: "uppercase",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    transition: ".3s ease",
    padding:"4px 8px",
    borderRadius: "4px",
    boxSizing: "border-box",
    border: selected ? "1px solid #000" : "none",
    backgroundColor: selected ? "#91caff" : "transparent",
    "&:hover": {
        backgroundColor: "#fff",
    }
}));

export const StyledText = styled(Typography.Paragraph)({
    fontSize: "1.2em",
    margin: "0 !important",
});