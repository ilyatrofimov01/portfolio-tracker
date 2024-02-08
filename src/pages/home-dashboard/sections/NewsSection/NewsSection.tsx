import { Typography } from "antd";
import { NewsSectionContainer } from "./styled-components";
import { NewsList } from "components/News";
import { CompanyInformation } from "types/company";

interface NewsSectionProps {
    selectedCompany?: CompanyInformation;
}

export function NewsSection({selectedCompany}: NewsSectionProps): JSX.Element {
    return (
        <NewsSectionContainer>
            <Typography.Title level={2}>News</Typography.Title>
            {selectedCompany ? <NewsList selectedCompany={selectedCompany} /> : "Select a company to view news."}
        </NewsSectionContainer>
    );
}