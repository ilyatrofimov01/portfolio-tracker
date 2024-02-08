import { Flex, Typography } from "antd";
import styled from "styled-components";

export const NewsContainer = styled(Flex)({
    flexDirection: "column",
    gap: "10px"
});

export const NewsListItem = styled(Flex)({
    flexDirection: "column",
    cursor: "pointer",
    transition: ".3s ease",
    padding:"4px 8px",
    borderRadius: "4px",
    boxSizing: "border-box",
    borderBottom: "1px solid gray",
    "&:hover": {
        backgroundColor: "#f0f0f0",
    }
});

export const ItemTitle = styled(Typography.Text)({
    fontSize: "18px",
    color: "black",
});

export const ItemDate = styled(Typography.Text)({
    fontSize: "12px",
    color: "gray"
});

export const ItemSnippet = styled(Typography.Text)({
    fontSize: "14px",
});