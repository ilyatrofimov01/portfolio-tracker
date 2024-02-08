import { Typography } from "antd";
import { NewsSectionContainer } from "./styled-components";
import { NewsList } from "components/News";

export function NewsSection(): JSX.Element {
    return (
        <NewsSectionContainer>
            <Typography.Title level={2}>News</Typography.Title>
            <NewsList />
        </NewsSectionContainer>
    );
}