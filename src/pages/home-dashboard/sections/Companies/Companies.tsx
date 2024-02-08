import { CompaniesListContainer, ListTitle } from "./styled-components";
import { CompaniesList } from "components/CompaniesList";
import { CompanyInformation } from "types/company";
import { useState } from "react";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

interface CompaniesProps {
    companies: CompanyInformation[];
    onCompanyClick: (company: CompanyInformation) => void;
    selectedCompany?: CompanyInformation;
}

export function Companies({selectedCompany, companies, onCompanyClick}: CompaniesProps): JSX.Element {
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

    return (
        <CompaniesListContainer>
            <ListTitle 
                level={2} 
                onClick={() => setSortDirection(prev => prev === "desc" ? "asc" : "desc")}
            >
                Companies {sortDirection === "desc" ? <CaretDownOutlined /> : <CaretUpOutlined />}
            </ListTitle>
            <CompaniesList
                sortDirection={sortDirection}
                selectedCompany={selectedCompany} 
                companies={companies}
                onCompanyClick={onCompanyClick}
            />
        </CompaniesListContainer>
    );
}