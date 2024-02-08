import { Flex } from "antd";
import styled from "styled-components";

export const CenteredContainer = styled(Flex)({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    boxSizing: "border-box",
    height: "100%",
});