import { Spin } from "antd";
import { Header } from "components/Header";
import { CompaniesChartContainer, HomeDashboardContainer, ProfileNewsContainer } from "./styled-components";
import { useDataLoad } from "./hooks/useDataLoad";
import { Charts, Companies, NewsSection } from "./sections";
import { useState } from "react";
import { CompanyInformation } from "types/company";
import { ProfileSection } from "./sections/ProfileSection";

export function HomeDashboard(): JSX.Element {
    const [selectedCompany, setSelectedCompany] = useState<CompanyInformation | undefined>();
    const [dateRange, setDateRange] = useState<[number, number]>();

    const {loading, companies} = useDataLoad({
        setDefaultCompany: (company) => setSelectedCompany(company)
    });

    const handleDateRangeChange = (newDateRange: [number, number]): void => {
        setDateRange(newDateRange);
    };
    const handleCompanyClick = (company: CompanyInformation): void => {
        setSelectedCompany(company);
    };

    return ( 
        <Spin
            spinning={loading} tip="Loading"
            size="small"
        >
            <Header selectedCompany={selectedCompany} handleDateRangeChange={handleDateRangeChange} />
            <HomeDashboardContainer>
                <CompaniesChartContainer>
                    <Charts selectedCompany={selectedCompany} dateRange={dateRange} />
                    <Companies
                        dateRange={dateRange}
                        selectedCompany={selectedCompany}
                        companies={companies}
                        onCompanyClick={handleCompanyClick}
                    />
                </CompaniesChartContainer>
                <ProfileNewsContainer>
                    <NewsSection selectedCompany={selectedCompany} />
                    <ProfileSection 
                        companyProfile={selectedCompany?.profile}
                    />
                </ProfileNewsContainer>
            </HomeDashboardContainer>
        </Spin>
    );
}