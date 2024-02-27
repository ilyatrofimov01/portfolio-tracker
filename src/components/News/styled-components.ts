import { Flex, Typography } from "antd";
import styled from "styled-components";

export const NewsContainer = styled(Flex)({
    flexDirection: "column",
});

export const NewsListItem = styled(Flex)({
    flexDirection: "column",
    cursor: "pointer",
    transition: ".3s ease",
    padding:"12px 8px",
    borderRadius: "4px",
    boxSizing: "border-box",
    "&:hover": {
        backgroundColor: "#fff",
    },
    "&:not(:last-child)": {
        borderBottom: "1px solid #d9d9d9",
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