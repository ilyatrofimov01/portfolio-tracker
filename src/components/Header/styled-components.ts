import { Flex, Slider } from "antd";
import styled from "styled-components";

export const HeaderContainer = styled(Flex)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "0 40px",
    boxSizing: "border-box",
    borderBottom: "1px solid #000",

    "@media (max-width: 800px)": {
        flexDirection: "column",

    },
});

export const StyledSlider = styled(Slider)({
    width: "100%",
    maxWidth: "350px",
    margin: "0 20px",
    boxSizing: "border-box",
});