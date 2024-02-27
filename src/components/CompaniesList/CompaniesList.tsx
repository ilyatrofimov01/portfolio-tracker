import { CompanyInformation } from "types/company";
import { CompaniesListContainer, CompaniesListItem, StyledText } from "./styled-components";

interface CompaniesListProps {
    companies: CompanyInformation[];
    onCompanyClick: (company: CompanyInformation) => void;
    selectedCompany?: CompanyInformation;
    sortDirection?: "asc" | "desc";
    dateRange?: [number, number];
}

export function CompaniesList({selectedCompany, companies, onCompanyClick, sortDirection, dateRange}: CompaniesListProps): JSX.Element {
    const sortedCompanies = companies.sort(((company1, company2) => {
        if (sortDirection === "desc" ) {
            return company2.currentPrice - company1.currentPrice;
        }

        return company1.currentPrice - company2.currentPrice;
    }));
    
    return (
        <CompaniesListContainer>
            {sortedCompanies.map((company) => {
                const dayPricesList = dateRange ? company.dayPricesList.slice(dateRange[0], dateRange[1] + 1) : company.dayPricesList;

                return (
                    <CompaniesListItem
                        key={company.id} 
                        selected={selectedCompany !== undefined && selectedCompany.id === company.id}
                        onClick={() => onCompanyClick(company)}
                    >
                        <StyledText>{company.symbol}</StyledText>
                        <StyledText>${dayPricesList[dayPricesList.length-1]?.price}</StyledText>
                    </CompaniesListItem>
                );
            })}
        </CompaniesListContainer>
    );
}