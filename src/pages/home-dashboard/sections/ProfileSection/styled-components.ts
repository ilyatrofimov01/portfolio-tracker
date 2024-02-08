import { Flex } from "antd";
import styled from "styled-components";

export const ProfileContainer = styled(Flex)({
    flexDirection: "column",
    width: "30%",

    "@media (max-width: 1200px)": {
        width: "100%",
    },
});